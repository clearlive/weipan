<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Cookie;
use wxpay\PayNotifyCallBack;
use think\Log;


class Wechat extends Controller
{
    public function index()
    {
        
    }

    /**
     * 获取微信用户信息
     * @author lukui  2017-02-18
     * @return [type] [description]
     */
    public function get_wx_userinfo()
    {
    	
    	//微信登录
    	$WeChat = new \org\WeChat;
    	$wechat = Db::name('wechat')->find();
    	$url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
    	$WeChat -> setconf($wechat['appid'],$wechat['appsecret'],$url);

    	//有code 获取token 和 用户信息
    	if(input('get.code')){
    		$code = input('get.code');
    		//获取token
    		$_token = $WeChat->get_access_token($code);
    		//获取用户信息,记入cookie
    		$_user = $WeChat->get_user_info($_token['access_token'],$_token['openid']);
    		
    		cookie(['prefix' => '', 'expire' => 60*60*24]);
    		cookie('wx_info',$_user);
    		// cookie('wx_openid',$_user['openid']);
    		// cookie('wx_nickname',$_user['nickname']);
    		// cookie('wx_sex',$_user['sex']);
    		// cookie('wx_city',$_user['city']);
    		// cookie('wx_province',$_user['province']);
    		// cookie('wx_country',$_user['country']);
    		// cookie('wx_headimgurl',$_user['headimgurl']);
    		//跳转去做登录
    		$this->redirect('login/login');
    		
    	}else{
    		$authorize_url = $WeChat->get_authorize_url('STATE');
    		$this->redirect($authorize_url);
    	}
		
    }





    public function notifyurl()
    {
        $notify = new PayNotifyCallBack();
        $notify->handle(true);
        $bpid = input('param.bpid');
        if(!$bpid){
            Log::write('未找到订单，bpid= ' . $bpid);
            exit;
        }
        $succeed = ($notify->getReturnCode() == 'SUCCESS') ? true : false;
       
        if ($succeed || 1==1) {
            
            //订单详情
            $order = db('balance')->where('bpid',$bpid)->find();
            
            if($order['bptype'] != 3){
                echo "SUCCESS";exit;
            }
            $_edit['bpid'] = $bpid;
            $_edit['bptype'] = 1;
            $_edit['isverified'] = 1;
            $_edit['cltime'] = time();
            $_edit['bpbalance'] = $order['bpbalance']+$order['bpprice'];
            
            $is_edit = db('balance')->update($_edit);
            
            if($is_edit){
                // add money
                $_ids=db('userinfo')->where('uid',$order['uid'])->setInc('usermoney',$order['bpprice']);
                //资金日志
                set_price_log($order['uid'],1,$order['bpprice'],'充值','用户充值',$bpid,$_edit['bpbalance']);
                
                echo "SUCCESS";
            }
            
            //echo "SUCCESS";
        }
        



        
        
    }


}

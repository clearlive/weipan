<?php
namespace app\index\controller;
use think\Db;
use think\Cookie;



class Index extends Base
{

	/**
	 * 首页 行情列表
	 * @author lukui  2017-02-18
	 * @return [type] [description]
	 */
    public function index()
    {

        //获取产品信息
		$uid = $this->uid;
        $pro = Db::name('productinfo')->alias('pi')->field('pi.pid,pi.ptitle,pd.Price,pd.UpdateTime,pd.Low,pd.High,pi.procode')
        		->join('__PRODUCTDATA__ pd','pd.pid=pi.pid')
        		->where('pi.isdelete',0)->order('pi.pid desc')->select();
        //dump(cookie('pid7'));
		
		//银行卡
		$data['banks'] = db('banks')->select();

		//地区
		$province = db('area')->where(array('pid'=>0))->select();

        //已签约信息
        $data['mybank'] = db('bankcard')->alias('b')->field('b.*,ba.bank_nm')
        				  ->join('__BANKS__ ba','ba.id=b.bankno')
                          ->where('uid',$uid)->find();
						  
		$data['sub_bankno'] = substr($data['mybank']['accntno'],-4,4);
		
        $this->assign('pro',$pro);

	

		
		
        return $this->fetch();
    }
	
	public function ajax_order(){
		$pro_length = 50;
		$phone_pre_arr = array("139","138","137","136","135","134","159","158","157","150","151","152","187","188","130","131","132","156","155","133","153","189");
		$phone_pre_length = count($phone_pre_arr);
		//$price_arr = array(100,200,300,400,500,600,700,800,500,500,1000,1000,5000,5000,10000,20000);
		//$price_arr_length = count($price_arr);
		$type_arr = array('买涨','买跌');
		$type_arr_length = count($type_arr);
		$order_pub = array();
		for($i=0;$i<$pro_length;$i++){
			//$rand_pid_index = rand(0,($pro_length - 1));
			$phone_pre_index = rand(0,($phone_pre_length - 1));
			//$rand_price_index = rand(0,($price_arr_length - 1));
			//$rand_type_index = rand(0,($type_arr_length - 1));
			
			$o_pub = array();
			//$o_pub['buytime'] = time();
			//$o_pub['pid'] = $id_arr[$rand_pid_index];
			$o_pub['phone'] = $phone_pre_arr[$phone_pre_index] . "****" . rand(1000,9999);
			
			
			//$o_pub['price'] = $price_arr[$rand_price_index];
			
			$o_pub['price'] = 50 * rand(1,20);
			if(rand(1,100)>=90){
				$o_pub['price'] = 50 * rand(20,100);
			}
			/*
			else if(rand(1,100)>=80){
				$o_pub['price'] = 50 * rand(0,100);
			}
			*/

			//$o_pub['otype'] = $type_arr[$rand_type_index];
			array_push($order_pub,$o_pub);
		}
		
		
		//foreach($order_pub as $k => $v){
			//$order_pub[$k]['buytime'] = date("H:i:s",$v['buytime']);
		//}
		 echo json_encode($order_pub);
	}
	
    public function ajaxindexpro()
    {
    	//获取产品信息
        $pro = Db::name('productinfo')->alias('pi')->field('pi.pid,pi.ptitle,pd.Price,pd.UpdateTime,pd.Low,pd.High')
        		->join('__PRODUCTDATA__ pd','pd.pid=pi.pid')
        		->where('pi.isdelete',0)->order('pi.pid desc')->select();
        $newpro = array();
        foreach ($pro as $k => $v) {
        	$newpro[$v['pid']] = $pro[$k];
        	$newpro[$v['pid']]['UpdateTime'] = date('H:i:s',$v['UpdateTime']);
        	
        	
            // if(!isset($_COOKIE['pid'.$v['pid']])){
            //     cookie('pid'.$v['pid'],$v['Price']);
            //     continue;
            // }
        	if($v['Price'] < cookie('pid'.$v['pid']) ){  //跌了
        		$newpro[$v['pid']]['isup'] = 0;
        	}elseif($v['Price'] > cookie('pid'.$v['pid']) ){  //涨了
        		$newpro[$v['pid']]['isup'] = 1;
        	}else{  //没跌没涨
        		$newpro[$v['pid']]['isup'] = 2;
        	}
            
        	cookie('pid'.$v['pid'],$v['Price']);

        }

        return base64_encode(json_encode($newpro));
    }

    public function getchart()
    {
        
        $data['hangqing'] = '商品行情';
        $data['jiaoyijilu'] = '交易记录';
        $data['shangpinmingcheng'] = '商品名称';
        $data['xianjia'] = '现价';
        $data['zuidi'] = '最低';
        $data['zuigao'] = '最高';
        $data['xianjia'] = '现价';
        $data['xianjia'] = '现价';

        
        $res = base64_encode(json_encode($data));
        return $res;
    }



}

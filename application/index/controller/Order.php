<?php
namespace app\index\controller;
use think\Db;


class Order extends Base
{

	/**
	 * 下单
	 * @author lukui  2017-07-20
	 * @return [type] [description]
	 */
	public function addorder()
	{
		$data = input('post.');
		
		$adddata['uid'] = $data['uid']=$this->uid;
		$conf = $this->conf;
		//持仓限制
		$allfee = Db::name('order')->where(array('ostaus'=>0,'uid'=>$data['uid']))->sum('fee');
		$allfee = $allfee?$allfee:0;
		/*
		if($allfee+$data['order_price'] > getconf('order_max_price')){
			return WPreturn('持仓最大为'.getconf('order_max_price').'！',-1);
		}
		*/
		if($data['order_price'] > $conf['order_max_price']){
			return WPreturn('单笔持仓最大为'.$conf['order_max_price'].'！',-1);
		}
		$allcount = Db::name('order')->where(array('ostaus'=>0,'uid'=>$data['uid']))->count();
		if($allcount >  $conf['max_order_count']){
			return WPreturn('最大持仓数量为'.$conf['max_order_count'].'！',-1);
		}
		//验证是否开市
		
		//用户信息
		$user = Db::name('userinfo')->field('ustatus,usermoney,uid')->where('uid',$data['uid'])->find();
		//验证用户是否被冻结
		if($user['ustatus'] != 0){
			return WPreturn('您的账户已被冻结！',-1);
		}

		//手续费
		$web_poundage = round($data['order_price']*$conf['web_poundage']/100,2);
		
		//验证余额是否够
		if($user['usermoney'] < $data['order_price'] + $web_poundage){
			return WPreturn('您得余额不足，请充值！',-1);
		}
		//验证金额 20 ~ 5000
		if($data['order_price'] < $conf['order_min_price'] || $data['order_price'] > $conf['order_max_price']){
			return WPreturn('抱歉！单笔持仓在'.$conf['order_min_price'].'~'.$conf['order_max_price'].'之间！',-1);
		}
		//手续费
		$web_poundage = getconf('web_poundage');
		//建仓
		$adddata['buytime'] = time();
		$adddata['endprofit'] = $data['order_sen'];
		$adddata['pid'] = $data['order_pid'];
		$adddata['ostyle'] = $data['order_type'];
		$adddata['buyprice'] = $data['newprice'];
		$adddata['endloss'] = $data['order_shouyi'];
		$adddata['eid'] = 2;
		$adddata['selltime']=$adddata['buytime']+$adddata['endprofit'];
		$adddata['fee'] = $data['order_price'];
        $adddata['ptitle'] = db('productinfo')->where('pid',$data['order_pid'])->value('ptitle');
        $adddata['ostaus']='0';
        $adddata['sx_fee']=round($adddata['fee']*$web_poundage/100 ,2);

        $allfee = $adddata['fee'] + $adddata['sx_fee'];
        //会员建仓后金额
        $adddata['commission'] = $user['usermoney'] - $allfee;
        //订单号
        $adddata['orderno']=date('YmdHis').rand(1111,9999);
        
        //下单
        $ids = Db::name('order')->insertGetId($adddata);
        if($ids){
        	//下单成功减用户余额 
        	$u_fee = $allfee;
        	$editmoney = Db::name('userinfo')->where('uid',$data['uid'])->setDec('usermoney',$u_fee);

        	$nowmoney = $adddata['commission'];
        	if($nowmoney < 0) $nowmoney=0;
        	set_price_log($data['uid'],2,$u_fee,'下单','下单成功',$ids,$nowmoney);
        	
        	if($editmoney){
        		$adddata['oid'] = $ids;

        		//缓存加载验证
        		$order_rand = rand(1,1000);
        		cache('goorder_'.$ids,$order_rand,$adddata['endprofit']+10);
        		$adddata['order_rand'] = $order_rand;

        		$res = base64_encode(json_encode($adddata));
        		return WPreturn($res,1);
        	}else{
        		Db::table('order')->where('oid',$ids)->delete();
        		return WPreturn('下单失败，请重试！',-1);
        	}

        }else{
        	return WPreturn('下单失败，请重试！',-1);
        }
		//dump($data);
	}


	/**
	 * ajax 通过产品id 获取用户订单，
	 * @author lukui  2017-07-22
	 * @return [type] [description]
	 */
	public function ajaxorder()
	{
		$uid = $_SESSION['uid'];
		$pid = input('param.pid');
		if (empty($uid) || empty($pid)) {
			return false;
		}
		//持仓信息
		$map = array('uid'=>$uid,'ostaus'=>0,'pid'=>$pid);
		$map['selltime'] = array('gt',time());
		$hold = Db::name('order')->where($map)->order('oid desc')->select();
		if($hold){
			$hold[0]['time'] = time();
		}
		if($hold){
			return base64_encode(json_encode($hold));
		}else{
			return false;
		}

		
	}

	/**
	 * ajax 获取用户未平仓订单，
	 * @author lukui  2017-07-22
	 * @return [type] [description]
	 */
	public function ajaxorder_list()
	{
		$uid = $this->uid;

		if (empty($uid)) {
			return false;
		}
		//持仓信息
		$map = array('uid'=>$uid,'ostaus'=>0);
		$map['selltime'] = array('gt',time());

		$hold = Db::name('order')->where($map)->order('oid desc')->select();
		if($hold){
			$hold[0]['time'] = time();
		}
		if($hold){
			return base64_encode(json_encode($hold));
		}else{
			return false;
		}

		
	}

	public function get_price()
	{
		

		//此刻产品价格
		$p_map['isdelete'] = 0;
		$pro = db('productdata')->field('pid,Price')->where($p_map)->select();
		$prodata = array();
		foreach ($pro as $k => $v) {
			$prodata[$v['pid']] = $v['Price'];
		}
		return base64_encode(json_encode($prodata));;

	}
	/**
	 * ajax 通过产品id 平仓后弹框提示，
	 * @author lukui  2017-07-22
	 * @return [type] [description]
	 */
	public function ajaxalert()
	{
		$uid = $_SESSION['uid'];
		$pid = input('param.pid');
		if (empty($uid) || empty($pid)) {
			return false;
		}
		//持仓信息
		$hold = Db::name('order')->field('oid,ploss,fee,eid')->where(array('uid'=>$uid,'ostaus'=>1,'pid'=>$pid,'isshow'=>0))->order('oid desc')->find();
		//修改持仓信息
		$isedit = Db::name('order')->where('oid',$hold['oid'])->setField('isshow','1');
		if($hold && $isedit){
			return $hold;
		}else{
			return false;
		}

		
	}


	/**
	 * 持仓列表
	 * @author lukui  2017-07-18
	 * @return [type] [description]
	 */
	public function hold()
	{
		$uid = $_SESSION['uid'];
		$hold = Db::name('order')->field('oid,ptitle,buytime,fee,ostyle')->where(array('uid'=>$uid,'ostaus'=>0))->order('oid desc')->select();
		$this->assign('hold',$hold);
		return $this->fetch();
	}


	public function holdinfo()
	{
		$uid = $_SESSION['uid'];
		$oid = input('param.oid');
		if(!$oid){
			$this->redirect('hold');
		}
		$order = Db::name('order')->where('oid',$oid)->find();
		$this->assign($order);
		return $this->fetch();


	}


	/**
	 * 订单列表
	 * @author lukui  2017-07-18
	 * @return [type] [description]
	 */
	public function orderlist()
	{
		$uid = $this->uid;

		$hold = Db::name('order')->where(array('uid'=>$uid,'ostaus'=>1))->order('oid desc')->paginate(20);

		return base64_encode(json_encode($hold));
		
	}


	/**
	 * 已平仓订单详情
	 * @author lukui  2017-07-21
	 * @return [type] [description]
	 */
	public function orderinfo()
	{
		$uid = $_SESSION['uid'];
		$oid = input('param.oid');
		if(!$oid){
			$this->redirect('orderlist');
		}
		$order = Db::name('order')->where('oid',$oid)->find();
		$this->assign($order);
		return $this->fetch();
		
	}



	/**
	 * 实时获取以平仓订单
	 * @return [type] [description]
	 */
	public function get_this_order()
	{
		//sleep(2);

		$oid = input('param.oid');
		$map['oid'] = $oid;
		$map['ostaus'] = 1;

		
		$order = db('order')->where($map)->find();
		
		return base64_encode(json_encode($order));

	}

	/**
	 * 实时获取以平仓订单
	 * @return [type] [description]
	 */
	public function get_hold_order()
	{
		

		$oid = input('param.oid');
		$map['oid'] = $oid;
		$map['ostaus'] = 1;

		
		$order = db('order')->where($map)->find();
		
		return base64_encode(json_encode($order));

	}


	//平仓
	public function goorder()
	{
		$oid = input('oid');
		$price = input('price');
		$order_rand = input('order_rand');

		$static = 1;		//1成功返回并继续运行  0失败返回不运行  2 失败返回继续轮询
		if(!$oid || !$price || !$order_rand ){
			die('0');
		}


		$order = db('order')->where('oid',$oid)->find();

		//没有此订单
		if(!$order ){
			die('0');
		}

		if($order_rand != cache('goorder_'.$order['oid'])){
			die('0');
		}


		//没有平仓
		if(isset($order['ostyle']) && $order['ostaus'] == 0){
			die('2');
		}

		//已平仓 但是价格相同
		if(isset($order['sellprice']) && $order['sellprice'] == $price){
			cache('goorder_'.$order['oid'],null);
			die('1');
		}

		//已平仓 但是无效交易
		if(isset($order['is_win']) && $order['is_win'] == 3){
			cache('goorder_'.$order['oid'],null);
			die('1');
		}

		//该订单指定赢亏
		if(isset($order['kong_type']) && $order['kong_type'] != 0){
			cache('goorder_'.$order['oid'],null);
			die('1');
		}

		//该用户指定赢亏
		$risk = db('risk')->find();
		$to_win = explode('|',$risk['to_win']);
		$to_loss = explode('|',$risk['to_loss']);
		if(in_array($order['uid'],$to_win) || in_array($order['uid'],$to_loss)){
			cache('goorder_'.$order['oid'],null);
			die('1');
		}

		//已平仓 但是价格不相同
		if(isset($order['sellprice']) && $order['sellprice'] != $price){
			
			//资金变动日志
			$p_map['title'] = '结单';
			$p_map['oid'] = $order['oid'];
			
			$price_log = db('price_log')->where($p_map)->find();

			if(!$price_log){
				die('2');
			}
			

			$_data['oid'] = $oid;
			$_data['sellprice'] = $price;

			

			

			//买跌 赢利 ||  买涨 赢利
			if($order['ostyle'] == 1 && $order['buyprice'] < $price && $order['is_win'] == 1 ||
				$order['ostyle'] == 0 && $order['buyprice'] > $price && $order['is_win'] == 1){

				$_data['is_win'] = 2;
				$_data['ploss'] = $order['fee']*(-1);
				
				$u_add = 0;

				$d_add = $price_log['account'];

				db('userinfo')->where('uid',$price_log['uid'])->setDec('usermoney',$d_add);

				$price_log['account'] = round($order['fee']*($order['endloss']/100),2)*(-1);
               	$price_log['type'] = 2;

				db('price_log')->update($price_log);
				
               	db('price_log')->where('id',$price_log['id'])->delete();
               	$this->order_price_log($order['oid'],$order);
               	
               	db('order_log')->where('oid',$order['oid'])->delete();
               	//写入日志
	           	$api = controller('api');
	           	$api->set_order_log($order,$u_add);

	           	
				

			}

			//买跌 亏损 ||  买涨 亏损
			if($order['ostyle'] == 1 && $order['buyprice'] > $price && $order['is_win'] == 2 || 
				$order['ostyle'] == 0 && $order['buyprice'] < $price && $order['is_win'] == 2){

				$_data['is_win'] = 1;
				$yingli = $order['fee']*($order['endloss']/100);
				$_data['ploss'] = $yingli;

				//平仓增加用户金额
               	$u_add = $yingli + $order['fee'];
               	db('userinfo')->where('uid',$order['uid'])->setInc('usermoney',$u_add);

               	
               
               	db('price_log')->where('id',$price_log['id'])->delete();
				
               	
               	$this->order_price_log($order['oid'],$order);
               	
               	db('order_log')->where('oid',$order['oid'])->delete();
               	//写入日志
	           	$api = controller('api');
	           	$api->set_order_log($order,$u_add);
				
			}

			//无效交易
			if( $price == $order['buyprice'] && $order['is_win'] != 3){

				$_data['ploss'] = 0;
				$_data['is_win'] = 3;
				$u_add = $order['ploss'];
				
				db('userinfo')->where('uid',$order['uid'])->setDec('usermoney',$u_add);
				

				db('price_log')->where('id',$price_log['id'])->delete();
               	//写入日志
	           	$api = controller('api');

	           	db('order_log')->where('oid',$order['oid'])->delete();

	           	$api->set_order_log($order,$u_add);


				$dbuser = db('userinfo');
				$dbplog = db('price_log');
				$map['oid'] = $oid;
				$map['title'] = "对冲";
				$list = $dbplog->where($map)->select();

				foreach ($list as $key => $value) {

			
			
					if($value['account'] > 0){
						$_add = $value['account'];
						$dbuser->where('uid',$value['uid'])->setDec('usermoney',$_add);
					}elseif($value['account'] < 0){
						$_add = $value['account']*(-1);
						$dbuser->where('uid',$value['uid'])->setInc('usermoney',$_add);
					}
					
					$_update['id'] = $value['id'];
					
					
					$dbplog->where($_update)->delete();

				}

			}
			

			

			db('order')->update($_data);
			cache('goorder_'.$order['oid'],null);
			die('3');




			

			
		}
		


	}



	public function order_price_log($oid,$order)
	{
		if(!$oid || !$order){
			return false;
		}
		$dbuser = db('userinfo');
		$dbplog = db('price_log');
		$map['oid'] = $oid;
		$map['title'] = "对冲";
		$list = $dbplog->where($map)->select();

		
		foreach ($list as $key => $value) {

			
			
			if($value['account'] > 0){
				$_add = $value['account'] + $value['account']*($order['endloss']/100);
				$_update['account'] = $value['account']*($order['endloss']/100)*(-1);
				$dbuser->where('uid',$value['uid'])->setDec('usermoney',$_add);
				$_update['type'] = 2;
			}elseif($value['account'] < 0){
				$_add = $value['account']*(-1) + $value['account']*(-1)/($order['endloss']/100);
				$_update['account'] = $value['account']*(-1)/($order['endloss']/100);
				$_update['type'] = 1;
				$dbuser->where('uid',$value['uid'])->setInc('usermoney',$_add);
			}
			
			$_update['id'] = $value['id'];
			$_update['nowmoney'] = $dbuser->where('uid',$value['uid'])->value('usermoney');
			
			$dbplog->update($_update);

		}

		
		
	}

	public function getchart()
    {
        
        $data['hangqing'] = '商品行情';
        $data['jiaoyijilu'] = '交易记录';
        $data['jiaoyilishi'] = '交易历史';
        $data['chicangmingxi'] = '持仓明细';
        $data['lishimingxi'] = '历史明细';

        $res = base64_encode(json_encode($data));
        return $res;
    }





}

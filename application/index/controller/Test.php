<?php 
namespace app\index\controller;
use think\Controller;
use think\Db;

class Test extends Controller{

	public function index($oid)
	{
		if(!$oid){
			return false;
		}
		$dbuser = db('userinfo');
		$dbplog = db('price_log');
		$map['oid'] = $oid;
		$map['title'] = "对冲";
		$list = $dbplog->where($map)->select();

		
		foreach ($list as $key => $value) {

			
			
			if($value['account'] > 0){
				$_add = $value['account']*(2);
				$_update['account'] = $_add/(-2);
				$dbuser->where('uid',$value['uid'])->setDec('usermoney',$_add);
				$_update['type'] = 2;
			}elseif($value['account'] < 0){
				$_add = $value['account']*(-2);
				$_update['account'] = $_add/(2);
				$_update['type'] = 1;
				$dbuser->where('uid',$value['uid'])->setInc('usermoney',$_add);
			}
			
			$_update['id'] = $value['id'];
			$_update['nowmoney'] = $dbuser->where('uid',$value['uid'])->value('usermoney');
			
			$dbplog->update($_update);

		}

		
		
	}

	

	public function addorder()
	{

		$order = db('order');
		$_add_num = 2;
		for($i=1;$i<$_add_num;$i++){

			$rand1 = rand(1,4);
			switch ($rand1) {
				case '1':
					$endprofit = 1;
					$endloss = 75;
					break;
				case '2':
					$endprofit = 3;
					$endloss = 77;
					break;
				case '3':
					$endprofit = 5;
					$endloss = 80;
					break;
				case '4':
					$endprofit = 8;
					$endloss = 85;
					break;
				
				default:
					$endprofit = 8;
					$endloss = 85;
					break;
			}

			$rand2 = rand(0,5);
			$conf = getconf('');
			$feearr = explode('|', $conf['pay_choose']);
			
			$fee = $feearr[$rand2];

			//产品
			$rand3 = rand(0,5);
			$pro = db('productdata')->where('isdelete',0)->select();
			
			$thispro = $pro[3];



			$data['uid'] = 4022;//rand(4021,4026);
			$data['pid'] = 12;
			$data['ostyle'] = rand(0,1);
			$data['buytime'] = time();
			$data['onumber'] = 1;
			$data['selltime'] = $data['buytime']+10;
			$data['ostaus'] = 0;
			$data['buyprice'] = $thispro['Price'];
			$data['sellprice'] = 0;
			$data['endprofit'] = 10;
			$data['endloss'] = $endloss;
			$data['fee'] =$fee;
			$data['eid'] = 2;
			$data['orderno'] = time().rand(10000,99999);
			$data['ptitle'] = $thispro['Name'];
			

			
			$ids = $order->insert($data);

			if($ids){
				echo '已插入<br>';
			}else{
				echo '插入失败<br>';
			}

		}
		
	}

	

	public function adduser()
	{
		
		

		$user = db('userinfo');
		$ids = null;
		for($i=1;$i<1000;$i++){

			$data['utel'] = '157'.(rand(10000000,99999999));
			$data['username'] = $data['utel'];
			$data['nickname'] = time().rand(100,999);
			
			$data['utime'] = time();
			$data['upwd'] = md5('123456'.$data['utime']);
			$rand1 = rand(1,100);
			if($rand1 > 10){
				$data['otype'] = 0;
			}else{
				$data['otype'] = 101;
			}
			$data['rebate'] = rand(50,90);
			$data['usermoney'] = rand(0,1000000);

			$map['otype'] = 101;
			$d_users = $user->where($map)->select();
			$d_num = count($d_users);
			$oid_num = rand(0,$d_num-1);

			$data['oid'] = $d_users[$oid_num]['uid'];
			$data['managername'] = $d_users[$oid_num]['username'];
			dump($data);

			$ids = $user->insert($data);
			
			if($ids){
				echo '已插入<br>';
			}else{
				echo '插入失败<br>';
			}
			
		}
		

		

	}



	public function test()
	{
		
		$FloatLength = getFloatLength('211212');
		dump($FloatLength);


	}
}


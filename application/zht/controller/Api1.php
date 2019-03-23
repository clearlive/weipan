<?php 
namespace app\zht\controller;
use think\Controller;

class Api extends Controller
{

	/**
	 * 提现代付
	 * @author lukui  2017-09-05
	 * @param  [type] $balance  提现列表
	 * @param  [type] $userinfo 用户名称
	 * @param  [type] $bank     银行账户
	 * @return [type]           返回信息
	 */
	public function daifu($balance,$userinfo,$bank)
	{
		
		//是否已经提现
		if($balance['isverified'] != 0){
			return WPreturn('该订单已处理!',-1);
		}


		//代付信息
		header("Content-Type:text/html;charset=utf-8");
		$data['merId'] = 'M1708231621510004';
		$data['userId'] = '13378685767';
		$data['carId'] = $bank['accntno'];
		$data['openName'] = $bank['accntnm'];
		$data['openBank'] = $bank['bank_nm'];
		$data['userOrder'] = $balance['bpid'].'_'.$balance['bptime'];
		$data['phone'] =$bank['phone'];
		$data['liqType'] = 'T0';
		$data['openBank'] = $bank['bank_nm'];
		$data['voucher'] = "身份证";
		$data['voucherId'] = $bank['scard'];
		$data['reqUrl'] = "http://".$_SERVER['SERVER_NAME']."/admin/api/daifurefund.html";
		$data['money'] = sprintf("%.2f",round($balance['bpprice']*(100-$balance['reg_par'])/100,2));
		

		$sn			= 'ca5b1fa291';
		$data['reqType']='payWith';
		//签名串
		$chkValue=md5($data['reqType'].$data['merId'].$data['userId'].$data['userOrder'].$data['money'].$data['reqUrl'].$data['carId'].$data['openName'].$data['openBank'].$data['phone'].$data['voucher'].$data['voucherId'].$sn);

		$data['chkValue']=$chkValue;
		
		$url="http://pay.goldepay.cn/mobile/wdl/payWith.do";
	
		
		$ch = curl_init ();
		curl_setopt ( $ch, CURLOPT_URL,$url);//抓取指定网页
		curl_setopt ( $ch, CURLOPT_POST, 1 );//设置header
		curl_setopt ( $ch, CURLOPT_HEADER, 0 );//设置header
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );//要求结果为字符串且输出到屏幕上
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, $data);
		$return = curl_exec ( $ch );
		curl_close ( $ch );
		

		$arr = json_decode($return,1);
		
		if($arr['resultCode'] == '0000'){
			return WPreturn($arr['resultMsg'],1);
		}else{
			return WPreturn($arr['resultMsg'],-1);
		}
		

	}


	public function daifurefund()
	{
		

		//以下是post接受的传递过来的参数
		$merId 		= $_POST['merId'];   		 //商户号
		$userOrder 	= $_POST['userOrder']; 		 //接收传递的订单号
		$money		= $_POST['money']; 		 	 //金额
		$resultCode	=$_POST['resultCode'];	     //状态码
		$resultMsg	=$_POST['resultMsg']; 	     //返回错误
		$date		=$_POST['date'];  			 //时间
		$chkValue 	= $_POST['chkValue'];  		 //获取签名串
		$sn			= "ca5b1fa291";  						 //商户密匙（form表单中未提交在这重新输入值进行验证）
		$md55		= md5($merId.$userOrder.$money.$resultCode.$resultMsg.$date.$sn);//利用商户密匙重新生成md5加密串与接受的签名串进行验证

		if($resultCode == "0000"){  			 //判断返回的提现状态
			if($md55 == $chkValue){  				 //判断MD5加密串是否正确（利用商户密匙）
				$_data['isverified'] = 1;
	       		printf('success');				 //打印流水号给支付系统检索用来确认商户系统已经收到该笔流水号的交易返回应答
			}
		}else{
			$_data['isverified'] = -1;
			$_data['remarks'] = $resultMsg;
		}

		$res_order = explode("_", $userOrder);
		if($res_order == 2){
			$_data['bpid'] = $res_order[0];
		}else{
			$_data['bpid'] = 7130; 	//测试失误，但是要成功！
		}
		db('balance')->update($_data);

	}
}
 ?>
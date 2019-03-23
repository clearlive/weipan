<?php
namespace app\index\controller;
use think\Db;


class Payresultpage extends Base
{
 
	public function index()
	{
        

//支付成功跳转页面
//************************
$myappid="2018011922";//您的APPID
$appkey="400546774d1268adfed0fa31320657e5";//您的APPKEY
//***********************
header("Content-Type: text/html; charset=utf-8");
if(!isset($_REQUEST['appid'])||!isset($_REQUEST['tno'])||!isset($_REQUEST['payno'])||!isset($_REQUEST['money'])||!isset($_REQUEST['typ'])||!isset($_REQUEST['paytime'])||!isset($_REQUEST['sign'])){
	exit('参数错误');
}
$appid=(int)$_REQUEST['appid'];
$tno=$_REQUEST['tno'];//交易号 支付宝 微信 财付通 的交易号
$payno=$_REQUEST['payno'];//网站充值的用户名
$money=$_REQUEST['money'];//付款金额 
$typ=(int)$_REQUEST['typ'];
$paytime=$_REQUEST['paytime'];
$sign=$_REQUEST['sign'];
if(!$appid||!$tno||!$payno||!$money||!$typ||!$paytime||!$sign){
	exit('参数错误');
}
if($myappid!=$appid)exit('appid error');
//sign 校验
if($sign!=md5($appid."|".$appkey."|".$tno."|".$payno."|".$money."|".$paytime."|".$typ)){
	exit('签名错误');
}
//处理用户充值
		if($typ==1){
			$typname='手工充值';
		}else if($typ==2){
			$typname='支付宝充值';
		}else if($typ==3){
			$typname='财付通充值';
		}else if($typ==4){
			$typname='手Q充值';
		}else if($typ==5){
			$typname='微信充值';
		}
		
		if(!$tno)exit('没有订单号');
		if(!$payno)exit('没有付款说明');
	     //************以下代码自己写	
		//查询数据库 交易号tno是否存在  tno数据库充值表增加个字段 长度50 存放交易号
		
		//已经存在输出 存在 跳转到充值记录或其他页面 交易号唯一 
		
		//不存在 查询用户是否存在
		
		//用户存在 增加用户充值记录 写入交易号
		
		//给用户增加金额 
		
		//处理成功
		  $order["pay_name"]=$typname;
		  $order["is_use"]=$payno;
		  $order["pay_point"]=$money;
		  $order["pay_conf"]=$typ;
		  $order["isdelete"]=0;
		  $order["dotime"]=$paytime;
		  $order["pay_order"]=$tno;
		  db('payment')->add($order);  
      

	}


 

 
 

	/**
	 * 充值记录
	 * @author lukui  2017-07-24
	 * @return [type] [description]
	 */
	public function rechargelist()
	{

		return $this->fetch();
	}






	 


 
	 
 
 
 
   

 
 

 
}

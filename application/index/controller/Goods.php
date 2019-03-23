<?php
namespace app\index\controller;
use think\Db;

class Goods extends Base
{

	/**
	 * 产品详情页
	 * @author lukui  2017-02-20
	 * @return [type] [description]
	 */
	public function goods()
	{
		$pid = input('param.pid');
		if(!$pid){
			$this->redirect('index/index');
		}
		//获取产品实时行情
		$pro = GetProData($pid,'pi.ptitle,pi.procode,pi.protime,pi.propoint,pi.proscale,pd.*');
		if(!$pro){
			$this->redirect('index/index');
		}
		$pro['chajia'] = round($pro['Price']-$pro['Open'],2);
		$pro['zhangfu'] = round($pro['chajia']/$pro['Price']*100,2);
		
		//时间间隔
		$protime = $pro['protime'];
		if($protime){
			$protime = explode(',',$protime);
		}
		//点位间隔
		$propoint = $pro['propoint'];
		if($propoint){
			$propoint = explode(',',$propoint);
		}
		//盈亏比例
		$proscale = $pro['proscale'];
		if($proscale){
			$proscale = explode(',',$proscale);
		}

		//投资金额
		$pay_choose = getconf('pay_choose');
		$pay_choose_arr = explode('|',$pay_choose);

		//是否休市
		$isopen = ChickIsOpen($pid);
		

		
		//dump($pay_choose);exit;
 		$this->assign('pro',$pro);
 		$this->assign('protime',$protime);
 		$this->assign('propoint',$propoint);
 		$this->assign('proscale',$proscale);
 		$this->assign('pay_choose_arr',$pay_choose_arr);
 		$this->assign('isopen',$isopen);

		return $this->fetch();
	}


	/**
	 * 实时更新面板信息
	 * @author lukui  2017-02-20
	 * @return [type] [description]
	 */
	public function ajaxpro()
	{
		$pid = input('param.pid');	
		$pro = GetProData($pid,'pd.Price,pd.Open,pd.Close,pd.High,pd.Low,pd.UpdateTime');
		$pro['UpdateTime'] = date('H:i:s',$pro['UpdateTime']);
		
		return $pro;
	}


	public function getkdata()
	{
		
		$pid = input('param.pid');
		$pro = GetProData($pid);
		
		if(!$pro){
			return false;
		}
		$interval = input('param.interval') ? input('param.interval') : 1;
		
		switch ($interval) {
			case '1':
				$datalen = 1440;
				break;
			case '5':
				$datalen = 1440;
				break;
			case '15':
				$datalen = 480;
				break;
			case '30':
				$datalen = 240;
				break;
			case '60':
				$datalen = 120;
				break;
			
			default:
				# code...
				break;
		}
		$nowtime = time();
		$year = date('Y_m_d',$nowtime);
		if($interval == 'd'){

			$geturl = "http://vip.stock.finance.sina.com.cn/forex/api/jsonp.php/var%20_".$pro['procode']."$year=/NewForexService.getDayKLine?symbol=".$pro['procode']."&_=$year";
		}else{
			$geturl = "http://vip.stock.finance.sina.com.cn/forex/api/jsonp.php/var%20_".$pro['procode']."_".$interval."_$nowtime=/NewForexService.getMinKline?symbol=".$pro['procode']."&scale=".$interval."&datalen=".$datalen;
		}
		
		$html = file_get_contents($geturl);
		
		$_arr = explode('[',$html);
		$_str = substr($_arr[1],1,-3);
		$_data_arr = explode('},{',$_str);
		$_data_arr = array_slice($_data_arr,$datalen-30,$datalen-1);
		
		
		
		foreach ($_data_arr as $k => $v) {
			
			$_son_arr = explode(',', $v);
			
			$res_arr[] = array(
								substr($_son_arr[0],14,-1),
								substr($_son_arr[1],3,-1),
								substr($_son_arr[4],3,-1),
								substr($_son_arr[2],3,-1),
								substr($_son_arr[3],3,-1),
								substr($_son_arr[1],3,-1)
							);
			
		}
		$res_arr[30] = array(date('H:i:s',$nowtime),$pro['Price'],$pro['Open'],$pro['Close'],$pro['Low'],$pro['Price']);

		exit(json_encode($res_arr));

	}





	/**
	 * 加载k线图信息
	 * @author lukui  2017-02-20
	 * @return [type] [description]
	 */
	public function ajaxkbase()
	{
		
		$code = input('param.procode');	
		$pid = input('param.pid');	
		//产品信息
		$pro = GetProData($pid,'pi.add_data');

		$interval = input('get.interval') ? input('get.interval') : 1;
        if($interval >= 15){
            $num = $interval*10;
        }else{
            $num = 50;
        }

        if($code){
             $data = json_decode(WsGetKline($code,$interval,$num),1);
        }
        $newdata = array();
        if ($data) {
        	$huilv = 6.8517;
        	krsort($data);
            unset($data[0]);
            $i = 0;
            if(!$pro['add_data']){
            	$huilv = 1;
            	$pro['add_data'] = 1;
            }
            foreach ($data as $key => $value) {
            	$newdata[$i]['price'] = round($value['Open']*$huilv*$pro['add_data'],2);
                $newdata[$i]['open'] = round($value['Open']*$huilv*$pro['add_data'],2);
                $newdata[$i]['close'] = round($value['Close']*$huilv*$pro['add_data'],2);
                $newdata[$i]['lowest'] = round($value['Low']*$huilv*$pro['add_data'],2);
                $newdata[$i]['highest'] = round($value['High']*$huilv*$pro['add_data'],2);
                $newdata[$i]['time'] = strtotime($value['Date']).'000';
                $newdata[$i]['fulltime'] = $value['Date'];
                $newdata[$i]['goodtime'] = $value['Date'];
                $i++;
            }

        }

        return $newdata;

	}



	public function ajaxkdata()
	{
		//获取k线图数据，转化为array
        
		$pid = input('param.pid');
        $data = Db::name('productdata')->where('pid='.$pid)->find();
       	$newdata = array();
        if($data){
            $data['UpdateTime'] = $data['UpdateTime'];
            $newdata[0]['price'] = $data['Price'];
            $newdata[0]['open'] = $data['Open'];
            $newdata[0]['close'] = $data['Close'];
            $newdata[0]['lowest'] = $data['Low'];
            $newdata[0]['highest'] = $data['High'];
            $newdata[0]['time'] = $data['UpdateTime'].'000';
            $newdata[0]['fulltime'] = date('Y-m-d H:i:s',$data['UpdateTime']);
            $newdata[0]['goodtime'] = date('Y-m-d H:i:s',$data['UpdateTime']);
            
        }

        return $newdata;
	}

	public function goodsinfo()
	{
		
		$post = input('post.');
		$goods = db('productinfo')->where($post)->find();
		$res = base64_encode(json_encode($goods));
        return $res;
	}


	public function getchart()
	{
		
		$data['kaipan'] = '开盘';
		$data['zuidi'] = '最低';
		$data['zuigao'] = '最高';
		$data['Kxian'] = 'k线';
		$data['zoushi'] = '走势';
		$data['DIFF'] = 'DIFF:';
		$data['DEA'] = 'DEA:';
		$data['MACD'] = 'MACD:';
		$data['chicang'] = '持仓:';
		$data['maizhang'] = '买涨';
		$data['maidie'] = '买跌';
		$data['xiushi'] = '休市';
		$data['tousijine'] = '投资金额';
		$data['chicangmingxi'] = '持仓明细';
		$res = base64_encode(json_encode($data));
        return $res;
	}






}

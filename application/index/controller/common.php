<?php

class Common {
	
	private $merKey;

	/**
	 * 签名初始化
	 * @param merKey	签名密钥
	 */

	public function __construct($merKey) {
		$this->merKey = $merKey;
	}

	/**
	 * 创建表单
	 * @data		表单内容
	 * @gateway 支付网关地址
	 */
	function buildForm($data, $gateway) {			
			$sHtml = "<form id='payform' name='payform' action='".$gateway."' method='post'>";
			while (list ($key, $val) = each ($data)) {
	            $sHtml.= "<input type='hidden' name='".$key."' value='".$val."'/>";
			}
			$sHtml.= "</form>";
			$sHtml.= "<script>document.forms['payform'].submit();</script>";
			
			return $sHtml;
	}

	/**
	 * @name	准备签名/验签字符串
	 */
	public function prepareSign($data) {
		ksort($data);
		$array = array();
		foreach ($data as $key=>$value) {
			if($value == null) {
				continue;
			}
			array_push($array, $key.'='.$value);
		}
		return implode($array, '&');
	}

	/**
	 * @name	生成签名
	 * @param	sourceData
	 * @return	签名数据
	 */
	public function sign($data) {
		$signature = strtoupper(md5($data.'&key='.$this->merKey));
		return $signature;
	}

	/*
	 * @name	验证签名
	 * @param	signData 签名数据
	 * @param	sourceData 原数据
	 * @return
	 */
	public function verify($data, $signature) {
		$mySign = $this->sign($data);
		if (strcasecmp($mySign, $signature) == 0) {
			return true;
		} else {
			return false;
		}
	}	

}
?>

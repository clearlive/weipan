<?php
require_once "config.php";
require_once "cache.php";
require_once "common.php";



function get_access_token($config, $appid, $secret){
    $cache = new Cache();
    $value = $cache->get("access_token");
    if($value) {
        return $value;
    }
    return refresh_access_token($config, $appid, $secret);
}

function refresh_access_token($config, $appid, $secret) {
    if(empty ($appid) || empty ($secret)) {
        echo "app_id or secret is empty";
    }
    $url = $config["access_token_url"]."?appid=".$appid."&secretid=".$secret;
    
    //初始化
    $curl = curl_init();
    //设置抓取的url
    curl_setopt($curl, CURLOPT_URL, $url);
    //设置头文件的信息作为数据流输出
    curl_setopt($curl, CURLOPT_HEADER, 0);
    //设置获取的信息以文件流的形式返回，而不是直接输出。
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    //执行命令
    curl_setopt($curl, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
    $data = curl_exec($curl);
    //关闭URL请求

  echo  curl_error($curl);
    $xml = simplexml_load_string($data);
    curl_close($curl);
    dump($data);die;
    $token = (string)$xml->{"token"};
    $expir = (string)$xml->{"token_expir_second"};

    $cache = new Cache($expir);
    $cache->put("access_token", $token);
    return $token;
}
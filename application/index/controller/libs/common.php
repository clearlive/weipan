<?php

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

//数组转XML
function arrayToXml($arr)
{
    $xml = "<xml>";
    foreach ($arr as $key=>$val)
    {
        if (is_numeric($val)){
            $xml.="<".$key.">".$val."</".$key.">";
        }else{
             $xml.="<".$key."><![CDATA[".$val."]]></".$key.">";
        }
    }
    $xml.="</xml>";
    return $xml;
}

//将XML转为array
function xmlToArray($xml)
{    
    //禁止引用外部xml实体
    libxml_disable_entity_loader(true);
    $values = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);        
    return $values;
}

function sign($data, $secret, $sign_name="sign") {
    ksort($data);
    $str = "";
    foreach ($data as $key => $val) {
        if($key == $sign_name) {
            continue;
        }
       $str .= $key."=".$val."&";
    }
    $str .= "key=".$secret;
    return strtoupper(md5($str));
}
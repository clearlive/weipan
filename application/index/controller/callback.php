<?php

require_once "./libs/common.php";
require_once "./libs/config.php";

$xml = @file_get_contents('php://input');

$body = xmlToArray($xml);

function fail() {
    echo "FAIL";
    exit;
}

function success() {
    echo "SUCCESS";
    exit;
}

// print_r($body);

if(!isset($body["status"]) || $body["status"] != 0) {
    fail();
}

$my_sign = sign($body, $config["callback_secret"]);

if(!isset($body["sign"]) || $body["sign"] != $my_sign) {
    
    fail();
}

if(!isset($body["result_code"]) ||$body["result_code"] != 0) {
    // todo 处理支付失败的逻辑
    success();
}

// todo 根据transaction_id或out_trade_no获取订单信息
// $order = get_order_by_transaction_id($body["transaction_id"]);
// 或者
// $order = get_order_by_trade_no($body["out_trade_no"]);

// 获取得到order的实体信息后,再对金额进行判断

// if($order->get_total_fee() != $body["total_fee"]) {
//          金额不对，订单支付不成功
//          fail();
// }

// $order->set_success();

success();

<?php
/**
 * 微信支付配置文件
 */
return [
    'wxpay' => [
        'APPID' => 'wxf8094fc62bb3d603',
        'MCHID' => '1244448802',
        'KEY' => 'longxiangzijia1234longxiangzijia',
        'APPSECRET' => '5cd7aa18ed7132015f0914fcf000153e',
        'NOTIFY_URL' => '你接收微信异步返回支付消息的网址',
        'SSLCERT_PATH' => '../cert/apiclient_cert.pem',
        'SSLKEY_PATH' => '../cert/apiclient_key.pem',
        'REPORT_LEVENL' => 1
    ]
];
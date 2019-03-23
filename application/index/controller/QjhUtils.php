<?php
namespace app\index\controller;
class QjhUtils
{
    /**
     * 生成签名
     * @param array $data 签名所需的数组
     * @param string $apikey 商户的key
     * @return bool|string
     */
    public static function createSign($data = [], $apikey = '')
    {
        if (empty($data) || empty($apikey)) {
            return false;
        }

        ksort($data);
        $md5str = "";
        foreach ($data as $key => $val) {
            $md5str = $md5str . $key . "=" . $val . "&";
        }
        //生成签名
        return strtoupper(md5($md5str . "key=" . $apikey));
    }

    /**
     * 去聚合请求网关
     * @param string $apiurl 请求地址
     * @param array $data 请求参数
     * @return array
     */
    public static function network($apiurl = '', $data = [])
    {

        if (empty($apiurl) || empty($data)) {
            return self::error('参数错误');
        }

        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $apiurl,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 3,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => http_build_query($data),
            CURLOPT_HTTPHEADER => array(
                "cache-control: no-cache",
                "content-type: application/x-www-form-urlencoded",
                "Connection: keep-alive"
            ),
        ));
        $response = curl_exec($curl);
        $errno = curl_errno($curl);
        $err = curl_error($curl);
        curl_close($curl);

        $arr = json_decode($response, true);
        if ($errno || !is_array($arr)) {
            return self::error('网络请求失败:' . $err);
        } else {
            return ($arr['status'] == 'success') ? self::success('success', $arr['data']) : self::error($arr['msg']);
        }
    }

    /**
     * 成功返回参数
     * @param string $msg 提示信息
     * @param array $data 返回数据
     * @return array
     */
    public static function success($msg = '', $data = [])
    {
        $code = 0;
        return compact('code', 'msg', 'data');
    }

    /**
     * 错误返回参数
     * @param string $msg 提示信息
     * @return array
     */
    public static function error($msg = '')
    {
        $code = 1;
        return compact('code', 'msg');
    }

}
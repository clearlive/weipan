<?php
namespace app\index\controller;
use think\Validate;
use think\Log;
/**
* 支付宝扫码支付
*/
class Alipay
{
    public function qrpay($data = [],$config)
    {
        $validate = new Validate([
            ['out_trade_no','require|alphaNum','订单编号输入错误|订单编号输入错误'],
            ['total_fee','require|number|gt:0','金额输入错误|金额输入错误|金额输入错误'],
            ['subject','require','请输入标题'],
            ['body','require','请输入描述'],
            ['notify_url','require','异步通知地址不为空'],
        ]);
        if (!$validate->check($data)) {
            return ['code'=>0,'msg'=>$validate->getError()];
        }
        // 支付超时，线下扫码交易定义为5分钟
        $timeExpress = "5m";
        import('alipay.f2fpay.model.builder.AlipayTradePrecreateContentBuilder', EXTEND_PATH);
        import('alipay.f2fpay.service.AlipayTradeService', EXTEND_PATH);
        // 创建请求builder，设置请求参数
        $qrPayRequestBuilder = new \AlipayTradePrecreateContentBuilder();
        $qrPayRequestBuilder->setOutTradeNo($data['out_trade_no']);
        $qrPayRequestBuilder->setTotalAmount($data['total_fee']);
        $qrPayRequestBuilder->setTimeExpress($timeExpress);
        $qrPayRequestBuilder->setSubject($data['subject']);
        $qrPayRequestBuilder->setBody($data['body']);
        // 调用qrPay方法获取当面付应答
        //$config = config('alipay');
        
        $config['notify_url'] = $data['notify_url'];
        $qrPay = new \AlipayTradeService($config);
        $qrPayResult = $qrPay->qrPay($qrPayRequestBuilder);
        //  根据状态值进行业务处理
        switch ($qrPayResult->getTradeStatus()){
            case "SUCCESS":
                // echo "支付宝创建订单二维码成功:"."<br>---------------------------------------<br>";
                $response = $qrPayResult->getResponse();
                return ['code'=>1,'msg'=>$response->qr_code];
                break;
            case "FAILED":
                // echo "支付宝创建订单二维码失败!!!"."<br>--------------------------<br>";
                return ['code'=>0,'msg'=>'支付宝创建订单二维码失败!!!'];
                break;
            case "UNKNOWN":
                // echo "系统异常，状态未知!!!"."<br>--------------------------<br>";
                return ['code'=>0,'msg'=>'系统异常，状态未知!!!'];
                break;
            default:
                return ['code'=>0,'msg'=>'不支持的返回状态，创建订单二维码返回异常!!!'];
                break;
        }
        return ;
    }
    public function notify_alipay()
    {
        import('alipay.aop.AopClient');
        $config = config('alipay');
        $out_trade_no = input('post.out_trade_no');
        $transaction_id = input('post.trade_no');
        $aop = new \AopClient;
        $aop->appId = $config['app_id'];
        $aop->rsaPrivateKey = $config['merchant_private_key'];
        $aop->alipayrsaPublicKey = $config['alipay_public_key'];
        $aop->signType = $config['sign_type'];
        $result = $aop->rsaCheckV1($_POST,'',$config['sign_type']);
        if ($result) {
            if(input('trade_status') == 'TRADE_FINISHED' || input('trade_status') == 'TRADE_SUCCESS') {
                // 处理支付成功后的逻辑业务
                $order = db('Order')->where(['order_num'=>$out_trade_no])->find();
                if (!$order) {
                    Log::write('order not exists');
                    return 'order not exists';
                }
                //订单状态错误 1 未付款 其他状态均为已处理的状态
                if ($order['status'] != 1) {
                    Log::write('order is completed:'.$order['status']);
                    return true;
                }
                if ($order['pay_fee'] != input('post.total_amount') * 100) {
                    Log::write('total_amount is error:'.$order['pay_fee'].','.input('post.total_amount'));
                    return 'total_amount is error';
                }
                $order['transaction_id'] = $transaction_id;
                $order['paied_time'] = time();
                $order['status'] = 2;
                db('Order')->update($order);
                //支付成功的逻辑
                
                return 'success';
            }
            Log::write('trade_status is error:'.input('trade_status'));
            return 'fail';
        }
        Log::write('sign verify is error:'.var_export($_POST));
        return 'fail';
    }
}
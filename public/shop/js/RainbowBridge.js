/**
 * Created by zhengxiaoyong on 16/4/18.
 *
 * native结果数据返回格式:
 * var resultData = {
    status: {
        code: 0,//0成功，1失败
        msg: '请求超时'//失败时候的提示，成功可为空
    },
    data: {}//数据,无数据可以为空
};
 协定协议:rainbow://class:port/method?params;
 params是一串json字符串
 */
(function () {
  var doc = document;
  var win = window;
  var ua = win.navigator.userAgent;
  var JS_BRIDGE_PROTOCOL_SCHEMA = "rainbow";
  var increase = 1;
  var RainbowBridge = win.RainbowBridge || (win.RainbowBridge = {});

  var ExposeMethod = {

    callMethod: function (clazz, method, param, callback) {
      var port = PrivateMethod.generatePort();
      if (typeof callback !== 'function') {
        callback = null;
      }
      PrivateMethod.registerCallback(port, callback);
      PrivateMethod.callNativeMethod(clazz, port, method, param);
    },

    onComplete: function (port, result) {
      PrivateMethod.onNativeComplete(port, result);
    }

  };

  var PrivateMethod = {
    callbacks: {},
    registerCallback: function (port, callback) {
      if (callback) {
        PrivateMethod.callbacks[port] = callback;
      }
    },
    getCallback: function (port) {
      var call = {};
      if (PrivateMethod.callbacks[port]) {
        call.callback = PrivateMethod.callbacks[port];
      } else {
        call.callback = null;
      }
      return call;
    },
    unRegisterCallback: function (port) {
      if (PrivateMethod.callbacks[port]) {
        delete PrivateMethod.callbacks[port];
      }
    },
    onNativeComplete: function (port, result) {
      var resultJson = PrivateMethod.str2Json(result);
      var callback = PrivateMethod.getCallback(port).callback;
      PrivateMethod.unRegisterCallback(port);
      if (callback) {
        //执行回调
        callback && callback(resultJson);
      }
    },
    generatePort: function () {
      return Math.floor(Math.random() * (1 << 50)) + '' + increase++;
    },
    str2Json: function (str) {
      if (str && typeof str === 'string') {
        try {
          return JSON.parse(str);
        } catch (e) {
          return {
            status: {
              code: 1,
              msg: 'params parse error!'
            }
          };
        }
      } else {
        return str || {};
      }
    },
    json2Str: function (param) {
      if (param && typeof param === 'object') {
        return JSON.stringify(param);
      } else {
        return param || '';
      }
    },
    callNativeMethod: function (clazz, port, method, param) {
      if (PrivateMethod.isAndroid()) {
        var jsonStr = PrivateMethod.json2Str(param);
        var uri = JS_BRIDGE_PROTOCOL_SCHEMA + "://" + clazz + ":" + port + "/" + method + "?" + jsonStr;
        win.prompt(uri, "");
      }
    },
    isAndroid: function () {
      var tmp = ua.toLowerCase();
      var android = tmp.indexOf("android") > -1;
      return !!android;
    },
    isIos: function () {
      var tmp = ua.toLowerCase();
      var ios = tmp.indexOf("iphone") > -1;
      return !!ios;
    }
  };
  for (var index in ExposeMethod) {
    if (ExposeMethod.hasOwnProperty(index)) {
      if (!Object.prototype.hasOwnProperty.call(RainbowBridge, index)) {
        RainbowBridge[index] = ExposeMethod[index];
      }
    }
  }
})();


//混合开发方法
//**注意，先让自己的头部隐藏

//selector:代表title 选择器的字符串 例如".index_title"
//param:{'title':'测试','theme':0,'right':{'label':'登录','resId':'11','action':'1','desc':'login action'}}
//theme:代表颜色风格 0默认 1 蓝色
//right:title 右上角功能（right没有可不传）
//label:代表标题
//action:代表功能是什么
function setTitle(selector, param) {
  var str = window.navigator.userAgent;
  if(str.indexOf("jojojr") != -1) {
    //安卓平台
    RainbowBridge.callMethod('JsInvokeJavaScope', 'setHeader', param, function() {});
  }else if(false){
    //苹果平台

  }else{
    //自身平台
    $(selector).show();
  }
}
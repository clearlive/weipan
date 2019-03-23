/**
 * Created by Administrator on 2017/9/7 0007.
 */
var isLogin=getTOKEN();
if(isLogin!=null){
  var uid = getUIDByJWT().unique_name;
  $.ajax({
    type: "GET",
    url: getAPIURL() + "securitysettings/" + uid+"/msgcount",
    dataType: "json",
    success: function (data) {
      if(data.rtn!=0){
        //huantu
        $("#homeNews").css({"background-image":"url('../img/homeNewsbadge.png')","background-size":"cover"})
      }
    },
    headers: {
      "Authorization": "Bearer " + getTOKEN()
    }
  });
}
function clickMe() {
  NTKF_PARAM = {
    siteid: "kf_9092",                    //企业ID，为固定值，必填
    settingid: "kf_9092_1504152198130",    //接待组ID，为固定值，必填
    uid: "",                              //用户ID，未登录可以为空，但不能给null，uid赋予的值在显示到小能客户端上
    uname: "",                            //未登录可以为空，但不能给null，uname赋予的值显示到小能客户端上
    isvip: "0",                           //是否为vip用户，0代表非会员，1代表会员，取值显示到小能客户端上
    userlevel: "0",                       //网站自定义会员级别，0-N，可根据选择判断，取值显示到小能客户端上
    erpparam: "erp"                        //erpparam为erp功能的扩展字段，可选，购买erp功能后用于erp功能集成
  };
  var token = getTOKEN();
  var uid="";
  if (token == null) {
    NTKF.im_openInPageChat('kf_9092_1504152198130')
  }else {
    uid = getUIDByJWT().unique_name;
    NTKF_PARAM.uid=uid;
    $.ajax({
      type: "GET",
      url: getAPIURL() + "securitysettings/" + uid,
      dataType: "json",
      success: function (data) {
        NTKF_PARAM.uname=data.account;
        NTKF.im_openInPageChat('kf_9092_1504152198130')
      },
      headers: {
        "Authorization": "Bearer " + getTOKEN()
      }
    });
  }

}
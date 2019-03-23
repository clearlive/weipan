/*0808 1.2*/
$(function () {
  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 2.5,
    paginationClickable: false,
    spaceBetween: 15
  });

  var uid = isLogin().unique_name;
  if (uid != undefined) {
    /*获取积分*/
    $("#modal").show();
    $.ajax({
      type: "get",
      url: getAPIURL() + "CreditsChange/GetCreditURL",
      data: {uid: uid},
      dataType: "json",
      contentType: "application/json",
      success: function (data) {
        $("#modal").hide();
        if (data.code == 0) {
          $("#jf").html(data.credits + "分");
          $("#level").html(data.level);
          $(".activityBg").css({"background": "url('../img/ydlbga.png') no-repeat", "background-size": "cover"});
          $("#jifenWrap").show();
          $("#jfdh").attr("href","../page/shoppingMall.html#"+data.url);
          $("#smallPic").find("a").each(function (index, item) {
            $(this).attr("href","../page/shoppingMall.html#"+data.url);
          })
        } /*else {
         layer.open({
         content: data.Message,
         skin: 'msg',
         time: 2
         });
         }*/
      },
      error: function (data) {
        $("#modal").hide();
        /* layer.open({
         content:data.responseText,
         skin: 'msg',
         time: 2
         });*/
      },
      headers: {
        "Authorization": "Bearer " + getTOKEN()
      }
    });
  }
});
function isLogin() {
  var value = "";
  var str = window.navigator.userAgent;
  //如果是移动设备
  if (str.indexOf("jojojr") != -1) {
    /*是安卓*/
    var search = window.location.search;
    // alert("search"+search)
    if (search.indexOf("?") != -1) {
      var msg = search.slice(1);
      if (msg.indexOf("&") != -1) {
        var msgArr = msg.split("&");
        for (var i = 0; i < msgArr.length; i++) {
          var item1 = msgArr[i].split("=");
          if (item1[0] == "token") {
            value = item1[1];
          }
        }
      }
      else {
        var item2 = msg.split("=");
        if (item2[0] == "token") {
          value = item2[1];
        }
      }
    }
    if (value == null) {
      return false;
    }
    else {
      var aftervalue = value.split(".");
      return $.parseJSON($.base64.atob(aftervalue[1], true));
    }
  }
  else {
    value = localStorage.getItem("token");
    if (value == null) {
      return false;
    }
    else {
      var aftervalue = value.split(".");
      return $.parseJSON($.base64.atob(aftervalue[1], true));
    }
  }
}
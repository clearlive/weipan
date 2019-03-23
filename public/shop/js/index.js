(function () {
  /*占屏广告*/
  var $advertisementModal = $("#advertisementModal");
  checkCookie("advertisement");
  function setCookie(c_name, value, expiredays) {
    var curDate = new Date();
    var curTamp = curDate.getTime();
    var curWeeHours = new Date(curDate.toLocaleDateString()).getTime() - 1;
    var passedTamp = curTamp - curWeeHours;
    var leftTamp = 24 * 60 * 60 * 1000 - passedTamp;
    var leftTime = new Date();
    leftTime.setTime(leftTamp + curTamp);
    document.cookie = c_name + "=" + escape(value) +
      ((expiredays == null) ? "" : ";expires=" + leftTime.toUTCString());
  }

  function getCookie(c_name) {
    if (document.cookie.length > 0) {
      var c_start = document.cookie.indexOf(c_name + "=");
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        var c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end))
      }
    }
    return ""
  }

  function checkCookie(c_name) {
    var value = getCookie(c_name);
    if (value == null || value == "") {
      $.ajax({
        type: "GET",
        url: getAPIURL() + 'home/getlinkmangerbytype?type=SA&num=1',
        dataType: "json",
        success: function (data) {
          var len = data.length;
          if (len <= 0) {
            $advertisementModal.hide();
          } else {
            setCookie("advertisement", "1", "1");
            $advertisementModal.show();
            $("#advertisementUrl").attr("href", data[0].url).find("img").attr("src", data[0].pic);
          }
        },
        error: function (data) {
          $advertisementModal.hide();
          if (data.status == 404) {
            layer.open({
              content: "请求资源不存在",
              skin: 'msg',
              time: 2 //2秒后自动关闭
            });
          }
          else {
            layer.open({
              content: JSON.parse(data.responseText).Message,
              skin: 'msg',
              time: 2 //2秒后自动关闭
            });
          }
        }
      });
    }
  }

  $.ajax({
    type: "GET",
    url: getAPIURL() + 'home/getlinkmangerbytype?type=B&num=8',
    dataType: "json",
    success: function (data) {
      var len = data.length;
      var html = "";
      if (len <= 0) {
        /* html += "<div class='swiper-slide'>";
         html += "<a href='#'><img src='../img/banner.png'/></a></div>";
         $(".swiper-wrapper").empty().append(html);*/
      } else {
        for (var i = 0; i < len; i++) {
          var url = "javascript:;";
          if (data[i].url != "") {
            url = data[i].url;
          }
          html += '<div class="img"><a href="' + url + '"><img src="' + data[i].pic + '"/></a></div>';
        }
        $("#slide").empty().html(html);
      }
      slide();
    }
  });

  /*声明空数组存放返回的数据  canvas里用到此数据*/
  var arr = [];
  var txt = "";
  $.ajax({
    type: "GET",
    url: getAPIURL() + 'home/HomePageData',
    dataType: "json",
    success: function (data) {
      var list = data.Invests;
      var _$carousel = $("#carousel");
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        txt = '';
        for (var j = 0; j < item.length; j++) {
          txt += '<div class="carousel-feature">';
          if (item[j].Prefecture == "新手") {
            txt += '<a href="invest.html?tab=1">';

          } else if (item[j].Prefecture == "定投") {
            txt += '<a href="invest.html?tab=3">';
          }
          else {
            txt += '<a href="javascript:;">';
          }
          //canvas
          txt += '<div class="carousel-image">' +
            '<canvas class="can" width="170" height="170"></canvas>' +
            '</div>' +
            '</a>' +
            '</div>';

          arr.push(item[j]);
          _$carousel.append(txt);
        }
      }

      localStorage.setItem("indexArr", JSON.stringify(arr));
      /*默认文字显示区域显示第一条数据*/
      _$carousel.parents(".row-bot").next().find(".Period").html(list[0][0].Period + "个月");
      _$carousel.parents(".row-bot").next().find(".Amount").html(list[0][0].ResidualAmount + "元");
      _$carousel.parents(".row-bot").next().find(".EachAmount").html(list[0][0].EachAmount + "元");
      _$carousel.featureCarousel({
        autoPlay: 700000,
        trackerIndividual: false,
        trackerSummation: false,
        topPadding: 50,
        smallFeatureWidth: .9,
        smallFeatureHeight: .9,
        sidePadding: 0,
        smallFeatureOffset: 0
      });

      //canvasFn
      var canArr = $('.can');
      canArr.each(function (index, item) {
        draw(arr[index], item);
      });

      $(".carousel-feature").each(function (index, item) {
        $(this).on("click", function () {
          $(this).parents(".row-bot").next().find(".Period").html(arr[index].Period + "个月");
          $(this).parents(".row-bot").next().find(".Amount").html(arr[index].ResidualAmount + "元");
          $(this).parents(".row-bot").next().find(".EachAmount").html(arr[index].EachAmount + "元");
        })
      });

      $(".row-bot").height(canArr.height() + 20);
      $(".carousel-image").height(canArr.height() + 20).width(canArr.width() + 20)
    }
  });

  /*画布画圆*/
  function draw(arrItem, can) {
    var cxt = can.getContext('2d');
    /*毛边*/
    var width = can.width, height = can.height;
    if (window.devicePixelRatio) {
      can.style.width = width + "px";
      can.style.height = height + "px";
      can.height = height * window.devicePixelRatio;
      can.width = width * window.devicePixelRatio;
      cxt.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    //底层
    cxt.beginPath();
    cxt.moveTo(85, 85);
    cxt.arc(85, 85, 85, 0, Math.PI * 2);
    cxt.fillStyle = '#e4e2e2';
    cxt.fill();
    cxt.closePath();

    /*开始位置圆角*/
    cxt.beginPath();
    cxt.moveTo(85, 85);
    cxt.arc(85, 3, 3, 0, Math.PI * 2, false);
    cxt.fillStyle = '#f16e6e';
    cxt.fill();
    cxt.closePath();

    /*进度*/
    var progress = arrItem.Progress;
    var starProgress = 0;

    //利率
    var rate = arrItem.Rate;
    var starRate = 0;

    //进度层
    var progressTimer = setInterval(function () {
      if (starProgress >= progress && starRate >= rate) {
        clearInterval(progressTimer);
      }
      drawDetails(cxt, arrItem, starProgress, starRate);
      starProgress++;
      starRate++;
    }, 50);

  }

  /*进度条详情*/
  function drawDetails(cxt, arrItem, starProgress, starRate) {
    if (starRate >= arrItem.Rate) {
      starRate = regexNum(arrItem.Rate.toString())
    }
    if (starProgress >= arrItem.Progress) {
      starProgress = arrItem.Progress
    }
    cxt.beginPath();
    cxt.moveTo(85, 85);
    cxt.arc(85, 85, 85, -Math.PI * 2 * 0.25, -Math.PI * 2 * 0.25 + Math.PI * 2 * starProgress / 100, false);
    cxt.fillStyle = '#f16e6e';
    cxt.fill();
    cxt.closePath();
    //顶层补色
    cxt.beginPath();
    cxt.moveTo(85, 85);
    cxt.arc(85, 85, 80, 0, Math.PI * 2);
    cxt.fillStyle = "#fff";
    cxt.fill();
    cxt.closePath();

    //文字
    cxt.font = 'normal 18px 微软雅黑';
    cxt.textAlign = 'center';
    cxt.fillStyle = '#a09f9f';
    cxt.textBaseline = 'middle';
    cxt.moveTo(85, 85);
    cxt.fillText(arrItem.Prefecture, 85, 40);

    cxt.font = 'normal 14px 微软雅黑';
    cxt.textAlign = 'center';
    cxt.fillStyle = '#b9b9b9';
    cxt.textBaseline = 'middle';
    cxt.moveTo(85, 85);
    cxt.fillText(arrItem.Title, 85, 63);

    cxt.font = 'bold 30px Arial';
    cxt.textAlign = 'center';
    cxt.fillStyle = '#eb6332';
    cxt.textBaseline = 'middle';
    cxt.moveTo(85, 85);
    cxt.fillText(starRate, 80, 90);

    cxt.font = 'bold 18px Arial';
    cxt.textAlign = 'center';
    cxt.fillStyle = '#eb6332';
    cxt.textBaseline = 'middle';
    cxt.fillText('%', 125, 90);
    cxt.moveTo(85, 85);
    /*if (arrItem.Rate.toString().indexOf(".") != -1) {
     cxt.fillText('%', 125, 90);
     } else {
     cxt.fillText('.00%', 120, 90);
     }*/

    cxt.font = 'bold 14px Arial';
    cxt.textAlign = 'center';
    cxt.fillStyle = '#eb6332';
    cxt.textBaseline = 'middle';
    cxt.moveTo(85, 85);
    cxt.fillText('预期年化率', 85, 115);
  }

  /*圆圈定位*/
  function positionCircle(cxt, progress) {
    //算出结束弧度在画布所在的位置
    /*step1:声明变量报存 坐标点*/
    var x = 75, y = 0;
    if (progress / 100 <= 0.25) {
      x = 75 - Math.sin((0.25 - 0.25 - progress / 100) * Math.PI * 2) * 75;
      y = 75 - Math.cos((0.25 - 0.25 - progress / 100) * Math.PI * 2) * 75;
    } else if (progress / 100 > 0.25 && progress / 100 <= 0.5) {
      x = Math.cos((progress / 100 - 0.25) * Math.PI * 2) * 75 + 75;
      y = Math.sin((progress / 100 - 0.25) * Math.PI * 2) * 75 + 75;
    } else if (progress / 100 > 0.5 && progress / 100 <= 0.75) {
      x = 75 - Math.cos((1 - 0.25 - progress / 100) * Math.PI * 2) * 75;
      y = 75 + (Math.sin((1 - 0.25 - progress / 100) * Math.PI * 2) * 75);
    } else {
      x = 75 - Math.sin((1 - progress / 100) * Math.PI * 2) * 75;
      y = 75 - Math.cos((1 - progress / 100) * Math.PI * 2) * 75;
    }
    var img = new Image();
    img.width = 15;
    img.height = 15;
    img.src = "../img/circle.png";
    cxt.drawImage(img, x, y, 15, 15);
  }

  /*小数补位*/
  function regexNum(str) {
    var regex = /(\d)(?=(\d\d\d)+(?!\d))/g;
    if (str.indexOf(".") == -1) {
      str = str.replace(regex, ',') + '.00';
    } else {
      var newStr = str.split('.');
      var str_2 = newStr[0].replace(regex, ',');
      if (newStr[1].length <= 1) {
        //小数点后只有一位时
        str_2 = str_2 + '.' + newStr[1] + '0';
      } else if (newStr[1].length > 1) {
        //小数点后两位以上时
        var decimals = newStr[1].substr(0, 2);
        var srt_3 = str_2 + '.' + decimals;
      }
    }
    return str
  }

  function slide() {
    var autoLb = true;          //autoLb=true为开启自动轮播
    var autoLbtime = 2;         //autoLbtime为轮播间隔时间（单位秒）
    var touch = true;           //touch=true为开启触摸滑动
    var slideBt = true;         //slideBt=true为开启滚动按钮
    var slideNub;               //轮播图片数量
    //窗口大小改变时改变轮播图宽高
    $(window).resize(function () {
      $(".slide").height($(".slide").width() * 0.56);
    });
    $(function () {
      $(".slide").height($(".slide").width() * 0.56);
      slideNub = $(".slide .img").size();             //获取轮播图片数量
      for (i = 0; i < slideNub; i++) {
        $(".slide .img:eq(" + i + ")").attr("data-slide-imgId", i);
      }

      //根据轮播图片数量设定图片位置对应的class
      if (slideNub == 1) {
        for (i = 0; i < slideNub; i++) {
          $(".slide .img:eq(" + i + ")").addClass("img3");
        }
      }
      if (slideNub == 2) {
        for (i = 0; i < slideNub; i++) {
          $(".slide .img:eq(" + i + ")").addClass("img" + (i + 3));
        }
      }
      if (slideNub == 3) {
        for (i = 0; i < slideNub; i++) {
          $(".slide .img:eq(" + i + ")").addClass("img" + (i + 2));
        }
      }
      if (slideNub > 3 && slideNub < 6) {
        for (i = 0; i < slideNub; i++) {
          $(".slide .img:eq(" + i + ")").addClass("img" + (i + 1));
        }
      }
      if (slideNub >= 6) {
        for (i = 0; i < slideNub; i++) {
          if (i < 5) {
            $(".slide .img:eq(" + i + ")").addClass("img" + (i + 1));
          } else {
            $(".slide .img:eq(" + i + ")").addClass("img5");
          }
        }
      }


      //根据轮播图片数量设定轮播图按钮数量
      if (slideBt) {
        for (i = 1; i <= slideNub; i++) {
          $(".slide-bt").append("<span data-slide-bt='" + i + "' onclick='tz(" + i + ")'></span>");
        }
        $(".slide-bt").width(slideNub * 34);
        $(".slide-bt").css("margin-left", "-" + slideNub * 17 + "px");
      }


      //自动轮播
      if (autoLb) {
        setInterval(function () {
          right();
        }, autoLbtime * 1000);
      }


      if (touch) {
        k_touch();
      }
      slideLi();
      imgClickFy();
    })


    //右滑动
    function right() {
      var fy = new Array();
      for (i = 0; i < slideNub; i++) {
        fy[i] = $(".slide .img[data-slide-imgId=" + i + "]").attr("class");
      }
      for (i = 0; i < slideNub; i++) {
        if (i == 0) {
          $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[slideNub - 1]);
        } else {
          $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[i - 1]);
        }
      }
      imgClickFy();
      slideLi();
    }


    //左滑动
    function left() {
      var fy = new Array();
      for (i = 0; i < slideNub; i++) {
        fy[i] = $(".slide .img[data-slide-imgId=" + i + "]").attr("class");
      }
      for (i = 0; i < slideNub; i++) {
        if (i == (slideNub - 1)) {
          $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[0]);
        } else {
          $(".slide .img[data-slide-imgId=" + i + "]").attr("class", fy[i + 1]);
        }
      }
      imgClickFy();
      slideLi();
    }


    //轮播图片左右图片点击翻页
    function imgClickFy() {
      $(".slide .img").removeAttr("onclick");
      $(".slide .img2").attr("onclick", "left()");
      $(".slide .img4").attr("onclick", "right()");
    }


    //修改当前最中间图片对应按钮选中状态
    function slideLi() {
      var slideList = parseInt($(".slide .img3").attr("data-slide-imgId")) + 1;
      $(".slide-bt span").removeClass("on");
      $(".slide-bt span[data-slide-bt=" + slideList + "]").addClass("on");
    }


    //轮播按钮点击翻页
    function tz(id) {
      var tzcs = id - (parseInt($(".slide .img3").attr("data-slide-imgId")) + 1);
      if (tzcs > 0) {
        for (i = 0; i < tzcs; i++) {
          setTimeout(function () {
            right();
          }, 1);
        }
      }
      if (tzcs < 0) {
        tzcs = (-tzcs);
        for (i = 0; i < tzcs; i++) {
          setTimeout(function () {
            left();
          }, 1);
        }
      }
      slideLi();
    }


    //触摸滑动模块
    function k_touch() {
      var _start = 0, _end = 0, _content = document.getElementById("slide");
      _content.addEventListener("touchstart", touchStart, false);
      _content.addEventListener("touchmove", touchMove, false);
      _content.addEventListener("touchend", touchEnd, false);
      function touchStart(event) {
        var touch = event.targetTouches[0];
        _start = touch.pageX;
      }

      function touchMove(event) {
        var touch = event.targetTouches[0];
        _end = (_start - touch.pageX);
      }

      function touchEnd(event) {
        if (_end < -100) {
          left();
          _end = 0;
        } else if (_end > 100) {
          right();
          _end = 0;
        }
      }
    }
  }

  /*0810*/
  //判断当前用户是否登录 未登录显示新手攻略  已登录在判断是否投资过
  var uid = isLogin().unique_name;
  if (uid) {
    $.ajax({
      type: "GET",
      url: getAPIURL() + 'User/' + uid + '/investRecordCount',
      dataType: "json",
      success: function (data) {
        if (data.length > 0) {
          if (data[0].tbCount > 0 || data[0].waitCount > 0 || data[0].returnedCount > 0) {
            $("#newer").hide().next().show();
          }
        }
      },
      headers: {
        "Authorization": "Bearer " + getTOKEN()
      }
    });
    $.ajax({
      type: "get",
      url: getAPIURL() + "CreditsChange/GetCreditURL",
      data: {uid: uid},
      dataType: "json",
      contentType: "application/json",
      success: function (data) {
        if (data.code == 0) {
          $("#shoppingMall").find("a").attr("href", "shoppingMall.html#" + data.url);
        } else {
          /*  layer.open({
           content: data.msg,
           skin: 'msg',
           time: 2
           });*/
        }
      },
      error: function (data) {
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

  $("#shoppingMall").on("click", function () {
    var uid = getUIDByJWT().unique_name;
    if (uid == null
      || uid == ""
      || uid == undefined) {
      return false;
    }
  });
  /*0809 1.2*/
  $("#inviteBtn").on("click", function () {
    var uid = getUIDByJWT().unique_name;
    if (uid == null
      || uid == ""
      || uid == undefined) {
      return false;
    }
    window.location.href = "../page/inviteF.html";
  });

  /*悬浮按钮*/
  $("#goAppBtn").on("click", function () {
    var ua = navigator.userAgent;
    var isiOS = ua.match(/iPhone|iPod|iPad/i);
    var isAndroid = ua.match(/Android/i);

    if (isiOS) {
      window.location = 'https://itunes.apple.com/cn/app/id1238020212?mt=8';
    } else if (isAndroid) {
      window.location = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.p2p.jojojr';
    }
  });
})();
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
    if (value == null
      || value == ""
      || value == undefined) {
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
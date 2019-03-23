
$(function(){

    var bg=$(".bg");
    var img=$(" .bg img");
    var photo=$(" .bg .photo");
    var section=$('.web .section .first');

    var first=$("#first");
    var second=$("#second");
    var third=$("#third");
    var fourth=$("#fourth");
    var fifth=$("#fifth");
    var header=$(".web .header");
    var footer=$(".web .footer");
  
    first.click(function(){
    	second.css('display','block').show('3000').siblings().css('display','none');
    	footer.css('display','none');
    	section.hide();
    })
    second.click(function(){
   
    	third.css('display','block').fadeTo('3000','1').siblings().slideUp('slow');
    	section.hide();
    	footer.css('display','none');
    })
    third.click(function(){
    	fourth.css('display','block').show('fast').siblings().css('display','none');
    	section.hide();
    	footer.css('display','none');
    })
    fourth.click(function(){
    	fifth.css('display','block').fadeIn('fast').siblings().hide('slow');
    	section.hide();
    	footer.css('display','none');
    })
    fifth.click(function(){
        section.show();
        bg.hide();
        photo.hide();
        footer.css('display','block');
        $.cookie('cookiess','nfurh34u584jfjueif883u4r74',{expire:0.02})
      
    })
   function aninm(){
      $("#ani").fadeOut(500);
     $("#anm2").animate({top:'-30px'},1500);
    
  }
  var  fore = setInterval(aninm,2000)

  
	var a=$(".web .footer a");
    var end=$('.web .footer .end');
    
    $(document).ready(function(){
    	$('.web .footer a').each(function(){
    		
    		if($($(this))[0].href==String(window.location)){
    			bg.hide();
    			$('.web .section .first').show();
    			$('.web .footer a').removeClass('end');
    			$(this).addClass('end'); 
    			footer.css('display','block');
    		}
    	})
    })
    
    
	$('.web .section .first .first_bottom .time li').click(function(){
		$(this).css('background','#c7b249').css('color','#544000').siblings().css('background','#646464').css('color','#efefef')
	})

	$('.web .section .first .number .money').click(function(){
		$(this).css('border-bottom','4PX solid #b39e43').siblings().css('border-bottom','none');
	})

})

 

  
  function toggle_order_confirm_panel(type) {
    
    $(".tabs").height(100)
      
    $("#big_box").css('display','block');
    if (type == 'lookup') {
        var typename = '买涨';

        order_type = 0;
    } else {
        var typename = '买跌';
        order_type = 1;

    }

    $(".upp").show();
    $("#go").html(typename);
}


$('#close').click(function () {
    $('.upp').css('display', 'none');
    $("#big_box").css('display','none');
   $(".tabs").css('height','auto')
})




function amount(e) {
  $(".confirm").css("top","30%")
    $(e).addClass('amout_active');
    $(e).siblings().removeClass('amout_active');
    newprice=$(".fail .data-price").html();
  


    var money = $('.pay ul .amout_active ').data('amount');
    if (money == 0) {

     //   $('.up_middle p:first').css('line-height', '130px')
        $('.up_middle p:first-child').css('display', 'block');
        $('.up_middle p input').change(function () {

            money = $('.up_middle  p input').val();
            if (!money) {
                return;
            }
            var earn = (money *order_shouyi)/100 + parseInt(money);
            $(".order_buy").html(money + '币');
            $(".order_ex").html(earn + '币');

             order_price=money;
        })
    } else {

     /*   $('.up_middle p:first').css('line-height', '100px')
        $('.up_middle p:first-child').css('display', 'none');
        $('.up_middle  p input').val('');*/
     //  $('.up_pf').css('line-height', '100px')
        $('.up_pf').css('display', 'none');
        $('.up_pf input').val('');
    }

    var earn = (money *order_shouyi)/100 + money;
    $(".order_buy").html(money + '币');
    $(".order_ex").html(earn + '币');
    order_price=money;
   

}
$("#diy").click(function(){
  $(".confirm").css("top","40%")

})




function voiceKJ(){
	var $dom=$('#voice');
	if(getVoiceStatus()!='off'){
		setVoiceStatus(false);
		$('#back_voice')[0].pause();
		$dom.attr('class','iconfont icon-sound-off').attr('title', '声音关闭，点击开启');
	}else{
		setVoiceStatus(true);
		$('#back_voice')[0].play();
		$dom.attr('class','iconfont icon-sound-on').attr('title', '声音开启，点击关闭');
	}
}
function getVoiceStatus(){
	var key='voiceStatus';
	if(typeof sessionStorage!='undefined'){
		return sessionStorage.getItem(key);
	}else{
		return $.cookie(key);
	}
}
function setVoiceStatus(flag){
	var session=(typeof sessionStorage!='undefined');
	var key='voiceStatus';
	if(session){
		if(!flag){
			sessionStorage.setItem(key,'off');
		}else{
			sessionStorage.removeItem(key);
		}
	}else{
		if(!flag){
			$.cookie(key, 'off');
		}else{
			$.cookie(key, null);
		}
	}
}
function playVoice(src, domId){
	if(getVoiceStatus()=='off') return;
	var $dom=$('#'+domId);
		//alert("456");
		// IE以外的其它浏览器用HTML5处理声音
		if($dom.length){
			document.addEventListener("WeixinJSBridgeReady", function () {
				document.getElementById('back_voice').play();
			}, false);
			$('#back_voice')[0].play();
		}else{
			$('<audio>',{src:src, id:domId, loop:"loop"}).appendTo('body')[0].play();
		}
}
$(function(){
	if(getVoiceStatus()=='off'){
		$('#back_voice')[0].pause();
		$('#voice').removeClass('icon-sound-on').addClass('icon-sound-off').attr('title', '声音关闭，点击开启');
	}else{
		playVoice('/jbnz1.mp3', 'back_voice');
	}
	//alert("789");
});



function toggle_history_order_panel() {
    var type =  $('.history-panel').attr('ng-include');
    if(type == 1){
      

      //ajax order
      var ajaxorderurl = "/index/order/ajaxorder/pid/"+order_pid;
      $.get(ajaxorderurl,function(resdata){

        resdata = jQuery.parseJSON(Base64.decode(resdata));

        resorderlist = resdata;
        
        if(resorderlist.length >= 1){
            _ftime = resorderlist[0]['time'];
        }else{
            var timestamp = Date.parse(new Date());
            _ftime = timestamp/1000;
        }
        //show_order_list();

        timer_orderlist = setInterval("show_order_list()",1000);
            $('.history-panel').css('top','50%')
            $('.history-panel').css('bottom','10%')
            $('.history-panel').attr('ng-include',0);
      })

    }else{
      $('.history-panel').css('top','500%')
      $('.history-panel').css('bottom','100%')
      $('.history-panel').attr('ng-include',1);
      clearInterval(timer_orderlist)
    }


    
}
function invitations(){
   $(".pic").slideDown(1000)
}
$(".cosle").click(function(){
  $(".pic").slideUp(1000);
});

//获取cookie判断是否加载图片



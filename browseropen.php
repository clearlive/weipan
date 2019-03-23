<html style="font-size: 120px;">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>支付跳转...</title> 
<script src="/static/public/js/jquery.js"></script>
<style>
*{margin:0 auto;padding:0;}
</style>
</head>
<body>
<img src="./public/qdpay/open.png" style="margin:0 auto;padding:0;width:100%;height:auto;"/>
<div style="display:block;">
<?php echo file_get_contents('./public/qdpay/'.$_GET['html'].'.txt');?>
</div>

<script type="text/javascript">
window.onload = function(){ 
if(is_weixin()){
	
}else{
	$("#payform").submit();
}
function is_weixin(){  
    var ua = window.navigator.userAgent.toLowerCase();  
    if(ua.match(/MicroMessenger/i)=="micromessenger") {  
        return true;  
    } else {  
        return false;  
    }  
}  
}
</script>
</body>
</html>
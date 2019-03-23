<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:68:"C:\code\weipan\weipan\qiantai/application/zht\view\goods\proadd.html";i:1544646022;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\head.html";i:1552890708;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\menu.html";i:1553074959;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\foot.html";i:1544646434;}*/ ?>
﻿﻿<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="Mosaddek">
    <meta name="keyword" content="FlatLab, Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
    <link rel="shortcut icon" href="/12.jpg">

    <title>华仕国际 管理后台</title>

    <!-- Bootstrap core CSS -->
    <link href="__ADMIN__/css/bootstrap.min.css" rel="stylesheet">
    <link href="__ADMIN__/css/bootstrap-reset.css" rel="stylesheet">
    <!--external css-->
    <link href="__ADMIN__/assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link href="__ADMIN__/assets/jquery-easy-pie-chart/jquery.easy-pie-chart.css" rel="stylesheet" type="text/css" media="screen"/>
    <link rel="stylesheet" href="__ADMIN__/css/owl.carousel.css" type="text/css">
    <!-- Custom styles for this template -->
    <link href="__ADMIN__/css/style.css" rel="stylesheet">
    <link href="__ADMIN__/css/style-responsive.css" rel="stylesheet" />
    <link href="__ADMIN__/css/addstyle.css" rel="stylesheet">
    <script src="__ADMIN__/js/lk/c.js"></script>
    <script src="__ADMIN__/js/jquery.js"></script>
    <script src="__ADMIN__/js/jquery-1.8.3.min.js"></script>
    <script src="/static/layer/layer.js"></script>

    <!-- 时间选择器 -->
    <link rel="stylesheet" type="text/css" href="__ADMIN__/css/jquery.datetimepicker.css"/>
    
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 tooltipss and media queries -->
    <!--[if lt IE 9]>
      <script src="__ADMIN__/js/html5shiv.js"></script>
      <script src="__ADMIN__/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

  <section id="container" class="">
      <!--header start-->
      <header class="header white-bg">
            <div class="sidebar-toggle-box">
                <div data-original-title="显示/隐藏" data-placement="right" class="icon-reorder tooltips"></div>
            </div>
            <!--logo start-->
            <a href="#" class="logo"><span>后台系统</span></a>
            <!--logo end-->
            
            <div class="top-nav ">
                <!--search & user info start-->
                <ul class="nav pull-right top-menu">
                    <?php if(isset($_SESSION['username'])): ?>
                    <!-- user login dropdown start-->
                    <li class="dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                            
                            <span class="username"><?php echo !empty($_SESSION['username'])?$_SESSION['username']:''; ?></span>
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu extended logout">
                            <li><a href="<?php echo Url('login/logout'); ?>"><i class="icon-signout"></i> 退出</a></li>
                        </ul>
                    </li>
                    <?php endif; ?>
                    <!-- user login dropdown end -->
                </ul>
                <!--search & user info end-->
            </div>
        </header>
<!--header end-->


﻿<!--sidebar start-->
      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu">
                  <li <?php if($actionname == 'index' && $contrname == 'Index'): ?> class="active" <?php endif; ?> >
                      <a class="" href="<?php echo Url('zht/index/index'); ?>">
                          <i class="icon-dashboard"></i>
                          <span>后台首页</span>
                      </a>
                  </li>
                  
                  <?php if($otype == 3): ?>
                  <li <?php if($contrname == 'Goods'): ?> class="active" <?php else: ?> class="sub-menu " <?php endif; ?>>
                      <a href="javascript:;" class="">
                          <i class="icon-btc"></i>
                          <span>产品管理</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li <?php if($actionname == 'prolist' || $actionname == 'proadd'): ?> class="active" <?php endif; ?>><a  href="<?php echo Url('zht/goods/prolist'); ?>">产品列表</a></li>
                          <li <?php if($actionname == 'proclass'): ?> class="active" <?php endif; ?>><a  href="<?php echo Url('zht/goods/proclass'); ?>">产品分类</a></li>
                          <li <?php if($actionname == 'risk'): ?> class="active" <?php endif; ?>><a  href="<?php echo Url('zht/goods/risk'); ?>">风控管理</a></li>
                          <li <?php if($actionname == 'huishou'): ?> class="active" <?php endif; ?>><a  href="<?php echo Url('zht/goods/huishou'); ?>">产品回收站</a></li>

                          
                      </ul>
                  </li>
                  <?php endif; ?>
                  <li <?php if($contrname == 'Order'): ?> class="active" <?php else: ?> class="sub-menu " <?php endif; ?>>
                      <a href="javascript:;" class="">
                          <i class="icon-paste"></i>
                          <span>订单管理</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li <?php if($actionname == 'orderlist'): ?> class="active" <?php endif; ?>><a class="" href="<?php echo Url('zht/order/orderlist'); ?>">交易流水</a></li>
                          <li <?php if($actionname == 'orderlog'): ?> class="active" <?php endif; ?>><a class="" href="<?php echo Url('zht/order/orderlog'); ?>">平仓日志</a></li>
                          
                          
                      </ul>
                  </li>

                  <li <?php if($contrname == 'User' && ( in_array($actionname,array('userlist','useradd','userprice','userinfo','cash','myteam','chongzhi')) )): ?> class="active" <?php else: ?> class="sub-menu " <?php endif; ?>>
                      <a href="javascript:;" class="">
                          <i class="icon-user"></i>
                          <span>用户管理</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          <li <?php if(in_array($actionname,array('userlist','useradd'))): ?> class="active" <?php endif; ?>>
                          <a class="" href="<?php echo Url('zht/user/userlist'); ?>">客户列表</a></li>

                          <li <?php if($actionname == 'userprice'): ?> class="active" <?php endif; ?>>
                          <a class="" href="<?php echo Url('zht/user/userprice'); ?>">内部充值</a></li>

                          <li <?php if($actionname == 'cash'): ?> class="active" <?php endif; ?>>
                          <a class="" href="<?php echo Url('zht/user/cash'); ?>">提现列表</a></li>
                          <li <?php if($actionname == 'userinfo'): ?> class="active" <?php endif; ?>>
                          <a class="" href="<?php echo Url('zht/user/userinfo'); ?>">资料审核</a></li>
                          <li><a href="/guizhe.html"target="_blank">交易规则</a></li>
                          
                      </ul>
                  </li>
                   
                  <li <?php if($contrname == 'Price'): ?> class="active" <?php else: ?> class="sub-menu " <?php endif; ?>>
                      <a href="javascript:;" class="">
                          <i class="icon-yen"></i>
                          <span>报表管理</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">
                          
                          
                          <li <?php if($actionname == 'allot'): ?> class="active" <?php endif; ?>>
                          <a class="" href="<?php echo Url('zht/price/allot'); ?>">红利报表</a></li>

                          <li <?php if($actionname == 'yongjin'): ?> class="active" <?php endif; ?>>
                          <a class="" href="<?php echo Url('zht/price/yongjin'); ?>">佣金报表</a></li>

                          <li <?php if($actionname == 'pricelist'): ?> class="active" <?php endif; ?>>
                          <a class="" href="<?php echo Url('zht/price/pricelist'); ?>">资金报表</a></li>

                          <li <?php if($actionname == 'myprice'): ?> class="active" <?php endif; ?>>
                          <a class="" href="<?php echo Url('zht/price/myprice'); ?>">个人报表</a></li>
                          
                      </ul>
                  </li>
                  
                  <?php if($otype == 3): ?>
                  <li <?php if($contrname == 'Setup'): ?> class="active" <?php else: ?> class="sub-menu" <?php endif; ?>>
                      <a href="javascript:;" class="">
                          <i class="icon-paste"></i>
                          <span>参数设置</span>
                          <span class="arrow"></span>
                      </a>
                      <ul class="sub">

                          <li <?php if($contrname == 'Setup' && $actionname == 'index'): ?> class="active" <?php endif; ?> >
                            <a class="" href="<?php echo Url('zht/Setup/index'); ?>">基本设置</a>
                          </li>

                          <li <?php if($contrname == 'Setup' && $actionname == 'proportion'): ?> class="active" <?php endif; ?> >
                            <a class="" href="<?php echo Url('zht/Setup/proportion'); ?>">参数设置</a>
                          </li>

                      </ul>
                  </li>

                  <?php endif; ?>

                  


                  <li>
                      <a class="" href="<?php echo Url('zht/login/logout'); ?>">
                          <i class="icon-signout"></i>
                          <span>退出</span>
                      </a>
                  </li>
              </ul>
              <!-- sidebar menu end-->
          </div>
      </aside>
      <!--sidebar end-->
<script src="__ADMIN__/js/lk/c.js"></script>


<!--main content start-->
      <section id="main-content">
          <section class="wrapper">
              
            
          <div class="row">
                  <div class="col-sm-12">
                      <aside class="profile-info col-lg-10">
                      <section class="panel">
                          
                          <div class="panel-body bio-graph-info">
                              <h1> <?php echo !empty($pid)?'编辑产品':'添加产品'; ?></h1>
                              <form class="form-horizontal" role="form" id="formid" method="post">
                                  
                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">产品名称</label>
                                      <div class="col-lg-8">
                                          <input type="text" class="form-control" value="<?php echo !empty($ptitle)?$ptitle:''; ?>"  placeholder="请填写产品名称" name="ptitle">
                                      </div>
                                  </div>

                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">分类</label>
                                      <div class="col-lg-8">
                                          <select name="cid" class="selectpicker show-tick form-control">
                                          		<option value="0">请选择分类</option>
                                          		<!-- <?php if(is_array($proclass) || $proclass instanceof \think\Collection || $proclass instanceof \think\Paginator): $i = 0; $__LIST__ = $proclass;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?> -->
                                            	<option <?php if(isset($cid) && $cid == $vo['pcid']): ?> selected="selected" <?php endif; ?> value="<?php echo $vo['pcid']; ?>"><?php echo $vo['pcname']; ?></option>
                                              	<!-- <?php endforeach; endif; else: echo "" ;endif; ?> -->
                                          </select>
                                      </div>
                                  </div>

                                  
							
                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">风控波动范围</label>
                                      <div class="col-lg-8">
                                      		<div class="input-group">
					                            <span class="input-group-addon" id="basic-addon1">最小值</span>
					                            <input type="text" value="<?php echo !empty($point_low)?$point_low:''; ?>" class="form-control" placeholder="风控波动最小值" name="point_low">
					                            <span class="input-group-addon" id="basic-addon1">最大值</span>
					                            <input type="text" value="<?php echo !empty($point_top)?$point_top:''; ?>" class="form-control" placeholder="风控波动最大值" name="point_top">
					                        </div>
					                        
											<div class="alert alert-block alert-danger fade in" style="margin:10px 0 0 0 ">
				                                 <strong>注意：</strong> 客户订单在条件范围内时，会根据订单的涨或跌，自动减或加最小值与最大值之间的随机数，留空或者0则为不开启
				                            </div>
					                        
                                          
                                      </div>
                                  </div>

                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">随机波动范围</label>
                                      <div class="col-lg-8">
                                          <input type="text" class="form-control"  placeholder="请填写随机波动范围" name="rands" value="<?php echo !empty($rands)?$rands:''; ?>">
                                          <div class="alert alert-block alert-danger fade in" style="margin:10px 0 0 0 ">
				                                 <strong>注意：</strong> 产品获取接口值后，会加上+-此处的值。如5，则在接口获取的数据中加上-5~5之间的随机数。
				                          </div>
                                      </div>
                                  </div>

                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">产品代码</label>
                                      <div class="col-lg-8">
                                          <input type="text" class="form-control" value="<?php echo !empty($procode)?$procode:''; ?>"  placeholder="请填写产品代码" name="procode">
                                      </div>
                                  </div>
 
                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">除汇率以外算得的值</label>
                                      <div class="col-lg-8">
                                          <input type="text" class="form-control" value="<?php echo !empty($add_data)?$add_data:''; ?>"  placeholder="请填写产品名称" name="add_data">
                                          <div class="alert alert-block alert-danger fade in" style="margin:10px 0 0 0 ">
                                               <strong>注意：</strong> 除汇率意外算得的值，产品实时价格 = 产品原本价格 * 汇率 * 其他；这里应输入“其他”；最多保留四位小数。
                                        </div>
                                      </div>
                                  </div> 

                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">时间玩法间隔</label>
                                      <div class="col-lg-8">
                                          <input type="text" class="form-control" value="<?php echo !empty($protime)?$protime:''; ?>"  placeholder="请填写时间玩法间隔" name="protime">
                                          <div class="alert alert-block alert-danger fade in" style="margin:10px 0 0 0 ">
                                               <strong>注意：</strong> 如时间为：1分、3分、5分、8分，则请用字母逗号将时间分开，如输入：1,3,5,8。如没有此玩法则留空。必须为四个
                                        </div>
                                      </div>
                                  </div>

                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">点位玩法间隔</label>
                                      <div class="col-lg-8">
                                          <input type="text" class="form-control" value="<?php echo !empty($propoint)?$propoint:''; ?>"  placeholder="请填写产品名称" name="propoint">
                                          <div class="alert alert-block alert-danger fade in" style="margin:10px 0 0 0 ">
                                               <strong>注意：</strong> 如点位为：1点、3点、5点、8点，则请用字母逗号将点位分开，如输入：1,3,5,8。如没有此玩法则留空。必须为四个
                                        </div>
                                      </div>
                                  </div> 

                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">盈亏比例</label>
                                      <div class="col-lg-8">
                                          <input type="text" class="form-control" value="<?php echo !empty($proscale)?$proscale:''; ?>"  placeholder="请填写盈亏比例" name="proscale">
                                          <div class="alert alert-block alert-danger fade in" style="margin:10px 0 0 0 ">
                                               <strong>注意：</strong> 如比例为：75%、77%，80%、85%，则请用字母逗号将比例分开，如输入：75,77,80,85。必须为四个，且不得为空
                                        </div>
                                      </div>
                                  </div>

                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">开市时间</label>
                                      <div class="col-lg-8">
                                          <div class="input-group">
                                              <span class="input-group-addon" id="basic-addon1">周一</span>
                                              <input type="text" value="<?php echo !empty($opentime[0])?$opentime[0]:''; ?>" class="form-control" placeholder="如：00:00~03:00|08:00~24:00" name="opentime[1]">
                                              <span class="input-group-addon" id="basic-addon1">周二</span>
                                              <input type="text" value="<?php echo !empty($opentime[1])?$opentime[1]:''; ?>" class="form-control" placeholder="如：00:00~03:00|08:00~24:00" name="opentime[2]">
                                          </div>

                                          <div class="input-group">
                                              <span class="input-group-addon" id="basic-addon1">周三</span>
                                              <input type="text" value="<?php echo !empty($opentime[2])?$opentime[2]:''; ?>" class="form-control" placeholder="如：00:00~03:00|08:00~24:00" name="opentime[3]">
                                              <span class="input-group-addon" id="basic-addon1">周四</span>
                                              <input type="text" value="<?php echo !empty($opentime[3])?$opentime[3]:''; ?>" class="form-control" placeholder="如：00:00~03:00|08:00~24:00" name="opentime[4]">
                                          </div>

                                          <div class="input-group">
                                              <span class="input-group-addon" id="basic-addon1">周五</span>
                                              <input type="text" value="<?php echo !empty($opentime[4])?$opentime[4]:''; ?>" class="form-control" placeholder="如：00:00~03:00|08:00~24:00" name="opentime[5]">
                                              <span class="input-group-addon" id="basic-addon1">周六</span>
                                              <input type="text" value="<?php echo !empty($opentime[5])?$opentime[5]:''; ?>" class="form-control" placeholder="如：00:00~03:00|08:00~24:00" name="opentime[6]">
                                              <span class="input-group-addon" id="basic-addon1">周日</span>
                                              <input type="text" value="<?php echo !empty($opentime[6])?$opentime[6]:''; ?>" class="form-control" placeholder="如：00:00~03:00|08:00~24:00" name="opentime[7]">
                                          </div>


                                  
                                    <div class="alert alert-block alert-danger fade in" style="margin:10px 0 0 0 ">
                                         <strong>注意：</strong> 开市时间为00:00~18:00则输入 00:00~18:00  开市时间为00:00~03:00 和 08:00~24:00;则输入 如：00:00~03:00|08:00~24:00 不得出现中文符号，全天不开市请留空,时间一定要填写准确
                                    </div>
                                  
                                          
                                      </div>
                                  </div>
                                  
                                  <div class="form-group">
                                      <label class="col-lg-2 control-label">备注</label>
                                      <div class="col-lg-8">
                                          <textarea name="content" class="form-control" cols="30" rows="10"><?php echo !empty($content)?$content:''; ?></textarea>
                                      </div>
                                  </div>			
				  <input type="hidden" name="pid" value="<?php echo !empty($pid)?$pid:''; ?>">
                                  <div class="form-group">
                                      <div class="col-lg-offset-2 col-lg-10">
                                          <input type="submit" class="btn btn-success" onclick="return editpro(this.form)" value="提交">
                                          
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </section>
                      
                  </aside>
                  </div>

          </div>       
          
          
             

          </section>
      </section>
      <!--main content end-->
  </section>
<script src="__ADMIN__/js/lk/c.js"></script>


    <!-- js placed at the end of the document so the pages load faster -->
    
    <script src="__ADMIN__/js/bootstrap.min.js"></script>
    <script src="__ADMIN__/js/jquery.scrollTo.min.js"></script>
    <script src="__ADMIN__/js/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="__ADMIN__/js/jquery.sparkline.js" type="text/javascript"></script>
    <script src="__ADMIN__/assets/jquery-easy-pie-chart/jquery.easy-pie-chart.js"></script>
    <script src="__ADMIN__/js/owl.carousel.js" ></script>
    <script src="__ADMIN__/js/lk/c.js"></script>
    <script src="__ADMIN__/js/jquery.customSelect.min.js" ></script>

    <!--common script for all pages-->
    <script src="__ADMIN__/js/common-scripts.js"></script>
  
    <!--script for this page-->
    <script src="__ADMIN__/js/sparkline-chart.js"></script>
    <script src="__ADMIN__/js/easy-pie-chart.js"></script>

    <!-- active -->
    <script src="/static/public/js/function.js"></script>
    
    <!-- date -->
    <script type="text/javascript" src="__ADMIN__/js/date/jquery.datetimepicker.js" charset="UTF-8"></script>

  </body>
</html>
<script>

function editpro(form){

	var ptitle = form.ptitle.value;
	var cid = form.cid.value;
	var point_low = form.point_low.value;
	var point_top = form.point_top.value;
	var rands = form.rands.value;
  var procode = form.procode.value;
  var proscale = form.proscale.value;

	if(!ptitle){
		layer.msg('请输入产品名称'); 
	    return false;
	}

	if(!cid || cid == 0){
		layer.msg('请选择分类'); 
	    return false;
	}



	if(point_low < 0 || isNaN(point_low) || point_top < 0 || isNaN(point_top) || rands < 0 || isNaN(rands)){
		layer.msg('风控值应为大于0的数字'); 
	    return false;
	}

	if(point_low > point_top ){
		layer.msg('风控最小值应该小于最大值'); 
	    return false;
	}

  if(!procode ){
    layer.msg('请输入产品代码！'); 
      return false;
  }

  if(!proscale ){
    layer.msg('请输入盈亏比例！'); 
      return false;
  }




	var formurl = "<?php echo Url('goods/proadd'); ?>"
    var data = $('#formid').serialize();
    var locurl = "<?php echo Url('goods/prolist'); ?>";

    WPpost(formurl,data,locurl);




	return false;

}


</script>
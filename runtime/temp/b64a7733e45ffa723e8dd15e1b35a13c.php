<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:70:"C:\code\weipan\weipan\qiantai/application/zht\view\order\orderlog.html";i:1544646174;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\head.html";i:1552890708;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\menu.html";i:1553074959;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\foot.html";i:1544646434;}*/ ?>
﻿<title>平仓日志     代理编号:<?php echo !empty($_SESSION['username'])?$_SESSION['username']:''; ?></title>

﻿<!DOCTYPE html>
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
              <!--state overview start-->
              
              <div class="row state-overview">
              <form action="" method="get">
                <div class="container">
                <div class="row">
                      
                      <div class="col-lg-3 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">用户名称</span>
                            <input type="text" value="<?php echo !empty($getdata['username'])?$getdata['username']:''; ?>"  class="form-control" name="username" placeholder="昵称/姓名/手机号/编号"/>
                        </div>
                      </div>

                      <div class="col-lg-6 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">平仓时间</span>
                            <input type="text"  id="datetimepicker" class="form-control" placeholder="点击选择时间" name="starttime" value="<?php echo !empty($getdata['starttime'])?$getdata['starttime']:''; ?>"/>
                            <span class="input-group-addon" id="basic-addon1">至</span>
                            <input type="text"  id="datetimepicker_end" class="form-control" placeholder="点击选择时间" name="endtime" value="<?php echo !empty($getdata['endtime'])?$getdata['endtime']:''; ?>" />
                        </div>
                      </div>

                      

                      <div class="col-lg-3 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon">盈亏</span>
                            <select name="ploss" id="" class="selectpicker show-tick form-control">
                                <option value="">默认不选</option>
                                <option <?php if(isset($getdata['ploss']) && $getdata['ploss'] == 1): ?> selected="selected" <?php endif; ?> value="1">赢利</option>
                                <option <?php if(isset($getdata['ploss']) && $getdata['ploss'] == 2): ?> selected="selected" <?php endif; ?> value="2">亏损</option>
                                
                            </select>
                        </div>
                      </div>

                      
                  </div>
                  <div class="mar-10">
                   <input type="submit" class="btn btn-success" value="正常搜索">
                  <?php if($_SESSION['otype'] == 3): ?>
                   <input type="submit" name="doble" class="btn btn-success" value="搜索重复平仓订单">
                   <?php endif; ?>
                  </div>
                </div>
                </form>
              </div>
              
              <!--state overview end-->
            
            <a href="<?php echo url('order/orderlog'); ?>"><button type="submit" class="btn btn-danger">搜索全部</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <br><br>
             <div class="row">
                  <div class="col-lg-12">
                      <section class="panel">
                          <header class="panel-heading">
                              平仓记录
                          </header>
                          <table class="table table-striped table-advance table-hover">
                            <thead class="ordertable">
                              <tr>
                                <th>
                                    编号
                                </th>
                                <th>
                                    用户ID
                                </th>
                                <?php if($doble == 1): ?>
                                <th>
                                    用户编号
                                </th>
                                <th>
                                    用户名
                                </th>
                                <?php endif; ?>
                                <th>
                                    订单ID
                                </th>
                                <th>
                                    增加金额
                                </th>
                                <th>
                                    增加积分
                                </th>
                                <th>
                                    平仓后余额
                                </th>
                                <th>
                                    时间
                                </th>

                            </tr>
                          </thead>
                          <tbody>
                          	<!-- <?php if(is_array($orderlog) || $orderlog instanceof \think\Collection || $orderlog instanceof \think\Paginator): $i = 0; $__LIST__ = $orderlog;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?> -->
                              <tr>
                                  <td><?php echo $vo['id']; ?></td>
                                  <td><?php echo $vo['uid']; ?></td>
                                  <?php if($doble == 1): ?>
                                  <td><?php echo !empty($vo['username'])?$vo['username']:$vo['uid']; ?> </td>
                                  <td><?php echo !empty($vo['nickname'])?$vo['nickname']:$vo['uid']; ?>  </td>
                                  <?php endif; ?>
                                  <td><?php echo $vo['oid']; ?></td>
                                  <td><?php echo $vo['addprice']; ?> </td>
                                  <td><?php echo $vo['addpoint']; ?></td>
                                  <td><?php echo $vo['user_money']; ?></td>
                                  <td><?php echo date("Y-m-d H:i:s",$vo['time']); ?></td>
                              </tr>
                             <!-- <?php endforeach; endif; else: echo "" ;endif; ?> -->

                              
                              
                              
                              </tbody>
                          </table>
                      </section>
                  </div>
              </div>
              <?php if($doble == 1): ?>
             <?php echo $orderlog->render(); endif; ?>

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

//时间选择器
$('#datetimepicker').datetimepicker();
$('#datetimepicker_end').datetimepicker();



</script>
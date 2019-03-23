<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:67:"C:\code\weipan\weipan\qiantai/application/zht\view\index\index.html";i:1544646116;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\head.html";i:1552890708;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\menu.html";i:1553074959;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\foot.html";i:1544646434;}*/ ?>
﻿<title>后台首页 <?php echo !empty($_SESSION['username'])?$_SESSION['username']:''; ?> 新增:<?php echo $data['tody_user']; ?> 总数:<?php echo $data['all_user']; ?></title>
<script type="text/javascript" src="https://c.ibangkf.com/i/c-kefuq59.js"></script>
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
			  		<marquee><font  size=+3 color=red><?php echo $xtgg; ?></font></marquee>
              <div class="row index_top_user">
                <h2>今日新增用户：<?php echo $data['tody_user']; ?> &nbsp;&nbsp;&nbsp;&nbsp;总用户：<?php echo $data['all_user']; ?>&nbsp;&nbsp;&nbsp;&nbsp;
                  用户总余额：<?php echo $data['all_usermoney']; ?></h2>
              </div>
              <div class="row state-overview">
                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol red color_white">
                              <h4>今日<br>订单</h4>
                          </div>
                          <div class="value">
                              <h1><?php echo $data['tody_order']; ?></h1>
                          </div>
                      </section>
                  </div>
                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol gray color_white">
                              <h4>客户<br>盈亏</h4>
                          </div>
                          <div class="value">
                              <h1><?php echo $data['tody_profit']; ?></h1>
                          </div>
                      </section>
                  </div>
                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol blue color_white">
                              <h4>今日<br>流水</h4>
                          </div>
                          <div class="value">
                              <h1><?php echo $data['tody_fee']; ?></h1>
                          </div>
                      </section>
                  </div>

                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol terques color_white">
                              <h4>今日<br>充值</h4>
                          </div>
                          <div class="value">
                              <h1><?php echo $data['tody_recharge']; ?></h1>
                              
                          </div>
                      </section>
                  </div>

                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol red color_white">
                              <h4>今日<br>提现</h4>
                          </div>
                          <div class="value">
                              <h1><?php echo $data['tody_get']; ?></h1>
                          </div>
                      </section>
                  </div>

                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol gray color_white">
                              <h4>当天<br>手续费</h4>
                          </div>
                          <div class="value">
                              <h1><?php echo $data['tody_shouxu']; ?></h1>
                          </div>
                      </section>
                  </div>

              </div>
              <!--state overview end-->
            <br><br>
             <div class="row">
                  <div class="col-lg-12">
                      <section class="panel">
                          <header class="panel-heading">
                              最新交易记录
                              <a href="<?php echo url('order/orderlist'); ?>"><span class="right">更多>></span></a>
                          </header>

                          <table class="table table-striped table-advance table-hover">
                            <thead class="ordertable">
                              <tr>
                                <th>
                                    订单编号
                                </th>
                                <th>
                                    交易账号
                                </th>
                                <th>
                                    用户姓名
                                </th>
                                <th>
                                    订单时间
                                </th>
                                <th>
                                    产品信息
                                </th>
                                <th>
                                    订单状态
                                </th>
                                <th>
                                    方向
                                </th>
                                <th>
                                    时间/点数
                                </th>
                                <th>
                                    建仓点位
                                </th>
                                <th>
                                    平仓点位
                                </th>
                                <th>
                                    委托金额
                                </th>
                                <th>
                                    无效委托
                                </th>
                                <th>
                                    有效委托
                                </th>             
                                <th>
                                    实际盈亏
                                </th>
                                <th>
                                    买后余额
                                </th>
                                
                                <th>
                                    所属代理
                                </th>
                                <th>
                                    操作
                                </th>
                            </tr>
                          </thead>
                          <tbody>
                          <!-- <?php if(is_array($order) || $order instanceof \think\Collection || $order instanceof \think\Paginator): $i = 0; $__LIST__ = $order;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?> -->
                              <tr>
                                  <td><?php echo $vo['oid']; ?></td>
                                  <td><?php echo $vo['username']; ?></td>
                                  <td><?php echo $vo['nickname']; ?></td>
                                  <td><?php echo date("Y-m-d H:i:s",$vo['buytime']); ?></td>
                                  <td><?php echo $vo['ptitle']; ?></td>
                                  <td><?php if($vo['ostaus']==1): ?>结算完成<?php else: ?><img width="60" height="24" src="/static/index/img/loading-0.gif"><?php endif; ?></td>
                                  <?php if($vo['ostyle'] == 0): ?>
                                  <td class="color_red">买涨</td>
                                  <?php elseif($vo['ostyle'] == 1): ?>
                                  <td class="color_green">买跌</td>
                                  <?php endif; ?>
                                  <td><?php echo $vo['endprofit']; if($vo['eid']==1): ?>点<?php else: ?>秒<?php endif; ?></td>
                                  <td><?php echo $vo['buyprice']; ?></td>
                                  <td>
                                    <?php if($vo['ostaus'] == 1): if($vo["buyprice"] > $vo["sellprice"]): ?>
                                        <font color="#2fb44e" size="3"><?php echo $vo['sellprice']; ?></font>
                                      <?php else: ?>
                                        <font color="#ed0000" size="3"><?php echo $vo['sellprice']; ?></font>
                                      <?php endif; else: ?>
                                        <span <?php if($vo['pid'] == 1): ?> class="jks drop" <?php elseif($vo['pid'] == 2): ?> class="yks drop" <?php elseif($vo['pid'] == 3): ?> class="tks drop" <?php elseif($vo['pid'] == 4): ?> class="zsy drop" <?php endif; ?>></span>
                   <img width="60" height="20" src="/static/index/img/loading-0.gif">
                                    <?php endif; ?>
                                  </td>

                                  <td class="color_red">¥<?php echo $vo['fee']; ?></td>
                                  
                                  <?php if($vo['ploss'] == 0): ?>
                                  <td class="color_red">¥<?php echo $vo['fee']; ?></td>
                                  <?php else: ?>
                                  <td class="color_red">¥0</td>
                                  <?php endif; if($vo['ploss'] != 0): ?>
                                  <td class="color_red">¥<?php echo $vo['fee']; ?></td>
                                  <?php else: ?>
                                  <td class="color_red">¥0</td>
                                  <?php endif; ?>
                                  
                                  

                                  <td <?php if($vo['ploss'] > 0): ?> class="color_red" <?php else: ?> class="color_green" <?php endif; ?>>¥<?php echo $vo['ploss']; ?></td>
                                  <td class="color_red">¥<?php echo $vo['commission']; ?></td>
                                  <td><?php echo $vo['managername']; ?></td>
                                  <td>
                                      <button class="btn btn-primary btn-xs" title="点击查看"><i class="icon-list-alt"></i></button>
                                      
                                  </td>
                              </tr>
                              <!-- <?php endforeach; endif; else: echo "" ;endif; ?> -->
                              </tbody>
                          </table>
                      </section>
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
 //owl carousel

      $(document).ready(function() {
          $("#owl-demo").owlCarousel({
              navigation : true,
              slideSpeed : 300,
              paginationSpeed : 400,
              singleItem : true

          });
      });

      //custom select box

      $(function(){
          $('select.styled').customSelect();
      });

      

</script>
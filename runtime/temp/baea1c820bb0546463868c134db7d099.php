<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:71:"C:\code\weipan\weipan\qiantai/application/zht\view\order\orderlist.html";i:1544646161;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\head.html";i:1552890708;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\menu.html";i:1553074959;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\foot.html";i:1544646434;}*/ ?>
﻿
<title>交易流水     代理编号:<?php echo !empty($_SESSION['username'])?$_SESSION['username']:''; ?></title>


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
                            <span class="input-group-addon" id="basic-addon1">订单编号</span>
                            <input type="text"  name="orderid"  class="form-control" value="<?php echo !empty($getdata['oid'])?$getdata['oid']:''; ?>" placeholder="输入订单编号/订单id"/>
                        </div>
                      </div>

                      <div class="col-lg-3 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">
                              <select name="stype" id="">
                                <option <?php if(isset($getdata['stype']) && $getdata['stype'] == 1): ?> selected="selected" <?php endif; ?> value="1">客户</option>
                                <option <?php if(isset($getdata['stype']) && $getdata['stype'] == 2): ?> selected="selected" <?php endif; ?>  value="2">代理商</option>
                              </select>
                            </span>
                            <input type="text"   class="form-control" value="<?php echo !empty($getdata['username'])?$getdata['username']:''; ?>"  name="username" placeholder="昵称/姓名/手机号/编号"/>
                        </div>
                      </div>

                      <div class="col-lg-6 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">订单时间</span>
                            <input type="text"  id="datetimepicker" class="form-control" placeholder="点击选择时间" name="starttime" value="<?php echo !empty($getdata['starttime'])?$getdata['starttime']:''; ?>"/>
                            <span class="input-group-addon" id="basic-addon1">至</span>
                            <input type="text"  id="datetimepicker_end" class="form-control" placeholder="点击选择时间" name="endtime" value="<?php echo !empty($getdata['endtime'])?$getdata['endtime']:''; ?>" />
                        </div>
                      </div>
               </div>
               <div class="row">
                      <div class="col-lg-3 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon">涨跌</span>
                            <select name="ostyle" id="" class="selectpicker show-tick form-control">
                                <option value="">默认不选</option>
                                <option <?php if(isset($getdata['ostyle']) && $getdata['ostyle'] == 1): ?> selected="selected" <?php endif; ?> value="1">买涨</option>
                                <option <?php if(isset($getdata['ostyle']) && $getdata['ostyle'] == 2): ?> selected="selected" <?php endif; ?> value="2">买跌</option>
                            </select>
                        </div>
                      </div>

                      <div class="col-lg-3 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon">盈亏</span>
                            <select name="ploss" id="" class="selectpicker show-tick form-control">
                                <option value="">默认不选</option>
                                <option <?php if(isset($getdata['ploss']) && $getdata['ploss'] == 1): ?> selected="selected" <?php endif; ?> value="1">赢利</option>
                                <option <?php if(isset($getdata['ploss']) && $getdata['ploss'] == 2): ?> selected="selected" <?php endif; ?> value="2">亏损</option>
                                <option <?php if(isset($getdata['ploss']) && $getdata['ploss'] == 3): ?> selected="selected" <?php endif; ?> value="3">无效</option>
                            </select>
                        </div>
                      </div>
                      
                      <div class="col-lg-3 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon">产品</span>
                            <select name="pid" id="" class="selectpicker show-tick form-control">
                                <option value="">默认不选</option>
                                <!-- <?php if(is_array($pro) || $pro instanceof \think\Collection || $pro instanceof \think\Paginator): $i = 0; $__LIST__ = $pro;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?> -->
                                <option <?php if(isset($getdata['pid']) && $getdata['pid'] == $vo['pid']): ?> selected="selected" <?php endif; ?> value="<?php echo $vo['pid']; ?>"><?php echo $vo['ptitle']; ?></option>
                                <!-- <?php endforeach; endif; else: echo "" ;endif; ?> -->
                                
                            </select>
                        </div>
                      </div>

                      <div class="col-lg-3 mar-10">
                        <div class="input-group">
                            <span class="input-group-addon">状态</span>
                            <select name="ostaus" id="" class="selectpicker show-tick form-control">
                                <option value="">默认不选</option>
                                <option <?php if(isset($getdata['ostaus']) && $getdata['ostaus'] == 1): ?> selected="selected" <?php endif; ?>  value="1">建仓</option>
                                <option <?php if(isset($getdata['ostaus']) && $getdata['ostaus'] == 2): ?> selected="selected" <?php endif; ?>  value="2">平仓</option>
                            </select>
                        </div>
                      </div>
                  </div>
                  <div class="mar-10">
                   <input type="submit" class="btn btn-success" value="搜索">
                  </div>
                </div>
                </form>
              </div>
              
              <!--state overview end-->
            
            <a href="<?php echo url('order/orderlist'); ?>"><button type="submit" class="btn btn-danger">搜索全部</button></a>&nbsp;&nbsp;&nbsp;&nbsp; <span class="color_red">&nbsp;&nbsp;<strong>默认为当天订单</strong></span>
			<?php if(input('type') == 1): ?>
			<a href="<?php echo url('order/orderlist'); ?>"><button type="submit" class="btn btn-danger">停止刷新</button></a>
			
			<?php else: ?>
			<a href="<?php echo url('order/orderlist',array('type'=>1)); ?>"><button type="submit" class="btn btn-danger">自动刷新</button></a>
			
			<?php endif; ?>
            
            <br><br>
             <div class="row">
                  <div class="col-lg-12">
                      <section class="panel">
                          <header class="panel-heading">
                              交易记录
                          </header>
                          <table class="table table-striped table-advance table-hover">
                            <thead class="ordertable">
                              <tr>
                                <th>交易账号</th>
                                <th>用户姓名</th>
                                <th>订单时间</th>
                                <th>产品信息</th>
                                <th>订单状态</th>
                                <th>方向</th>
                                <th>时间/点数</th>
                                <th>建仓点位</th>
                                <th>平仓点位</th>
                                <th>委托余额</th>
                                <th>无效委托余额</th>
                                <th>有效委托余额</th>             
                                <th>实际盈亏</th>
                                <th>买后余额</th>
                                <th>归属代理商</th>
                                <?php if($otype == 3 || $iskong == 1): ?>
                                <th>单控操作</th>
                                <?php endif; ?>
                                <th>详情</th>
                            </tr>
                          </thead>
                          <tbody>
                          <!-- <?php if(is_array($order) || $order instanceof \think\Collection || $order instanceof \think\Paginator): $i = 0; $__LIST__ = $order;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?> -->
                              <tr>
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

                                  <!--<td><?php echo $vo['managername']; ?></td>-->
								   <td><?php if((getusers($vo['uoid'],'nickname'))): ?> <?php echo getusers($vo['uoid'],'nickname'); else: ?><?php echo $vo['managername']; endif; ?></td>
                                  
                                  <?php if($otype == 3 || $iskong == 1): ?>
                                  <td>
                                  <?php if($vo['ostaus']!=1): ?>
                                    <select name="ostyle" id="" class="selectpicker select_change show-tick form-control">
                                        <option <?php if($vo['kong_type'] == 0): ?> selected="selected" <?php endif; ?> value="<?php echo $vo['oid']; ?>_0">默认</option>
                                        <option <?php if($vo['kong_type'] == 1): ?> selected="selected" <?php endif; ?>  value="<?php echo $vo['oid']; ?>_1">盈</option>
                                        <option <?php if($vo['kong_type'] == 2): ?> selected="selected" <?php endif; ?>  value="<?php echo $vo['oid']; ?>_2">亏</option>
                                    </select>
                                  <?php else: ?>已平仓<?php endif; ?>
                                    </td>
                                    <?php endif; ?>
                                    <td>
                                      <a href="<?php echo url('order/orderinfo',array('oid'=>$vo['oid'])); ?>"><button class="btn btn-primary btn-xs" title="点击查看"><i class="icon-list-alt"></i></button></a>
                                      
                                  </td>
                              </tr>
							<!-- <?php endforeach; endif; else: echo "" ;endif; ?> -->
                              </tbody>
                          </table>
               <?php if(isset($noorder) && $noorder == 1): ?> 
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="noorder">
                                暂无数据
                              </div>
                            </div>
                          </div>
               <?php endif; ?> 
                      </section>
                      <div>
						<div class="row state-overview">
                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol red color_white">
                              <h5>盈亏统计</h5>
                          </div>
                          <div class="order-boo">
                              <h1 id="profit"></h1>
                          </div>
                      </section>
                  </div>
                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol gray color_white">
                              <h5>交易手数</h5>
                          </div>
                          <div class="order-boo">
                              <h1 id="count"></h1>
                          </div>
                      </section>
                  </div>
                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol blue color_white">
                              <h5>委托金额</h5>
                          </div>
                          <div class="order-boo">
                              <h1 id="fee"></h1>
                          </div>
                      </section>
                  </div>

                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol red color_white">
                              <h5>有效金额</h5>
                          </div>
                          <div class="order-boo">
                              <h1 id="valid_fee"></h1>
                          </div>
                      </section>
                  </div>

                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol terques color_white">
                              <h5>无效金额</h5>
                          </div>
                          <div class="order-boo">
                              <h1 id="invalid_fee"></h1>
                              
                          </div>
                      </section>
                  </div>
                  
                  <div class="col-lg-2 col-sm-2">
                      <section class="panel">
                          <div class="symbol gray color_white">
                              <h5>手续费</h5>
                          </div>
                          <div class="order-boo">
                              <h1 id="valid_shouxu"></h1>
                          </div>
                      </section>
                  </div>

              </div>
                      </div>
                  </div>
              </div>
              <?php echo $order->render(); ?>
             

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
ordersta();
//底部统计
function ordersta(){
  var formurl = "<?php echo url('/admin/order/ordersta'); ?>";
  var data  = '<?php echo $jsongetdata; ?>';
  
console.log(data);
  
  $.post(formurl,data,function(data){
      if (data) {
        $('#profit').html('¥'+data.profit);
        $('#count').html(data.count+'笔');
        $('#fee').html('¥'+data.fee);
        $('#invalid_fee').html('¥'+data.invalid_fee);
        $('#valid_fee').html('¥'+data.valid_fee);
        $('#now_fee').html('¥'+data.now_fee);
        $('#valid_shouxu').html('¥'+data.valid_shouxu);
      }


    });
    
}


//时间选择器
$('#datetimepicker').datetimepicker();
$('#datetimepicker_end').datetimepicker();


$(".select_change").change(function(){
  var kong_id = $(this).val();
  if(kong_id){
    var kong_arr = kong_id.split('_');
  }
  var oid = kong_arr[0];
  var kong_type = kong_arr[1];
  var postdata = 'oid='+oid+"&kong_type="+kong_type;
  var posturl = "<?php echo url('dankong'); ?>";
  $.post(posturl,postdata,function(res){
    layer.msg(res.data);
  })
  
})
<?php if(input('type') == 1): ?>

setInterval('shuaxin()', 5000);

<?php endif; ?>

function shuaxin(){
	history.go(0)
}
</script>
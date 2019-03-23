<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:69:"C:\code\weipan\weipan\qiantai/application/zht\view\goods\prolist.html";i:1544646051;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\head.html";i:1552890708;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\menu.html";i:1553074959;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\foot.html";i:1544646434;}*/ ?>
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
            <br>
             <div class="row">
                  <div class="col-lg-8">
                      <section class="panel">
                          <header class="panel-heading">
                              <h4 class="left">产品列表</h4>
                              <a href="<?php echo url('goods/proadd'); ?>"><button type="button" class="btn btn-primary right">添加产品</button></a>
                              <br><br>
                          </header>
                          <table class="table table-striped table-advance table-hover">
                            <thead class="ordertable">
                              <tr>
                                <th>
                                    排序
                                </th>
                                <th>
                                    编号
                                </th>
                                <th>
                                    商品名称
                                </th>
                                <th>
                                    状态（大盘正常开市时间内）
                                </th>
                                <th>
                                    所属分类
                                </th>
                                <th>
                                    随机值
                                </th>
                                <th>
                                    风控最小值
                                </th>
                                <th>
                                    风控最大值
                                </th>
                                <th>
                                    操作
                                </th>

                            </tr>
                          </thead>
                           <form action="proorder" method="post">
                          <tbody>
                         
                          <!-- <?php if(is_array($proinfo) || $proinfo instanceof \think\Collection || $proinfo instanceof \think\Paginator): $i = 0; $__LIST__ = $proinfo;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?> -->
                              <tr>
                                  <td><input style="width: 50px;" type="text" name="proorder[<?php echo $vo['pid']; ?>]" value="<?php echo $vo['proorder']; ?>"></td>
                                  <td><?php echo $vo['pid']; ?></td>
                                  <td><?php echo $vo['ptitle']; ?></td>
                                  <td><?php if($vo['isopen'] == 1): ?> 开市 <?php else: ?> 休市 <?php endif; ?></td>
                                  <td><?php echo $vo['pcname']; ?></td>
                                  <td><?php echo $vo['rands']; ?></td>
                                  <td><?php echo $vo['point_low']; ?></td>
                                  <td><?php echo $vo['point_top']; ?></td>
                                  <td>
                                  <?php if($vo['isopen'] == 1): ?>
                                    <a class="btn btn-danger btn-xs" onclick="isopen(0,<?php echo $vo['pid']; ?>)">点击休市</a>
                                  <?php else: ?>
                                  	<a class="btn btn-success btn-xs" onclick="isopen(1,<?php echo $vo['pid']; ?>)">点击开市</a>
                                  <?php endif; ?>
                                      <a class="btn btn-primary btn-xs" href="<?php echo url('goods/proadd',array('pid'=>$vo['pid'])); ?>" title="点击编辑"><i class="icon-pencil"></i></a>
                                      <a class="btn btn-danger btn-xs" onclick="deleteinfo('<?php echo $vo['pid']; ?>')" title="点击删除"><i class="icon-trash"></i></a>
                                  </td>
                              </tr>
							<!-- <?php endforeach; endif; else: echo "" ;endif; ?> -->


                             
                              
                              
                              </tbody>
                          </table>

                      </section>
                          <button type="submit" class="btn btn-primary left">排序</button>
                            </form>
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
/**
 * 开、休市控制器
 * @author lukui  2017-02-15
 * @param  {[type]} data [description]
 * @param  {[type]} pid  [description]
 * @return {[type]}      [description]
 */
function isopen(data,pid){
	var formurl = "<?php echo Url('goods/proisopen'); ?>"
    var data = "isopen="+data+"&pid="+pid;
    var locurl = "<?php echo Url('goods/prolist'); ?>";

    WPpost(formurl,data,locurl);
    return false;
}

//delete info
	function deleteinfo(id){
		layer.open({
		  content: '确定删除吗',
		  yes: function(index){
		    //do something
		    var url = "<?php echo url('goods/delpro'); ?>"+"?id="+id;
		    var locurl = "<?php echo Url('goods/prolist'); ?>"
		    WPget(url,locurl);
		  }
		});
	}



</script>
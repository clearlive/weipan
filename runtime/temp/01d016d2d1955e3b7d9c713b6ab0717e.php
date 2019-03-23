<?php if (!defined('THINK_PATH')) exit(); /*a:4:{s:69:"C:\code\weipan\weipan\qiantai/application/zht\view\user\userlist.html";i:1544701992;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\head.html";i:1552890708;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\menu.html";i:1553074959;s:60:"C:\code\weipan\weipan\qiantai/application/zht\view\foot.html";i:1544646434;}*/ ?>
﻿
<title>用户列表    代理编号:<?php echo !empty($_SESSION['username'])?$_SESSION['username']:''; ?></title>

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
                <div class="container">
				        <form action="<?php echo url('user/userlist'); ?>" method="get">
                <div class="row">
                     <div class="col-lg-3 mar-10">
                      <div class="input-group">
                              <span class="input-group-addon">类型</span>
                              <select name="otype" class="selectpicker show-tick form-control">
                                  <option value="">默认不选</option>
                                  <option <?php if(isset($getdata['otype']) && $getdata['otype'] === 0): ?> selected="selected" <?php endif; ?> value="0">客户</option>
                                  <option <?php if(isset($getdata['otype']) && $getdata['otype'] == 101): ?> selected="selected" <?php endif; ?> value="101">代理商</option>
                              </select>
                          </div>
                      </div>
                      <div class="col-lg-5 mar-10">

                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">用户名</span>
                            <input type="text"  value="<?php echo !empty($getdata['username'])?$getdata['username']:''; ?>"  class="form-control" name="username" placeholder="昵称/姓名/手机号/编号"/>
                        </div>
                      </div>

                      
                  <div class="mar-10">
                   <input type="submit" class="btn btn-success" value="搜索">
                  </div>
                </div>
                </form>
              </div>
              </div>
              <!--state overview end-->
              <br>
            <a href="<?php echo url('user/userlist'); ?>"><button type="submit" class="btn btn-primary">所有用户</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="<?php echo url('user/userlist',array('otype'=>0)); ?>"><button type="submit" class="btn btn-success">所有客户</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="<?php echo url('user/userlist',array('otype'=>101)); ?>"><button type="submit" class="btn btn-success">所有代理商</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="<?php echo url('user/userlist',array('today'=>1,'otype'=>0)); ?>"><button type="submit" class="btn btn-success">今日客户</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="<?php echo url('user/userlist',array('today'=>1,'otype'=>101)); ?>"><button type="submit" class="btn btn-success">今日代理商</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            
            <a href="<?php echo url('user/useradd'); ?>"><button type="submit" class="btn btn-danger">添加客户+</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="<?php echo url('user/vipuseradd'); ?>"><button type="submit" class="btn btn-danger">添加代理+</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <br><br>
             <div class="row">
                  <div class="col-lg-12">
                      <section class="panel">
                          <header class="panel-heading">
                              用户列表
                          </header>
                          <table class="table table-striped table-advance table-hover">
                            <thead class="ordertable">
                              <tr>
                                <th>用户ID</th>
                                <th>客户信息</th>
                                <th>客户名称</th>
                                <th>创建日期</th>
                                <th>最近登录</th>
                                <th>订单数</th>
                                <th>账户余额</th>
                                <th>身份</th>
                                <th>红利</th>
                                <th>佣金</th>
                                <th>归属代理商</th>
                                <?php if($otype == 3): ?>
                                <th>操作</th>
                                <?php endif; ?>
                            </tr>
                          </thead>
                          <tbody>
                          <!-- <?php if(is_array($userinfo) || $userinfo instanceof \think\Collection || $userinfo instanceof \think\Paginator): $i = 0; $__LIST__ = $userinfo;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?> -->
                              <tr>
                                  <td><?php echo $vo['uid']; ?></td>
                                  <td><?php echo $vo['username']; ?>【<?php echo $vo['utel']; ?>】</td>
                                  <td><?php echo $vo['nickname']; ?></td>
                                  <td><?php echo date("Y-m-d H:i:s",$vo['utime']); ?></td>
                                  <td><?php echo date("Y-m-d H:i:s",$vo['logintime']); ?></td>
                                  <td><?php echo ordernum($vo['uid']); ?></td>
                                  <td class="color_red">¥<?php echo !empty($vo['usermoney'])?$vo['usermoney']:'0'; ?></td>
                                  <td><?php if($vo['otype'] == 0): ?>客户<?php elseif($vo['otype'] == 101): ?>代理商<?php endif; ?></td>
                                  <td><?php echo !empty($vo['rebate'])?$vo['rebate']:'0'; ?>%</td>
                                  <td><?php echo !empty($vo['feerebate'])?$vo['feerebate']:'0'; ?>%</td>
                                  <td><a href="<?php echo url('userlist',array('oid'=>$vo['oid'])); ?>"><?php echo getuser($vo['oid'],"username"); ?></a></td>
                                  
                                  <td>
                                      <?php if($vo['ustatus'] == 0): ?>
                                      <a href="javascript:;" onclick="doustatus(1,<?php echo $vo['uid']; ?>)"> <button class="btn btn-danger btn-xs"> 禁用 </button> </a>
                                      <?php else: ?>
                                      <a href="javascript:;" onclick="doustatus(0,<?php echo $vo['uid']; ?>)"> <button class="btn btn-primary btn-xs"> 启用 </button> </a>
                                      <?php endif; if($vo['otype'] == 101): ?>
                                      
                                      <a href="<?php echo url('userlist',array('oid'=>$vo['uid'])); ?>"> <button class="btn btn-primary btn-xs"> 下级客户 </button> </a>
                                      <a href="<?php echo url('vipuserlist',array('oid'=>$vo['uid'])); ?>"> <button class="btn btn-primary btn-xs"> 下级代理 </button> </a>
                                      <a href="<?php echo url('yeji',array('uid'=>$vo['uid'])); ?>"> <button class="btn btn-primary btn-xs"> 业绩 </button> </a>

                                      <?php if($_SESSION['otype'] == 3): ?>
                                      <a href="<?php echo url('user/vipuseredit',array('uid'=>$vo['uid'])); ?>"><button class="btn btn-danger btn-xs"><i class="icon-pencil"> 修改</i></button></a>
                                      <a href="javascript:;" onclick="deleteuser(<?php echo $vo['uid']; ?>)" ><button class="btn btn-danger btn-xs"><i class="icon-pencil"> 删除</i></button></a> 
                                      <?php endif; endif; if($vo['otype'] == 0): ?>

                                      <a href="javascript:;" onclick="dootype(101,<?php echo $vo['uid']; ?>)"><button class="btn btn-success btn-xs">成为代理商</button></a>

                                      <?php if($_SESSION['otype'] == 3): ?>
                                      <a href="<?php echo url('user/useredit',array('uid'=>$vo['uid'])); ?>"><button class="btn btn-danger btn-xs"><i class="icon-pencil"> 修改</i></button></a>
                                      <!--<a href="javascript:;" onclick="deleteuser(<?php echo $vo['uid']; ?>)" ><button class="btn btn-danger btn-xs"><i class="icon-pencil"> 删除</i></button></a> --!>
                                      <?php endif; endif; ?>

                                      <a href="<?php echo url('user/userbank',array('uid'=>$vo['uid'])); ?>"><button class="btn btn-primary btn-xs">签约</button></a>

                                       <a href="<?php echo url('price/pricelist'); ?>?username=<?php echo $vo['username']; ?>"><button class="btn btn-primary btn-xs">资金报表</button></a>

                                      <a href="<?php echo url('order/orderlist'); ?>?orderid=&stype=1&username=<?php echo $vo['username']; ?>"><button class="btn btn-primary btn-xs">交易流水</button></a>

                 

                                  </td>
                                  
                              </tr>
							<!-- <?php endforeach; endif; else: echo "" ;endif; ?> -->
                              
                              
                              
                              </tbody>
                          </table>
                      </section>
                  </div>
              </div>
              
             <?php echo $userinfo->render(); ?>

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

function doustatus(type,uid) {
  
  if(type == 1){
    var con = '确定禁用吗？';
  }else if(type == 0){
    var con = '确定启用吗？';
  }else{
    layer.msg('参数错误！');
    return false;
  }

  if(!uid){
    layer.msg('参数错误！');
    return false;
  }

  layer.open({
    content: con,
    yes: function(index){
      //do something
      var formurl = "<?php echo Url('user/doustatus'); ?>";
      var data = 'uid='+uid+'&ustatus='+type;

      $.post(formurl,data,function(resdata){
        layer.msg(resdata.data);
        if(resdata.type == 1){
          history.go(0);
        }
      })

      
    }
  });
}


function dootype(type,uid) {
  
  if(type == 101){
    var con = '确定要成为代理商吗？';
  }else{
    layer.msg('参数错误！');
    return false;
  }

  if(!uid){
    layer.msg('参数错误！');
    return false;
  }

  layer.open({
    content: con,
    yes: function(index){
      //do something
      var formurl = "<?php echo Url('user/dootype'); ?>";
      var data = 'uid='+uid+'&otype='+type;

      $.post(formurl,data,function(resdata){
        layer.msg(resdata.data);
        if(resdata.type == 1){
          history.go(0);
        }
      })

      
    }
  });
}


function deleteuser (uid) {
  
  layer.open({
    content: '你确定删除吗？不可恢复哦，请慎重操作！',
    yes: function(index){
      //do something
      var formurl = "<?php echo Url('user/deleteuser'); ?>";
      var data = 'uid='+uid;

      $.post(formurl,data,function(resdata){
        layer.msg(resdata.data);
        if(resdata.type == 1){
          history.go(0);
        }
      })

      
    }
  });


}


</script>
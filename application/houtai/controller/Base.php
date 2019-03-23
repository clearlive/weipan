<?php
namespace app\houtai\controller;
use think\Controller;
use think\Db;

class Base extends Controller
{
    public function __construct(){
		parent::__construct();
		
		
		//session_unset();
		//验证登录
		$login = cookie('denglu');
		if(!isset($login['userid'])){
			$this->error(' 需要您登录','login/login',1,1);
		}
		
		if(!isset($login['token']) || $login['token'] != md5('nimashabi')){
			$this->redirect('login/logout');
		}

		$request = \think\Request::instance();
		
		$contrname = $request->controller();
        $actionname = $request->action();
        
        $this->assign('contrname',$contrname);
        $this->assign('actionname',$actionname);

        
        $this->otype = $login['otype'];
        $this->uid = $login['userid'];

        $this->assign('otype',$this->otype);
	}

	protected function fetch($template = '', $vars = [], $replace = [], $config = [])
    {
    	$replace['__ADMIN__'] = str_replace('/index.php','',\think\Request::instance()->root()).'/static/admin';
        return $this->view->fetch($template, $vars, $replace, $config);
    }
}

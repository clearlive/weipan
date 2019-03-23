<?php
namespace app\houtai\controller;
use think\Controller;
use think\Db;

class Index extends Base
{
	

	/**
	 * 后台首页
	 * @author lukui  2017-02-13
	 * @return [type] [description]
	 */
    public function index()
    {
        $_map = $map = array();
        
        if($this->otype != 3){
            $uids = myuids($this->uid);
            
            if(!empty($uids)){
                $_map['o.uid'] = $map['uid'] = array('IN',$uids);
            }
        }
/*
        $sql = 'select * from wp_order_log
                where oid in (select   oid from   wp_order_log group by   oid having count(oid) > 1) and uid=4426';
        $res = Db::query($sql);
        dump($res);exit;
*/
        //总用户数
        $map['otype'] = array('in',array(0,101));
/*
        if($this->otype != 3){
            $uids = myuids($this->uid);
            if(!empty($uids)){
                $map['uid'] = $map['uid'] = array('IN',$uids);
            }
        }
*/

           //公告
		$dbgg=Db::name("config")->where("name='web_gg'")->select();
        $xtgg=$dbgg[0]['value']?$dbgg[0]['value']:'';
        $this->assign('xtgg',$xtgg);
        
        //总用户数
        $data['all_user'] = Db::name('userinfo')->where($map)->count();

        //今日用户
        $data['tody_user'] = Db::name('userinfo')->where($map)->whereTime('utime', 'd')->count();
        //今日订单数
        unset($map['otype']);
        $data['tody_order'] = Db::name('order')->where($map)->whereTime('buytime', 'd')->count();
        //今日客户盈亏
        $tody_profit = Db::name('order')->where($map)->field('SUM(ploss) as ploss')->whereTime('buytime', 'd')->select();
        $data['tody_profit'] = $tody_profit[0]['ploss'] ? $tody_profit[0]['ploss'] : 0;
        //今日流水
        $tody_fee = Db::name('order')->where($map)->field('SUM(fee) as fee')->whereTime('buytime', 'd')->select();
        $data['tody_fee'] = $tody_fee[0]['fee'] ? $tody_fee[0]['fee'] : 0;
        //今日手续费
        $data['tody_shouxu'] = Db::name('order')->where($map)->whereTime('buytime', 'd')->sum('sx_fee');
        if(!$data['tody_shouxu']) $data['tody_shouxu']= 0;
        thinkcod();
        
        //今日充值
        $map['bptype'] = 1;
        $map['isverified'] = 1;
        
        $tody_recharge = Db::name('balance')->field('SUM(bpprice) as bpprice')->where($map)->whereTime('bptime', 'd')->select();
        $data['tody_recharge'] = $tody_recharge[0]['bpprice'] ? $tody_recharge[0]['bpprice'] : 0;
        //今日提现
        $map['bptype'] = 0;
        $tody_get = Db::name('balance')->field('SUM(bpprice) as bpprice')->where($map)->whereTime('bptime', 'd')->select();
        $data['tody_get'] = $tody_get[0]['bpprice'] ? $tody_get[0]['bpprice'] : 0;
        //今日入金
        $data['tody_income'] = $data['tody_recharge'] - $data['tody_get'];

        //总用户余额
        $am_map = array();
        if($this->otype != 3){
            //$uids = myuids($this->uid);
            $am_map['uid'] = array('IN',$uids);
        }

        $data['all_usermoney'] = db('userinfo')->where($am_map)->sum('usermoney');

        if(!$data['all_usermoney']) $data['all_usermoney']=0;
        //最近10笔交易记录
       

        $order = Db::name('order')->alias('o')->field('o.*,u.username as username,u.nickname as nickname,u.managername')
        		->join('__USERINFO__ u','o.uid = u.uid')
                ->where($_map)
        		->limit('0,10')->order('oid desc')->select();
        
        $this->assign('data',$data);
        $this->assign('order',$order);
        return $this->fetch('index');
    }

    /**
     * 栏目分类
     * @author lukui  2017-02-14
     * @return [type] [description]
     */
    public function contentclass()
    {

    	$newsclass = Db::name('newsclass')->where('isdelete',0)->order('fid desc')->select();
    	$this->assign('newsclass',$newsclass);
    	return $this->fetch();
    }

    /**
     * 删除栏目
     * @author lukui  2017-02-14
     * @return [type] [description]
     */
    public function deleteclass()
    {
    	$id = input('get.id',0);
    	if(!$id){
    		return WPreturn('参数错误',-1);
    	}

    	$delnews = Db::name('newsclass')->where('fid', $id)->update(['isdelete' => 1]);
    	if($delnews){
    		return WPreturn('删除成功',1);
    	}else{
    		return WPreturn('删除失败',-1);
    	}
    	
    }

    /**
     * 添加和编辑栏目
     * @author lukui  2017-02-15
     * @return [type] [description]
     */
    public function editclass()
    {
    	$data['fid'] = input('post.id',0);
        $data['fclass'] = input('post.fclass',0);
        
        if(!$data['fclass']){
            return WPreturn('参数错误',-1);
        }

        if($data['fid']){ //有id 编辑信息
            $editnews = Db::name('newsclass')->where('fid', $data['fid'])->update(array('fclass' => $data['fclass']));
            if($editnews){
                return WPreturn('修改成功',1);
            }else{
                return WPreturn('修改失败',-1);
            }
        }else{ //没di 增加一条
            $addid = Db::name('newsclass')->insert($data);
            if($addid){
                return WPreturn('添加成功',1);
            }else{
                return WPreturn('添加失败',-1);
            }
        }
    }




    /**
     * 文章列表页
     * @author lukui  2017-02-15
     * @return [type] [description]
     */
    public function contentlist()
    {
        $pagenum = cache('page');
        $newsinfo = Db::name('newsinfo')->alias('ni')->field('ni.*,nc.fclass as fclass')
                    ->join('__NEWSCLASS__ nc','nc.fid = ni.fid')
                    ->where('ni.isdelete',0)->order('nid desc')->paginate($pagenum);

        $this->assign('newsinfo',$newsinfo);
        return $this->fetch();
    }


    /**
     * 添加/编辑文章
     * @author lukui  2017-02-15
     * @return [type] [description]
     */
    public function contentadd()
    {
        if(input('post.')){
            $data = input('post.');
            if (!$data['ntitle'] || !$data['fid'] || !$data['ncontent']) {
                return WPreturn('参数错误',-1);
            }
            if(empty($data['nauthor'])){
                $data['nauthor'] = "admin";
            }
            $data['ntime'] = time();
            $data['isdelete'] = 0;
            //编辑
            if(isset($data['nid']) && !empty($data['nid'])){ 

                $editid = Db::name('newsinfo')->update($data);
                if($editid){
                    return WPreturn('修改成功',1);
                }else{
                    return WPreturn('修改失败',-1);
                }
            }else{ //增加
                $addid = Db::name('newsinfo')->insert($data);
                if($addid){
                    return WPreturn('添加成功',1);
                }else{
                    return WPreturn('添加失败',-1);
                }
            }
        }else{
            if(input('param.nid')){  //编辑文章

                $nid = input('param.nid');
                $newsinfo = Db::name('newsinfo')->where('nid',$nid)->find();
                $this->assign($newsinfo);
            }
            //栏目
            $newsclass = Db::name('newsclass')->where('isdelete',0)->order('fid desc')->select();

            $this->assign('newsclass',$newsclass);
            return $this->fetch();
        }
        
    }

    /**
     * 删除栏目文章
     * @author lukui  2017-02-15
     * @return [type] [description]
     */
    public function delcon()
    {
        $id = input('get.id',0);
        if(!$id){
            return WPreturn('参数错误',-1);
        }

        $delnews = Db::name('newsinfo')->where('nid', $id)->update(['isdelete' => 1]);
        if($delnews){
            return WPreturn('删除成功',1);
        }else{
            return WPreturn('删除失败',-1);
        }
    }


}

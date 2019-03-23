<?php
namespace app\common\taglib;
use think\template\TagLib;
use think\Db;
class Wp extends Taglib{
    /**
     * 定义标签列表
     */
    protected $tags   =  [
        //客户的所属员工、经理、渠道
        'position'      => ['attr' => 'uid,filed', 'close' => 1], 

    ];


    /**
     * 
     */
    public function tagposition($tag, $content)
    {
        
        $filed = $tag['filed']?$tag['filed']:'';
        $uid = $tag['uid']?$tag['uid']:'';
        
        $parse = '<?php ';
        $parse .= '$tarr = GetUserOidInfo('.$uid.',"'.$filed.'");';
        $parse .= 'if(!$tarr){ $tarr = array(0,0,0);};foreach ($tarr as $key=>$value) {';
        $parse .= '?>';
        $parse .= $content;
        $parse .= '<?php } ?>';
        
        $parse .= $content;
       
        return $parse;
    }

}
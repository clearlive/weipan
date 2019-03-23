header("Content-type:application/pdf");
header("Content-Disposition:attachment;filename='downloaded.pdf'");


if ( strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false ) {
  
    header("Content-type:application/pdf");
    header("Content-Disposition:attachment;filename='downloaded.pdf'");
}else{
  
    $url = base64_decode($_GET['url']);
    header('location:'.$url);

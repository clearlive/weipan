<?php
include "./libs/phpqrcode.php";   

$value=$_GET["content"];

if(!isset($value)) {
    echo "content params not set";
    exit;
}

$errorCorrectionLevel = "L"; // 纠错级别：L、M、Q、H  
$matrixPointSize = "10"; // 点的大小：1到10  
QRcode::png($value, false, $errorCorrectionLevel, $matrixPointSize);  
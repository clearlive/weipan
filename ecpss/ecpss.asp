 
<!--#include file="MD5.asp"-->

<%
 

'[必填]md5key,加密时需要用到
Dim MD5key
'[必填]商户号
Dim MerNo
'[必填]订单号(商户自己产生：要求不重复)
Dim BillNo

'[必填]订单金额
Dim Amount

Dim OrderDesc	'[选填]选填订单描述

Dim ReturnURL	'[必填]返回数据给商户的地址(商户自己填写):::注意请在测试前将该地址告诉我方人员;否则测试通不过

Dim MD5info		'[必填]加密后的数据
Dim Remark		'[选填]备注
Dim md5src		'[必填]加密前的源字符串
Dim AdviceURL    '[必填]支付完成后，后台接收支付结果，可用来更新数据库值
Dim defaultBankNumber		'[必填]银行代码
Dim orderTime    '[必填]交易时间yyyyymmddsshhss




'以下九个参数为收货人信息,能收集的数据请尽力收集,实在收集不到的参数---请赋空值,谢谢。
'因为关系到风险问题和以后商户升级的需要，如果有相应或相似的内容的一定要收集，实在没有的才赋空值,谢谢。
	 
	 

orderTime=CStr(year(now())&right("0"&month(now()),2)&right("0"&day(now()),2))& CStr(right("0"&hour(now()),2)&right("0"&minute(now()),2)&right("0"&second(now()),2))
	 

MD5key = "V_FQViDb"'[必填]测试用
MerNo = "22552"			'[必填]商户号
BillNo = request("BillNo")'orderTime' "1"					'[必填]订单号(商户自己产生：要求不重复)
Amount = request("Amount")'"0.01"				'[必填]订单金额

OrderDesc=""				'[选填]选填订单描述
AdviceURL=request("AdviceURL")



ReturnURL =request("AdviceURL")	'[必填]返回数据给商户的地址(商户自己填写):::注意请在测试前将该地址告诉我方人员;否则测试通不过。这个文件在我们的接口包里有参考receive.asp

		
md5src=MerNo&BillNo&Amount&ReturnURL&MD5key		'MD5加密源
MD5info=Ucase(md5(md5src))							'转换大写

Remark=request("Remark")
defaultBankNumber =request("defaultBankNumber")
 

%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title> 820cc跳转网上银行支付...</title>
</head>
<body>

<br>
<form method="post" action="https://pay.ecpss.com/sslpayment" name="E_FORM" id="E_FORM" target="_top">

<input type="hidden" name="MerNos" value="<%=MD5key%>">

<table align="center">

<tr> 
            <td><input type="hidden" name="MerNo" value="<%=MerNo%>"></td></tr>
<tr>
            <td><input type="hidden" name="BillNo" value="<%=BillNo%>"></td></tr>
  
<tr>  
            <td><input type="hidden" name="Amount" value="<%=Amount%>"></td></tr>		
<tr>
		  <td><input type="hidden" name="OrderDesc" value="<%=OrderDesc%>"></td></tr>		
<tr>
            <td><input type="hidden" name="ReturnURL" value="<%=ReturnURL%>" ></td></tr>
			<tr>
            <td><input type="hidden" name="AdviceURL" value="<%=AdviceURL%>" ></td></tr>


<tr>
            <td><input type="hidden" name="MD5info" value="<%=MD5info%>"></td></tr>
<tr>
            <td><input type="hidden" name="orderTime" value="<%=orderTime%>"></td></tr>
<tr>
            <td><input type="hidden" name="defaultBankNumber" value="<%=defaultBankNumber%>"></td></tr>
<input type="hidden" name="url" value="<%=request.ServerVariables("HTTP_HOST")%>">
<tr> 
            <td><input type="hidden" name="Remark" value="<%=Remark%>"></td></tr>

    </table>
     
</form>
 <script language="javascript">
      document.getElementById("E_FORM").submit();
    </script>
</body>
</html>


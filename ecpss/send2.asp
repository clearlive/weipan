 
<!--#include file="MD5_2.asp"-->

<%
 

'[����]md5key,����ʱ��Ҫ�õ�
Dim MD5key
'[����]�̻���
Dim MerNo
'[����]������(�̻��Լ�������Ҫ���ظ�)
Dim BillNo

'[����]�������
Dim Amount

Dim OrderDesc	'[ѡ��]ѡ�������

Dim ReturnURL	'[����]�������ݸ��̻��ĵ�ַ(�̻��Լ���д):::ע�����ڲ���ǰ���õ�ַ�����ҷ���Ա;�������ͨ����

Dim MD5info		'[����]���ܺ������
Dim Remark		'[ѡ��]��ע
Dim md5src		'[����]����ǰ��Դ�ַ���
Dim AdviceURL    '[����]֧����ɺ󣬺�̨����֧��������������������ݿ�ֵ
Dim defaultBankNumber		'[����]���д���
Dim orderTime    '[����]����ʱ��yyyyymmddsshhss




'���¾Ÿ�����Ϊ�ջ�����Ϣ,���ռ��������뾡���ռ�,ʵ���ռ������Ĳ���---�븳��ֵ,лл��
'��Ϊ��ϵ������������Ժ��̻���������Ҫ���������Ӧ�����Ƶ����ݵ�һ��Ҫ�ռ���ʵ��û�еĲŸ���ֵ,лл��
	 
	 

orderTime=CStr(year(now())&right("0"&month(now()),2)&right("0"&day(now()),2))& CStr(right("0"&hour(now()),2)&right("0"&minute(now()),2)&right("0"&second(now()),2))
	 

MD5key = key'[����]������
MerNo = customerid			'[����]�̻���
BillNo = "ecpss_kj"&orderTime 
Amount = request("pay_money")'"0.01"				'[����]�������

OrderDesc=""				'[ѡ��]ѡ�������
AdviceURL="http://"&request.ServerVariables("HTTP_HOST")&"/ecpss/receive22.asp"



ReturnURL ="http://"&request.ServerVariables("HTTP_HOST")&"/ecpss/receive2.asp"	'[����]�������ݸ��̻��ĵ�ַ(�̻��Լ���д):::ע�����ڲ���ǰ���õ�ַ�����ҷ���Ա;�������ͨ����������ļ������ǵĽӿڰ����вο�receive.asp

		
md5src=MerNo&BillNo&Amount&ReturnURL&MD5key		'MD5����Դ
MD5info=Ucase(md5(md5src))							'ת����д

Remark=request("userid")
defaultBankNumber ="UNIONPAY"
 
 
 AdditionalInfo=request("userid")
 
 
    set rs=server.CreateObject("adodb.recordset") 
 sql="select * from  xy_users where [Account]='"&trim(AdditionalInfo)&"'"
 rs.open sql,conn1,1,1
 if rs.eof and rs.bof then
 response.write "<script>alert('�Բ��𣬲����ڴ˻�Ա�ʺ�');window.close();</script>"
 response.end
 else
 
 








 
 
set rsa=server.CreateObject("adodb.recordset") 
 sqla="select * from  xy_stationOrder"
 rsa.open sqla,conn1,1,3
 rsa.addnew
  rsa("OrderId")=BillNo
 rsa("UserId")=rs(0)
 rsa("PayMoney")=Amount
 rsa("VMoney")=Amount*10
 rsa("Date")=now()
 rsa("PayDate")=now()
 
 rsa("VipLive")=0
 rsa("PremLive")=0
 rsa("Discount")=0
 rsa("OrderState")=0
 rsa("CreateIp")= getIP() 
 rsa("PayResults")="δ��ֵ"
 rsa("PayType")="���֧��(�㳱)"
 
 
 
rsa.update
rsa.close:set rsa=nothing

 end if  
  
 
 
 
 
   
   
%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title> ���Ͻ�����������֧��...</title>
</head>
<body>

<br>
<form method="post" action="https://pay.ecpss.com/sslpayment" name="E_FORM" id="E_FORM" target="_self">

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


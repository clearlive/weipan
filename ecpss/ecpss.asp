 
<!--#include file="MD5.asp"-->

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
	 

MD5key = "V_FQViDb"'[����]������
MerNo = "22552"			'[����]�̻���
BillNo = request("BillNo")'orderTime' "1"					'[����]������(�̻��Լ�������Ҫ���ظ�)
Amount = request("Amount")'"0.01"				'[����]�������

OrderDesc=""				'[ѡ��]ѡ�������
AdviceURL=request("AdviceURL")



ReturnURL =request("AdviceURL")	'[����]�������ݸ��̻��ĵ�ַ(�̻��Լ���д):::ע�����ڲ���ǰ���õ�ַ�����ҷ���Ա;�������ͨ����������ļ������ǵĽӿڰ����вο�receive.asp

		
md5src=MerNo&BillNo&Amount&ReturnURL&MD5key		'MD5����Դ
MD5info=Ucase(md5(md5src))							'ת����д

Remark=request("Remark")
defaultBankNumber =request("defaultBankNumber")
 

%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title> 820cc��ת��������֧��...</title>
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


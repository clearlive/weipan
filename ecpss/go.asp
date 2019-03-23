<%@ CODEPAGE=65001 %>  
<% Response.CodePage=65001%>  
<% Response.Charset="UTF-8" %>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=utf-8" />
<!-- #include file="md5.asp" -->
<%
AdditionalInfo=request("txtAccounts")
 
   set rs=server.CreateObject("adodb.recordset") 
 sql="select * from  AccountsInfo where Accounts='"&trim(AdditionalInfo)&"'"
 
 rs.open sql,conn1,1,1
 if rs.eof and rs.bof then
 response.write "<script>alert('对不起，不存在此会员帐号');window.close();</script>"
 response.end
end if

 
url="send.asp?jin="&request("txtSalePrice")&"&userid="&rs("userid")&"&p2_Order="&p2_Order&"&selCardType="&request("rblCardList")&""
response.redirect url  
response.End()	
 	
 
%>
 



 
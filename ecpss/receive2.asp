
<!--#include file="MD5_2.asp"--><title>支付返回结果</title>
<%
 

Dim BillNo,Amount,Succeed,Result,MD5info,MD5key,md5src,md5str,RorderNo

 
 
BillNo = request("BillNo")

Amount = request("Amount")		
Succeed = request("Succeed")	
Result = request("Result")		
MD5info = request("MD5info")	
Remark=request("Remark")
currencyName = "RMB"


 
md5src = BillNo  & Amount & Succeed & key
md5str=Ucase(md5(md5src))





 







 if md5info=md5str Then 

    if Succeed="88"  Then
 
 
  
 
set rs=server.CreateObject("adodb.recordset") 
 sql="select * from  xy_stationOrder where OrderId='"&BillNo&"' and PayResults='未充值'"
 rs.open sql,conn1,1,1
if not(rs.eof and rs.bof) then
 
 

  conn1.execute"update xy_stationOrder set orderstate=1,PayResults='已完结' where OrderId='"&BillNo&"'"
  set rs1=server.CreateObject("adodb.recordset") 
 sql1="select * from  xy_currency where   userID="&rs("userid")&""
 rs1.open sql1,conn1,1,3
 if rs1.eof and rs1.bof then
 rs1.addnew()
 rs1("userID")=rs("userid")
 rs1("Currency")=Amount*10
 rs1("LockCurrency")=0
 rs1("CanCurrency")=Amount*10
 rs1.update
 else
 conn1.execute"update xy_currency set Currency=Currency+"&Amount*10&",CanCurrency=CanCurrency+"&Amount*10&" where userID="&rs("userid")&""
 end if
 rs1.close:set rs1=nothing
 

end if
rs.close:set rs=nothing	
  
  
 
 response.write "<script>alert('会员充值成功');window.close();</script>"
 response.end
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    Else 
%>
<%= Result%>&nbsp;&nbsp;&nbsp;&nbsp;<%= Succeed%>
<%
    end if
	
  else
   response.write "<script>alert('会员充值成功');window.close();</script>"
 response.end
 
  response.write "验证失败"
  End if
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 %>

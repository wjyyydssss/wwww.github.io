function yanzheng(){
    var xingming=document.getElementById("xingming").value;
    var shenfen=document.getElementById("shenfen").value;
    var telephone=document.getElementById("telephone").value;
if(xingming.length==0){
 alert("姓名不能为空请重新输入");
}
else if(shenfen.length==0) {
alert("身份证号不能为空请重新输入");
}

else if(telephone.length==0){
 alert("手机号不能为空请重新输入");
}
else if(xingming=="汉高祖"){
      if(shenfen==123){
             if(telephone==456){
             alert("身份验证通过");
             confirm("跳转中.....");
            //自己编写的网页的跳转
             self.location="huochairen02.html";
            // self.location="file:///D:/studywangyesheji/huochairen.html";
            // window.location.href="https://www.baidu.com/?tn=15007414_8_dg";
                  }  
              else{
                  alert("手机号输入错误");
                  }
 }
else{
 alert("身份证号输入错误");
} 
}

else if(xingming=="汉武帝"){
 if(shenfen==1){
     if(telephone==4){
         alert("身份验证通过");
         //document.write("欢迎进入当前页面");
        // window.location.href="https://www.baidu.com/?tn=15007414_8_dg";
         self.location="huochairen02.html";
    }  
    else{
     alert("手机号输入错误");
    }
 }
else{
 alert("身份证号输入错误");
} 
}

else if(xingming=="明太祖"){
 if(shenfen==111){
     if(telephone==333){
         alert("身份验证通过");
         //document.write("欢迎进入当前页面");
         window.location.href="https://www.baidu.com/?tn=15007414_8_dg";
    }  
    else{
     alert("手机号输入错误");
    }
 }
else{
 alert("身份证号输入错误");
} 
}

else{

     alert("身份验证未通过\n*请检查姓名是否正确");
     self.location="cuowuyanzheng.html";
 
}
 }
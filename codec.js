function code() {
        var code1 = Math.floor(Math.random()*100);
        var code2 = Math.floor(Math.random()*100);
        var codei = window.prompt("验证码："+code1+"×"+code2+"的结果？");
        var codec = code1*code2;
        if (codei != codec){
            window.alert("你的验证码不对！请重试！")
            code()
        }
        }
code()
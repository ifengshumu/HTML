
//全局定义按钮点击状态
var isClick = false;
//获取当前时间
function getCurrentTime() {
    var x = document.getElementById("timeBtn");
    alert(x.innerHTML);
    x.innerHTML = Date();

}
//改变按钮文字
function changeText() {
    var btn = document.getElementById("textBtn");
    if (isClick) {
        btn.style.color = "black";
        btn.innerHTML = "你敢点我吗？";
        isClick = false;
    } else {
        btn.style.color = "#f00";
        btn.innerHTML = "你竟然敢点我！";
        isClick = true;
    }

}
//改变灯泡开关状态
function changeBallStatus() {
    var ball = document.getElementById("ball");
    if (ball.src.match("pic_on")) {
        ball.src = "../source/pic_off.gif";
    } else  {
        ball.src = "../source/pic_on.gif";
    }
}
//对象
window.onload = function obj() {
    var p = {
        firstName:"Chris",
        lastName:"Lee",
        fullName:function () {
            return this.firstName + " " + this.lastName;
        }
    };
    document.getElementById("fun").innerHTML = "不加括号输出函数表达式：" + p.fullName;
    document.getElementById("name").innerHTML = "加括号输出函数执行结果：" + p.fullName();
}
//带参数的函数   === 为绝对相等，即数据类型与值都必须相等。
function myObject(name,nation) {
    if (typeof name === 'string' && typeof nation === 'string') {
        alert("MyName is " + name + ", " + "I'm " + nation);
    }
    cars=["BMW","Volvo","Saab","Ford"];
    alert(cars.length);

}
//判断是否是数组-自动调用
(
    function isArray(arrayObject) {
        if (arrayObject instanceof Array) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    }
)();

//正则表达式-检索
function mySearch() {
    let str = "www.cheOk.com";
    let index = str.search(/cheok/i);//如果不区分大小写：/检索文字/i;反之用双引号括起来。
    alert(index);
}
//正则表达式-替换
function myReplace() {
    let old = document.getElementById("rep").innerHTML;
    let newO = old.replace(old,"AliBaBa");
    let newT = old.replace(/tencent/i,"AliBaBa");
    console.log(newT===newO);
    document.getElementById("rep").innerHTML = newT;
}
/*是否带有小数*/
function    isDecimal(strValue )  {
    var  objRegExp= /^\d+\.\d+$/;
    return  objRegExp.test(strValue);
}

/*校验是否中文名称组成 */
function ischina(str) {
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验是否全由8位数字组成 */
function isStudentNo(str) {
    var reg=/^[0-9]{8}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验电话码格式 */
function isTelCode(str) {
    var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return reg.test(str);
}

/*校验邮件地址是否合法 */
function IsEmail(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}
function check() {
    let f = document.getElementById("ff");
    f.checkValidity()
    f.setCustomValidity()
    if (navigator.cookieEnabled === true) {
        alert("cookie");
    } else {

    }
}
//鼠标离开
function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
}
//鼠标放在上面
function mOver(obj) {
    obj.innerHTML = "Thank you";
}
//鼠标点击
function mDowm(obj) {
    obj.innerHTML = "Release Me";
    obj.style.background = "yellow";

}
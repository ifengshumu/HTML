
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

function isArray(arrayObject) {
    return arrayObject instanceof Array;
}

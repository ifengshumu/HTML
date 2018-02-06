var isClick = false;
// 直接输出
document.write("Hello World!")
// 事件响应
function clickBtn() {
    if (!isClick) {
        document.getElementById("btn").innerHTML = "你竟然点我！";
        isClick = true;
    } else {
        document.getElementById("btn").innerHTML = "你竟然又点我！";
        isClick = false;
    }
    
}
// 改变样式
function changeStyle() {
    if (!isClick) {
        document.getElementById("p").style.color = "#f00";
        isClick = true;
    } else {
        document.getElementById("p").style.color = "purple";
        isClick = false;
    }
    
}
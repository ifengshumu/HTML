// 矩形
function makeRectangle() {
    var cas = document.getElementById('cas1');
    var cxt = cas.getContext("2d");
    cxt.fillStyle = "#FF0000";
    cxt.fillRect(50, 50, 200, 100);
}
// 线条
function makeLine() {
    var cas = document.getElementById('cas2');
    var cxt = cas.getContext("2d");
    cxt.moveTo(150, 10);
    cxt.lineTo(10, 280);
    cxt.lineTo(280, 280);
    cxt.lineTo(150, 10);
    cxt.stroke();
}
// 圆
function makeCircle() {
    var cas = document.getElementById("cas3")
    var cxt = cas.getContext("2d");
    cxt.beginPath();
    cxt.arc(150, 150, 100, 0, Math.PI * 2, true);
    cxt.stroke();
}
// 文本
function makeWord(status) {
    var cas = document.getElementById("cas4");
    var cxt = cas.getContext("2d");
    cxt.font = "60px Arial";
    cxt.textColor = "red";
    if (status == true) {
        cxt.fillText("中国", 80, 50);
    } else {
        cxt.strokeText("中国", 80, 150);
    }
}
// 线条渐变色
function makeLinearGradient() {
    var cas = document.getElementById("cas5");
    var cxt = cas.getContext("2d");
    var grd = cxt.createLinearGradient(50, 100, 200, 100);
    grd.addColorStop(0, "#48D1CC");
    grd.addColorStop(1, "#00FF7F");
    cxt.fillStyle = grd;
    cxt.fillRect(50, 100, 200, 100);
}
// 径向/圆渐变色
function makeRadialGradient() {
    var cas = document.getElementById("cas6");
    var ctx = cas.getContext("2d");
    // 创建径向渐变
    var grd = ctx.createRadialGradient(150, 150, 5, 150, 150, 100);
    grd.addColorStop(0, "#F4A460");
    grd.addColorStop(1, "#fff");
    // 填充渐变
    ctx.fillStyle = grd;
    ctx.fillRect(50, 50, 250, 250);
}
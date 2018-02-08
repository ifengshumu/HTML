var isclick = false;

function getstorage() {
    if (typeof (Storage) !== "undefined") {
        var me = document.getElementById("you");
        if (!isclick) {
            localStorage.setItem("a", "不一样的烟火");
            var a = localStorage.getItem("a");
            me.innerHTML = "我就是我" + a;
            isclick = true;
        } else {
            me.innerHTML = "您是谁？";
            isclick = false;
        }
        // 计数
        if (localStorage.count) {
            localStorage.count = Number(localStorage.count)+1;
        } else {
            localStorage.count = 1;
        }
        document.getElementById("cnt").innerHTML = "你点击了"+localStorage.count+"次";
    } else {
        p.innerHTML = "嗯嗯";
    }
}
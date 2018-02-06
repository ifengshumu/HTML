// 暂停播放
function playOrPause() {
    // 视频全局变量
    myVideo = document.getElementById("baby");
    alert(myVideo);
    if (myVideo.paused) {
        myVideo.play();
    } else {
        myVideo.pause();
    }
}
// 大尺寸
function largeVideo() {
    myVideo.width = 800;
    myVideo.height = 950;
}
// 中等尺寸
function mediumVideo() {
    myVideo.width = 600;
    myVideo.height = 650;
}
// 小
function smallVideo() {
    myVideo.width = 300;
    myVideo.height = 450;
}
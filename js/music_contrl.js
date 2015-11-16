/**
 * Created by taunt on 2015/9/24.
 */
/**
 *
 * HTML音乐播放的常用API
 *
 * 主要标签
 *<audio src="URL" > 你的浏览器不支持HTML5播放器 </audio>
 *
 *方法
 *audio.play()            //播放当前歌曲
 *audio.pause()           //暂停当前歌曲
 *audio.load()            //重新加载歌曲，更改src后用于重新加载歌曲
 *
 * 属性
 * audio.duration          //获取歌曲总时间，用于显示播放时间和制作进度条
 * audio.currentTime       //获取和设置歌曲时间，用于显示当前播放时间和点击进度条改变播放时间
 *auido.buffered.length   //获取已缓冲区域的个数，如果还未全部缓冲完成，当用户跳跃播放时，会产生多个缓冲区域
 * audio.buffered.end()    //获取已缓冲的时间，用于制作缓冲进度条
 *audio.volume            //设置音量
 * auido.muted             //设置和判断是否静音
 *
 *事件
 * timeupdate              //当前歌曲播放时间变化时，播放时间和播放进度条变化得靠这个事件
 * ended                   //当前歌曲播放结束时
 * canplay                 //当前歌曲可以播放时
 * */


 (function playModel(){



})();


var audio = $("#myMusic").get(0);//获取音乐播放器
var mark = 1;//设置标志，当为  1   时播放状态，因为播放器设置为自动播放状态
var listLen = $("#music_list ul li").length;


//          当点击播放按钮时，如果mark为 1 暂停音乐，并将按钮改为暂停状态样式不为 1 则将播放
//          音乐，并将按钮改为正在播放状态
$("span.play").click(function () {

    if (mark == 1) {
        audio.pause();
        $(this).addClass("pause");//播放音乐更改样式
        mark = 0;
    }
    else {
        audio.play();
        $(this).removeClass("pause");//暂停音乐更改样式
        mark = 1;
    }
    //更改正在播放歌曲名字
    pName();
});
//==============================================
//列表栏播放效果
//==============================================
var _index = 0;

$("#music_list ul li").click(function () {

    //通过li的序号，获取当前歌曲的序号
    _index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    var src = $(this).attr("data-src");
    audio.src = src;

    mark = 0;
    //将播放栏的播放键改变
    if (mark == 1) {
        audio.pause();
        $("span.play").addClass("pause");
        mark = 0;
    }
    else {
        audio.play();
        $("span.pause").removeClass("pause");
        mark = 1;
    }
    //更改正在播放歌曲名字
    pName();
});

//==============================================
//下一曲切换效果
//==============================================
$("span.next").click(function () {
    if(_index >= listLen-1){
        _index = 0;
    }else{
        _index++;
    }
    var src = $("#music_list ul li").eq(_index).attr("data-src");
    $("#music_list ul li").eq(_index).addClass("active").siblings().removeClass("active");
    var p = $("#music_list ul li").eq(_index);
    audio.src = src;
    mark = 0;
    //将播放栏的播放键改变
    if (mark == 1) {
        audio.pause();
        $("span.play").addClass("pause");
        mark = 0;
    }
    else {
        audio.play();
        $("span.play").removeClass("pause");
        mark = 1;
    }
    //更改正在播放歌曲名字
    pName();
});
//==============================================
//上一曲切换效果
//==============================================
$("span.prev").click(function () {
    if(_index <= 0){
        _index = listLen-1;
    }else{
        _index--;
    }
    var src = $("#music_list ul li").eq(_index).attr("data-src");
    $("#music_list ul li").eq(_index).addClass("active").siblings().removeClass("active");
    audio.src = src;

    mark = 0;
    //将播放栏的播放键改变
    if (mark == 1) {
        audio.pause();
        $("span.play").addClass("pause");
        mark = 0;
    }
    else {
        audio.play();
        $("span.play").removeClass("pause");
        mark = 1;
    }
    //更改正在播放歌曲名字
    pName();
});

//==============================================
//设置监听事件，当歌曲播放结束的时候执行播放下一曲
//==============================================
var aud = document.getElementById("myMusic");
aud.addEventListener("ended",function(){
//    alert("TEST！！！！");
    if(_index >= listLen-1){
        _index = 0;
    }else{
        _index++;
    }
    var src = $("#music_list ul li").eq(_index).attr("data-src");
    $("#music_list ul li").eq(_index).addClass("active").siblings().removeClass("active");
    var p = $("#music_list ul li").eq(_index);
    audio.src = src;
    mark = 0;
    //将播放栏的播放键改变
    if (mark == 1) {
        audio.pause();
        $("span.play").addClass("pause");
        mark = 0;
    }
    else {
        audio.play();
        $("span.play").removeClass("pause");
        mark = 1;
    }
    //更改正在播放歌曲名字
    pName();
});






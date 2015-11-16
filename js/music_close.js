/**
 * Created by taunt on 2015/9/24.
 */

//**************定位音乐播放器的位置***********************

(function(){
    var i = 0;   //0表示当前音乐播放不可见,位初始状态
    //1表示当前音乐播放不可见
    $("#closeMusic #btn").click(function(){
        if(i == 1){
            i = 0;
            $("#closeMusic").animate({"left":"370"});
            $("#music_list").animate({"left":"-370px"});
            k =0;//将列表标记设为不可见
            var t = setTimeout("$('#Con #musicCon').animate({left:'-370px'});",400);
//        var x = setTimeout("$('#closeMusic #btn img').attr('src','images/iconfont-more.png');",500);

        }else{
//        $("#closeMusic #btn img").attr("src","images/iconfont-back.png");
            i = 1;
            $("#closeMusic").animate({left:"370px"});
            $("#Con #musicCon").animate({left:"0px"});
        }
    });
    var k = 0; //k=0,表示播放列表不可见

    $("#closeList").click(function(){
        if(k == 0){
            $("#music_list").animate({left:'0px'});//列表可见
            $("#closeMusic").animate({left:'740px'});
            k = 1;
        }else{
            $("#music_list").animate({left:'-370px'});
            $("#closeMusic").animate({left:'370px'});
            k = 0;
        }
    });

})();



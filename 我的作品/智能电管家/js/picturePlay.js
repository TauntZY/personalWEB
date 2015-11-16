
//此函数用来初始化加载
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addLoadEvent(movePic);
addLoadEvent(moveNum);
addLoadEvent(removeClass);
addLoadEvent(siblings);
addLoadEvent(picPlay);
//addLoadEvent(createFunctions);

//点击li的时候改变图片

function movePic(){
    var lis = document.getElementsByClassName("bing");
    var picNum = document.getElementById("content_div1_con");
    var k = [];
    for(var i = 0;i<lis.length;i++){
        //使用闭包的方法实现
        (function(num){
            lis[num].onclick = function(){
                //alert(num);
                picNum.style.left = moveNum(num);
                lis[num].setAttribute("class", "active bing");
                removeClass(lis[num]);
            };
        })(i);
        //此种方法，lis[i].onclick中的i已经是for循环完的i了，因此无法实现
//        lis[i].onclick = (function(num){
//            return function(){
//                picNum.style.left = moveNum(num);
//                lis[num].setAttribute("class", "active bing");
//                removeClass(lis[num]);
//                console.log(num);
//            }();
//        })(i);
    }

    //最愚蠢的方法
//    lis[0].onclick = function(){
//        picNum.style.left = moveNum(0);
//        lis[0].setAttribute("class", "active bing");
//        removeClass(lis[0]);
//    }
//    lis[1].onclick = function(){
//        picNum.style.left = moveNum(1);
//        lis[1].setAttribute("class", "active bing");
//        removeClass(lis[1]);
//    }
//    lis[2].onclick = function(){
//        picNum.style.left = moveNum(2);
//        lis[2].setAttribute("class", "active bing");
//        removeClass(lis[2]);
//    }

//    此方法i会一直加，也无法指定那个li
//    function clickLi(){
//        var i = -1;
//        return function(){
//            i++;
//            return i;
//        };
//    }
//    var b = clickLi();
//    for(var j=0;j<lis.length;j++){
//        lis[0].onclick = function(){
//            picNum.style.left = moveNum(b());
//        }
//    }

}
function moveNum(n){
    var arr = new  Array();
    arr[0] = "0px";
    arr[1] = "-1336px";
    arr[2] = "-2673px";
    return arr[n];
}


function siblings(elem) {
    var a = [];
    var b = elem.parentNode.children;
    for(var i =0;i < b.length;i++) {
        if(b[i] !== elem) a.push(b[i]);
    }
    return a;
}
function removeClass(e){
    var links = siblings(e);
    for(var j=0;j<siblings.length+1;j++){
        links[j].removeAttribute("class");
        links[j].setAttribute("class","bing");
    }
}

//主页div1的图片播放
var i = 0;
function picPlay(){
    var lis = document.getElementsByClassName("bing");
    var picNum = document.getElementById("content_div1_con");
    picNum.style.left = moveNum(i);
    lis[i].setAttribute("class", "active bing");
    removeClass(lis[i]);
    if(i>=0 && i<2){
        i++;
    }
    else{
        i=0;
    }
}
var setInval = setInterval("picPlay()",2000);

//










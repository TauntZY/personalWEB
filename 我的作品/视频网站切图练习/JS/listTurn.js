/**
 * Created by taunt on 2015/10/29.
 * author ：吴志艺
 * 用于点击向左或向右时，更改listNav的active和改变list里面的内容
 */

//加载js的方法
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }
    else{
        window.onload =function(){
            oldonload();
            func();
        }
    }
}
//加载js
addLoadEvent(moveList);
addLoadEvent(countClick);
addLoadEvent(showList);


//移动处理
function moveList(k,j){
    var btnL = document.getElementById("turnLeft");
    var btnR = document.getElementById("turnRight");
    var listCon = document.getElementById("list");
    var n=0;
    if(j){n=j;}
    if(k == 0 || k == 1 || k == 2 || k == 3) {
        n=k;
        listCon.style.left = countClick(n);
        var j=k;
        k=null;
        moveList(k,j);
        showActive(n);
    }
    else {
        btnR.onclick = function () {
            if (n < 3) {
                n++;
            } else {
                n = 0;
            }
            listCon.style.left = countClick(n);
            showActive(n);
        }
        btnL.onclick = function () {
            if (n != 0) {
                n--;
            } else {
                n = 3;
            }
            listCon.style.left = countClick(n);
            showActive(n);
        }
    }
}
//计数，并返回数组的内容，作为移动的距离；
function countClick(i){
    var moveArr = new Array();
    moveArr[0] = "0px";
    moveArr[1] = "-1110px";
    moveArr[2] = "-2220px";
    moveArr[3] = "-3330px";

    return moveArr[i];
}

//先通过父元素的子元素找到含自己在内的“兄弟元素”，然后判断剔除自己。
function siblings(elem) {
    var a = [];
    var b = elem.parentNode.children;
    for(var i =0;i < b.length;i++) {
        if(b[i] !== elem) a.push(b[i]);
    }
    return a;
}
//显示当前listNav的active样式
function showActive(k){
    var listNav = document.getElementsByClassName("showList");
    var listNavS = siblings(listNav[k].parentNode); //因为listNav[k]是li下的a标签，所以要去a的去节点li
    for(var i= 0;i<listNavS.length;i++){
        listNavS[i].removeAttribute("class");//移除当前节点（li）以外的兄弟节点的class属性
    }
    listNav[k].parentNode.setAttribute("class", "active");
}
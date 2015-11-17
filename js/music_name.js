/**
 * Created by taunt on 2015/11/12.
 */

//正在播放的音乐的名字
function addonloadEvent(func){
    var oldonload = window.onload;
    if( typeof oldonload != "funcyion"){
        oldonload = func;
    }
    else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
addonloadEvent(pName);

function pName(){
    var li = document.getElementsByClassName("active");
    var p = document.getElementById("pName");
    var a =  li[0].childNodes;
//    alert(a.length); //3,浏览器会将空额也当成一个节点,因此在操作前应该现将空格去除
    a = filterSpaceNode(a);
    var aName = a[0].innerHTML;
    p.innerHTML = aName;
    return p;
}
pName();

//去除节点空白（空格）节点
function filterSpaceNode(nodes){
    var newNodes = [];
    for( var i = 0; i<nodes.length;i++){
        //识别空白节点，如果是就不添加到数组newNodes中;
        if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
            continue;
        }
        newNodes.push(nodes[i]);
    }
    return newNodes;
}

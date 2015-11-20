/**
 * Created by wuzhiyi on 2015/11/16.
 */

(function addA(){
    var lis = document.getElementsByClassName("nav_li");
    for (var i = 0; i < lis.length ; i++) {
        (function (num) {
            lis[num].onmouseover = function () {
                var as = lis[num].childNodes;
                var as = filterSpaceNode(as);
                //alert(as[0].tagName); //a1
                as[0].setAttribute("class", "inA");
            }
            lis[num].onmouseout = function(){
                var as = lis[num].childNodes;
                var as = filterSpaceNode(as);
                as[0].removeAttribute("class","inA");
                as[0].setAttribute("class","nav_ul_a");
                //alert(as[0].tagName); //a1
//                as[0].removeAttribute("class", "inA");
            }
            /*
            lis[num].onmouseout = function(){
                var as = lis[num].childNodes;
                var as = filterSpaceNode(as);
                as[0].setAttribute("class", "inA");

            }*/
        })(i);
    }
})();





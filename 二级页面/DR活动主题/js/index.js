/*
* @Author: Administrator
* @Date:   2018-10-11 16:42:58
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-11 16:43:04
*/
$(".dthreenav a").click(function () {
    $("this")   
    .addClass("active")
    .siblings()
    .removeClass("active")
});

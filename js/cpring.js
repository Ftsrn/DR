/*
* @Author: Administrator
* @Date:   2018-10-08 17:47:41
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-10 14:18:52
*/
$('.tapitem > ul > li').hover(function () {
    $(this).children('.tapitme_div').show();
    $(this).siblings('.tapitme_div').hide();
  },
  function () {
    $(this).children('.tapitme_div').hide();
    $(this).siblings('.tapitme_div').show();
  });


  
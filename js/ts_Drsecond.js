// 回复部分功能实现
$('.respond_num').click(function() {
    $('#second .area').show();
    $('#second .text_up').show();
});

$('.text_up').click(function() {
    $('#second .area').hide();
    $(this).hide();
})

// 我要评论部分功能实现
$('.th_right #usercom').click(function() {
    $(this).prev().css("display",'none');
});

var textarea = document.querySelector('.com_word');
var current = document.querySelector('.current');
var total = document.querySelector('.total');
textarea.oninput = function () {
    var text = this.value;
    var currentLen = text.length;
    current.innerHTML = currentLen;
    total.innerHTML = 200 - currentLen;
};

// 点击评论弹出层
$('.commit_btn').click(function() {
   layer.alert('请先注册账户');
});
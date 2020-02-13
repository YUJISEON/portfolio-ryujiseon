/* js/main_sec.js */

$(function(){
    
    /****** 메인 이미지  *******/ 
    var num=$('.mainSlide').length; // 이미지 개수
    var atime=1000;                 // fade 시간
    var speed=3000;                 // 애니메이션 시간
    
    console.log(num);
    
    for(i=1;i<=num;i++) {
        $('#mainSlide'+i).css({
            "background" : "url('images/mainImg"+i+".jpg')",
            "background-position" : "center",
            "background-size" : "cover"
        });
    }
    
    $("#mainImg > div:gt(0)").hide();
    setInterval(function(){
        $('#mainImg > div:first').fadeOut(1000)
                                 .next()
                                 .fadeIn(1000)
                                 .end()
                                 .appendTo('#mainImg');
    }, 3000);

    $('.subImg').hover(function(){
        var hoverC = $(this).attr('id');
        $(this).css("background-image","url('images/"+hoverC+"_hover.jpg')");
    }, function(){
        var hoverC = $(this).attr('id');
        $(this).css("background-image","url('images/"+hoverC+".jpg')");
    });


});
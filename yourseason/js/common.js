/* js/common.js */

$(function(){
    /****** PORIFOLIO - subMenu *******/ 
    // PORIFOLIO - subMenu 숨기기/보이기
    $('.subMenu').hide();
    $('#menu li:nth-child(3)').hover(function(){
        $(this).find('.subMenu').slideDown(100);
        //$(this).find('a').addClass('on');
    }, function(){
        $(this).find('.subMenu').slideUp(100);
        //$(this).find('a').removeClass('on');
    });

    /****** 페이지별 EN/KR 선택  *******/ 
    $('#txtKr, .txtKr').hide();
    $('.lanEn').click(function(){
        $('#txtEn, .txtEn').show()
        $(this).css('font-weight','bold');
        $('.lanKr').css('font-weight','100');
        $('#txtKr, .txtKr').hide();
    });
    $('.lanKr').click(function(){
        $('#txtKr, .txtKr').show()
        $(this).css('font-weight','bold');
        $('.lanEn').css('font-weight','100');
        $('#txtEn, .txtEn').hide();
    });

    /****** SNS 버튼  *******/ 
    // top버튼 호버 시 
    $('#sns li:nth-child(1)').hover(function(){
        //console.log('ht1111111');
        $('#sns li:nth-child(1) img').attr('src','images/sns_blogger02.png');
        
    }, function(){
        $('#sns li:nth-child(1) img').attr('src','images/sns_blogger01.png');
    });

    $('#sns li:nth-child(2)').hover(function(){
       // console.log('ht2222222');
        $('#sns li:nth-child(2) img').attr('src','images/sns_instagram02.png');
        
    }, function(){
        $('#sns li:nth-child(2) img').attr('src','images/sns_instagram01.png');
    });

    $('#sns li:nth-child(3)').hover(function(){
        //console.log('hi3333333');
        $('#sns li:nth-child(3) img').attr('src','images/sns_youtube02.png');
        
    }, function(){
        $('#sns li:nth-child(3) img').attr('src','images/sns_youtube01.png');
    });

    /****** TOP 버튼  *******/ 
    
    var topPsi=$(window).innerHeight();  // 스크롤 보이기 위치
    var etime=600;  // 효과 시간 (ms)
    var atime=500;  // 애니메이션 시간 (ms)
    $('#topBtn').hide();
    // 스크롤시 top버튼 페이드 인/아웃
    $(window).scroll(function(){
        //console.log('scrollTop : '+$(window).scrollTop);
        if( $(window).scrollTop() > topPsi ) {
            $('#topBtn').fadeIn();
            //console.log('fadeIn');
        }
        else {
            $('#topBtn').fadeOut();
            //console.log('fadeOut');
        }
    });
    // top버튼 클릭 시 
    $('#topBtn').click(function(){
        $('html, body').animate({
            scrollTop:0
        },atime );
    });
    // top버튼 호버 시 
    //$('#topBtn').hover(function(){
    //    $('#topBtn i').css('color','#F8F8F8');
       // $('#topBtn img').attr('src','images/upwards-arrow02.png');
    //}, function(){
    //    $('#topBtn i').css('color','#292929');
       // $('#topBtn img').attr('src','images/upwards-arrow01.png');
    //});

    /******************************
            모바일 버전
    ******************************/
    /****** menu *******/ 
    var click_M_Mb=false
    $('.subMenu_Mb').hide();
    $('#menu_Mb').click(function(){
        if(!click_M_Mb) {
            $('.subMenu_Mb').slideDown(100);
            click_M_Mb=true;
        }
        else {
            $('.subMenu_Mb').slideUp(100);
            click_M_Mb=false;
        }                
    });

    $(window).resize(function(){
        $('.subMenu_Mb').hide();
    });
});
/* js/porifolio_slide.js */

$(function () {                     
    
    /************************************************
                        포트폴리오 메인 
    *************************************************/   

    var num = $('.proImg').length; // 이미지 개수    
    for (i = 1; i <= num; i++) {
        $('#proImg' + i).css({
            "background": "url('images/proImg" + i + ".jpg')",
            "background-position": "center",
            "background-size": "cover"
        });
    }

    $('.proImg').hover(function(){
        var hoverC = $(this).attr('id');
        console.log(hoverC);
        $(this).css("background-image","url('images/"+hoverC+"_hover.jpg')");
    }, function(){
        var hoverA = $(this).attr('id');
        console.log(hoverA);
        $(this).css("background-image","url('images/"+hoverA+".jpg')");
    });


    /************************************************
           각 카테고리 페이지 팝업창 (기능 제외)
    *************************************************/   

    // 갤러리 이미지 불러오기
    var weddingNum=$('.weddingImg').length; // 웨딩 이미지 개수    
    var dateNum=$('.dateImg').length; // 데이트 이미지 개수    
    var babyNum=$('.babyImg').length; // 아가 이미지 개수    
    var familyNum=$('.familyImg').length; // 가족 이미지 개수    
    var travelNum=$('.travelImg').length; // 여행 이미지 개수    
    var restsNum=$('.restsImg').length; // 기타 이미지 개수    


    // 클릭 이미지 팝업창 - 슬라이드 순서 
    function imgStart(slideName, slide, page) {
       var pageNumber;
       console.log('slideName : '+slideName);
       console.log('slide : '+slide);
       console.log('page : '+page); 
       
       if ( page ==1 ) { pageNumber=weddingNum; }
       else if ( page ==2 ) { pageNumber=dateNum; }
       else if ( page ==3 ) { pageNumber=babyNum; }
       else if ( page ==4 ) { pageNumber=familyNum; }
       else if ( page ==5 ) { pageNumber=travelNum; }
       else if ( page ==6 ) { pageNumber=restsNum; }


       // 이미지 영역 뿌려주기 
       $('.imgSlide').css({
            "background": "url('images/"+slideName+slide + ".jpg')",
            "background-position": "center",
            "background-size": "contain",
            "background-repeat": "no-repeat"
        });

        // 팝업창 상단 : 이미지 페이지 및 제목 표시 
        $('.pageNum').html(slide+' / '+pageNumber+' - '+'<span class="imgCation"></span>');
        console.log(slide+' / '+pageNumber);
        var cation=$('.imgName'+slide).text();
        $('.imgCation').text(cation);

        
        // 다음 버튼 - 이미지 슬라이드      
        $('.nextBtn').click(function () {
            slide++;
            slide = slide % pageNumber;
            console.log('slide num: ' + slide);
            if (slide <= pageNumber) {
                if (slide == 0) { slide = slide + 10; }
                imgStart(slideName, slide, page);
            }
        });

        // 이전 버튼 - 이미지 슬라이드  
        $('.prevBtn').click(function () {
            slide--;
            slide = slide % pageNumber;
            console.log('slide num: ' + slide);
            if (slide <= pageNumber) {
                if (slide == 0) { slide = slide + 10; }
                imgStart(slideName, slide, page);
            }
        });

        // 종료 버튼 - 이미지 슬라이드 
        $('.close').click(function () {
                $('aside').hide();
        });

        // 윈도우창 리사이즈
        var wh, popWin;
        window.resize(function(){
            wh=window.innerHeight;
            popWin=document.getElementsByName('aside');
            popWin.style.height=wh+'px';
        });
        
    }
  

    /************************************************
                            웨딩 
    *************************************************/        

    for (i = 1; i <= weddingNum; i++) {
        $('#weddingImg' + i).css({
            "background": "url('images/wedding" + i + ".jpg')",
            "background-position": "center",
            "background-size": "cover"
        });
    }

    // 팝업창 이미지 슬라이드
    $('.weddingImg').click(function () {
        $('aside').fadeIn();
        
        var startId = $(this).attr('id');
        console.log('n1: '+typeof(startId)+' / value: '+startId);      

        // 슬라이드될 페이지!        
        var slideName = startId.slice(0, startId.length-4 );
        console.log('slideName: '+slideName);

        // 이미지 슬라이드 시작번호 설정          
        var slide = startId.slice(10, 12);
        console.log('n2: '+slide);
            
        var page=1;
        imgStart(slideName, slide, page);                 
            
    });       
        
    
    /************************************************
                            데이트 
    *************************************************/    
    
    for (i = 1; i <= dateNum; i++) {
        $('#dateImg' + i).css({
            "background": "url('images/date" + i + ".jpg')",
            "background-position": "center",
            "background-size": "cover"
        });
    }

    // 팝업창 이미지 슬라이드
    $('.dateImg').click(function(){
        
        $('aside').fadeIn();

        var startId = $(this).attr('id');
        console.log('n1: '+typeof(startId)+' / value: '+startId);      

        // 슬라이드될 페이지!        
        var slideName = startId.slice(0, startId.length-4 );
        console.log('slideName: '+slideName);

        // 이미지 슬라이드 시작번호 설정          
        var slide = startId.slice(7, 8);
        console.log('n2: '+slide);
        
        var page=2;
        imgStart(slideName, slide, page);             

    });

    /************************************************
                            베이비 
    *************************************************/    

    for (i = 1; i <= babyNum; i++) {
        $('#babyImg' + i).css({
            "background": "url('images/baby" + i + ".jpg')",
            "background-position": "center",
            "background-size": "cover"
        });
    }

    // 팝업창 이미지 슬라이드
    $('.babyImg').click(function(){
        
        $('aside').fadeIn();

        var startId = $(this).attr('id');
        console.log('n1: '+typeof(startId)+' / value: '+startId);      

        // 슬라이드될 페이지!        
        var slideName = startId.slice(0, startId.length-4 );
        console.log('slideName: '+slideName);

        // 이미지 슬라이드 시작번호 설정          
        var slide = startId.slice(7, 8);
        console.log('n2: '+slide);
        
        var page=3;
        imgStart(slideName, slide, page);             

    });

    /************************************************
                            가족 
    *************************************************/    
    
    for (i = 1; i <= familyNum; i++) {
        $('#familyImg' + i).css({
            "background": "url('images/family" + i + ".jpg')",
            "background-position": "center",
            "background-size": "cover"
        });
    }

    // 팝업창 이미지 슬라이드
    $('.familyImg').click(function(){
    
        $('aside').fadeIn();

        var startId = $(this).attr('id');
        console.log('n1: '+typeof(startId)+' / value: '+startId);      

        // 슬라이드될 페이지!        
        var slideName = startId.slice(0, startId.length-4 );
        console.log('slideName: '+slideName);

        // 이미지 슬라이드 시작번호 설정          
        var slide = startId.slice(9, 10);
        console.log('n2: '+slide);
        
        var page=4;
        imgStart(slideName, slide, page);             
        
    });

    /************************************************
                        여행 
    *************************************************/    

    for (i = 1; i <= travelNum; i++) {
        $('#travelImg' + i).css({
         "background": "url('images/travel" + i + ".jpg')",
         "background-position": "center",
         "background-size": "cover"
        });
    }

    // 팝업창 이미지 슬라이드
    $('.travelImg').click(function(){
        
        $('aside').fadeIn();

        var startId = $(this).attr('id');
        console.log('n1: '+typeof(startId)+' / value: '+startId);      

        // 슬라이드될 페이지!        
        var slideName = startId.slice(0, startId.length-4 );
        console.log('slideName: '+slideName);

        // 이미지 슬라이드 시작번호 설정          
        var slide = startId.slice(8, 10);
        console.log('n2: '+slide);
        
        var page=5;
        imgStart(slideName, slide, page);            

    });

    /************************************************
                        기타 
    *************************************************/    

    for (i = 1; i <= restsNum; i++) {
        $('#restsImg' + i).css({
         "background": "url('images/rests" + i + ".jpg')",
         "background-position": "center",
         "background-size": "cover"
        });
    }

    // 팝업창 이미지 슬라이드
    $('.restsImg').click(function(){
        
        $('aside').fadeIn();

        var startId = $(this).attr('id');
        console.log('n1: '+typeof(startId)+' / value: '+startId);      

        // 슬라이드될 페이지!        
        var slideName = startId.slice(0, startId.length-4 );
        console.log('slideName: '+slideName);

        // 이미지 슬라이드 시작번호 설정          
        var slide = startId.slice(8, 10);
        console.log('n2: '+slide);
        
        var page=6;
        imgStart(slideName, slide, page);            

    });

});
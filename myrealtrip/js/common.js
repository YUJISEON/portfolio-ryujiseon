
'use strict';

/*
            //검색창 인기 도시 슬라이드, 스와이프
            var numPopular = $('.popularList > div > ul > li').length;
            for (var i=0 ; i < numPopular ; i++) {
                $('.popularList > div > ul > li:eq(' + i + ') > a').css({'background-image' : 'url("img/search_img' + (i + 1) + '.jpg")'});
            }

            var widthV = $('.container:eq(0)').width();
            console.log('widthV : ' + widthV);
            $('.popularList > div').width(((widthV + 40) + 'px'));

            $('.popularList .next').on('click', function(e) {
                e.preventDefault();
                $('.popularList > div > ul').css({'transition':'.3s ease', 'left': ((-(1)) * 100) + '%'});
                $('.popularList > div > ul > li:eq(' + ((numPopular/2) - 1) + ') a').css({'margin-right': '40px'});
                $('.popularList .prev').css({'visibility': 'visible'});
                $('.popularList .next').css({'visibility': 'hidden'});
            });

            $('.popularList .prev').on('click', function(e) {
                e.preventDefault();
                $('.popularList > div > ul').css({'transition':'.3s ease', 'left': (((0)) * 100) + '%'});
                //$('.popularList > div > ul > li:eq(' + ((numPopular/2) - 1) + ') a').css({'margin-right': '20px'});
                $('.popularList .next').css({'visibility': 'visible'});
                $('.popularList .prev').css({'visibility': 'hidden'});
            });
            
            //배너 이미지 슬라이드, 스와이프, 타이머
            $('.bannerBox > .slide > li').each(function(e) {
                console.log(e);
                $(this).css({'left': (e * 100) + '%', 'display': 'block'});
                $('div.bannerBox ul.indicator').append('<li><a href="#">' + (e + 1) + '번 비주얼</a></li>\n');;
            });

            bannerslide();
            function bannerslide() {
                var numslide = $('.bannerBox > .slide > li').length;
                var slideNow = 0;
                var slidePrev = 0;
                var slideNext = 0;
                var slideFrist = 1;
                var timerId = '';
                var timterSpeed = 3000;
                var isTimerOn = true;
                var startX = 0;
                var offsetX = 0;
                var delX = 0;
                var isClickAllowed = true;
                var mouseStaut = false;

                showSlide(slideFrist);       
                enter();

                $('.bannerBox > .indicator li a').on('click', function() {
                    var index = $('.bannerBox > .indicator li').index($(this).parent());
                    showSlide(index + 1);
                });

                $('.bannerBox > .control a.prev').on('click', function() {
                    showSlide(slidePrev);
                });

                $('.bannerBox > .control a.next').on('click', function() {
                    showSlide(slideNext);
                });

                $('.bannerBox > .slide').on('mousedown', function(e) {
                    e.preventDefault();
                    $(this).css({'transition': 'none'}); 
                    clearTimeout(timerId);
                    startX = e.clientX;
                    offsetX = $(this).position().left;
                    console.log(startX + ' / ' + offsetX);
                    $(document).on('mousemove', function(e) {
                        delX = e.clientX - startX;     
                        if (Math.abs(delX) > 5) isClickAllowed = false;                 
                        if ((delX > 0 && slideNow === 1) || (delX < 0 && slideNow === numslide)) {
                            delX = delX / 5; 
                        }
                        $('.bannerBox > .slide').css({'transition' : 'none', 'left' : (offsetX + delX) + 'px'});
                    });
                    $(document).on('mouseup', function() {
                        $(document).off('mousemove mouseup');
                        if ( delX > 50 ) {
                            showSlide(slidePrev);
                        } else if ( delX  <-50 ) {
                            showSlide(slideNext);
                        } else {
                            showSlide(slideNow);
                        }   
                    });
                }).on('click', function(e) {        
                    if (isClickAllowed === false) {          
                        e.preventDefault();
                        isClickAllowed = true;        
                    }    
                });

                function showSlide(n) {
                    clearTimeout(timerId);      
                    if (slideNow === 0) {
                        $('.bannerBox > .slide').css({'transition':'none', 'left': ((-(n - 1)) * 100) + '%'});
                    } else {
                        $('.bannerBox > .slide').css({'transition':'.3s', 'left': ((-(n - 1)) * 100) + '%'});
                    }
                    $('div.bannerBox ul.indicator li').removeClass('on');
                    $('div.bannerBox ul.indicator li:eq(' + (n - 1) + ')').addClass('on');
                    slideNow = n;
                    slidePrev = (n - 1) < 1 ? numslide : (n - 1);
                    slideNext = (n + 1) > numslide ? 1 : (n + 1);
                    console.log(slidePrev + ' / ' + slideNow + ' / ' + slideNext);
                    if (isTimerOn === true) {
                        timerId = setTimeout(function(){ showSlide(slideNext); }, timterSpeed);
                    }                    

                    if (mouseStaut === true) {
                        if (slideNow === 1) {
                            $('.bannerBox p.control a').css({'visibility':'visible'});
                            $('.bannerBox p.control a.prev').css({'visibility':'hidden'});
                                console.log('마우스 엔터 첫 페이지');
                        } else if (slideNow === numslide) {
                                $('.bannerBox p.control a').css({'visibility':'visible'});
                                $('.bannerBox p.control a.next').css({'visibility':'hidden'});
                                console.log('마우스 엔터 마지막 페이지');
                        } else {                            
                                $('.bannerBox p.control a').css({'visibility':'visible'});
                                console.log('마우스 엔터 중간 페이지');
                        }
                    }
                }

                function enter() {
                    $('.bannerBox').on('mouseenter', function() { 
                            console.log('마우스');
                            mouseStaut = true;
                            if (slideNow === 1) {
                                $('.bannerBox p.control a').css({'visibility':'visible'});
                                $('.bannerBox p.control a.prev').css({'visibility':'hidden'});
                                console.log('마우스 엔터 첫 페이지');
                            } else if (slideNow === numslide) {
                                $('.bannerBox p.control a').css({'visibility':'visible'});
                                $('.bannerBox p.control a.next').css({'visibility':'hidden'});
                                console.log('마우스 엔터 마지막 페이지');
                            } else {                            
                                $('.bannerBox p.control a').css({'visibility':'visible'});
                                console.log('마우스 엔터 중간 페이지');
                            }
                    }).on('mouseleave', function() {
                            mouseStaut = false;
                            $('.bannerBox p.control a').css({'visibility':'hidden'});
                    })
                }

                
            }
            
            // 상품 판매 리스트 
            var slideStandard = 4;
            var slidePage = 0;
            var slideBoxW = $('.container').width();
            var slideBoxH = $('.product_item').height();

            $(' .product_item .slideBox').width(((slideBoxW + 40) + 'px'));
            $(' .product_item .slideBox').height(((slideBoxH + 20) + 'px'));
            
            $('.productContainer .productBox').each(function() {
                var numImg = ($(this).find('.productImg').length);
                var numTarget = $(this).attr('class');
                var arraryClass = numTarget.split(' ');
                var leftValues = $('.product_item .slideBox > ul > li > a').outerWidth(true);
                var numProductContainer = $('.product_item .slideBox > ul').length;
                console.log('leftValues : ' + leftValues + ' / numProductContainer : ' + numProductContainer);
                
                // 상품 판매 리스트 위치 셋팅
                for (var x=0;x<numProductContainer;x++) {
                    for (var i=0;i<numImg;i++) {
                        $('.product_item .slideBox > ul:eq(' + x + ') > li:eq(' + (i) +')').css({'left': (i * leftValues) + 'px'});
                    }
                }

                // 상품 판매 리스트 이미지 셋팅
                for (var i=0;i<numImg;i++) {
                    $(this).find('.productImg:eq(' + i + ')').find('img').attr('src', 'img/' + arraryClass[0] + '_img' + (i + 1) + '.jpg')
                }

                slidePage = Math.round(numImg / slideStandard);
                console.log('slidePage : ' + slidePage);
                if (slidePage < 2 ) {
                    $(this).find('.product_item .itemcontrol').css({'transition':'none', 'visibility':'hidden'});
                } else {
                    $(this).find('.product_item p.next').css({'transition':'none', 'visibility':'visible'});
                } 
            });

            // 상품 판매 리스트 좌/우 버튼
            $('.product_item p.next').on('click', function(e) {
                e.preventDefault();
                var parentName = $(this).parent().parent().attr('class');
                var arraryClass = parentName.split(' ');
                var $this = arraryClass[0] 
                $('.'+$this).find('.product_item > .slideBox ul').css({'transition':'.3s', 'left': ((-(1)) * 100) + '%'});
                $('.'+$this).find('.product_item > .slideBox > ul > li:eq(' + (slideStandard - 1) + ') a').css({'margin-right': '40px'});
                $('.'+$this).find('.product_item > p.prev').css({'visibility': 'visible'});
                $('.'+$this).find('.product_item > p.next').css({'visibility': 'hidden'});
            });

            $('.product_item p.prev').on('click', function(e) {
                e.preventDefault();
                var parentName = $(this).parent().parent().attr('class');
                var arraryClass = parentName.split(' ');
                var $this = arraryClass[0] 
                $('.'+$this).find('.product_item .slideBox > ul').css({'transition':'.3s', 'left': (((0)) * 100) + '%'});
                //$('.popularList > div > ul > li:eq(' + ((numPopular/2) - 1) + ') a').css({'margin-right': '20px'});
                $('.'+$this).find('.product_item p.next').css({'visibility': 'visible'});
                $('.'+$this).find('.product_item p.prev').css({'visibility': 'hidden'});
            });            
*/
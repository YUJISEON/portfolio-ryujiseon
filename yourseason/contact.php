<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>yourseason</title>
    <link href="https://fonts.googleapis.com/css?family=Playfair+Display|Amiri|Open+Sans|Nanum+Gothic|Nanum+Myeongjo" rel="stylesheet">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/contact_sec.css">
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/common.js"></script>
    <script>
        $(function(){


            $('.priceMenuBtn').click(function(){   // 메뉴 버튼 클릭 시 상세 내용 팝업창 오픈

                $('.pricePopup').fadeIn();
                $('.MenuInfo').hide();

                var popupTit=$(this).attr('id');
                console.log(popupTit);
                $('.'+popupTit+'Info').show();

            });

            $('.InfoClose').click(function(){      // 팝업창 클로즈 버튼 클릭 시, 닫기
                $('.pricePopup').fadeOut();
            });


        });
    </script>
    <style>
        @media screen and (max-width: 480px) {

            .priceMenuTab {
                display: block;
                width: 100%;
                /* border: 1px solid red; */
            }

            .priceMenuBtn {
                width: 100%;
                height: 240px;
                margin: 10px 0 20px 0;
            }

            .small {
                width: 90%;
                height: 200px;
                top: calc(50% - 100px); 
                left: 50%;
                transform: translateX(-50%);
            }

            /*************************************/

            .MenuInfo {
                width: 90%;
                height: 100vh;
                left: 50%;
                transform: translateX(-50%);
            }

            .InfoClose {
                top: -25px;
            }

            /*************************************/

            #contactWrap {
                /* border: 1px solid blue; */
                margin-top: 50px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            #contactInfo {
                order: 1;
                width: 100%;
                height: 120px;
                margin: 0;
            }

            #infoWrap {
                display: flex;
            }

            #datekind {
                display: block;
            }
            
            .contact_form .dateForm,
            .contact_form .kindForm {
                width: 100%;        
            }

            #kakao,
            #insragrem {     
                width: 50%;
                height: 80px;
                /* border: 1px solid red; */
            }

            #kakao {
                border-right: 1px solid #A0A09F;
            }

            .contact_form {
                order: 2;
                width: 100%;
                padding-right: 0;
                margin-top: 20px;
            }

            #submit,
            #submitKr {
                right: 0px;
            }
        
        }
    </style>
</head>
<body>
    <header>
        <div id="headerWrap" class="bodyWrap">
        <div id="logo">
            <a href="index.html">
                <p class="BigLogo">YourSeason</p>
                <p class="smallLogo">P H O T O G R P H Y</p>
            </a>
        </div>
        <nav id="menu" class="font_0">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li class="topMenu"><a href="porifolio.html">Portfolio</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul> 
        </nav>
        <nav id="menu_Mb" class="font_0">
            <ul>
                <li><a href="#"><i class="fa fa-bars" aria-hidden="true"></i></a>
                    <ul class="subMenu_Mb font_1">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="porifolio.html">Portfolio</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        </div>
    </header>
    <section class="sectionPage">
        <div id="sectionWrap" class="bodyWrap">
            <!-- <div id="pageInfo" class="font_5">
                <div id="pageSrc">
                    <i class="fa fa-home" aria-hidden="true"></i><span> > CONTACT</span>
                </div>
                <div id="pageLanguage">
                    <span class="lanClass lanEn">EN</span><span> / </span><span class="lanClass lanKr">KR</span>
                </div>
            </div> -->
            <div id="priceMenu">
                <div class="priceMenuTab">
                    <div id="event" class="priceMenuBtn">
                        <div class="small">
                            <div class="smallTxt">
                                <p>Event</p>
                                <p>Price</p>
                            </div>
                        </div>
                    </div>
                    <div id="reservation" class="priceMenuBtn">
                        <div class="small">
                            <div class="smallTxt">
                                <p>Reservations</p>
                                <p>Method</p>
                            </div>
                        </div>
                    </div>
                    <div id="basic" class="priceMenuBtn">
                        <div class="small">
                            <div class="smallTxt">
                                <p>--</p>
                                <p>--</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pricePopup">
                    <div class="eventInfo MenuInfo">
                        <div class="InfoClose">&Cross;</div>
                        <div class="popupContent">
                            <div class="popupTit">Event Price</div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum beatae vero dicta, corrupti esse!
                                Temporibus, blanditiis magnam ratione quae quod harum officiis ad, nam incidunt quos beatae repellendus ea.
                            </div>
                        </div>
                    </div>
                    <div class="reservationInfo MenuInfo">
                        <div class="InfoClose">&Cross;</div>
                        <div class="popupContent">
                            <div class="popupTit">Reservations Method</div>
                            <div class="note1 note">
                                <div class="note1Tit noteTit font_3">
                                    <p>1. Confir mation of reservation</p>
                                </div>
                                <div class="note1Txt noteTxt font_4">
                                    <p>
                                        Please contact [CONTANT] page, we will guide you to shoot.
                                        If you do not have enough information, please contact us within 48 hours. Please check the confirmation
                                        e-mail and deposit.
                                        The deposit is 20% of the total amount, and the balance is paid in the previous year.
                                    </p>
                                </div>
                            </div>
                            <div class="note2 note">
                                <div class="note2Tit noteTit font_3">
                                    <p>2. Change / Cancellation / Refund</p>
                                </div>
                                <div class="note2Txt noteTxt font_4">
                                    <p>
                                        Changing the inspection date is not possible beyond the above conditions. Changing the shooting date does
                                        not satisfy the above conditions.
                                        Requests to change other shooting dates will be charged at an additional cost at least three days in
                                        advance.
                                        Also, when you change the shooting date, the date can not be adjusted.
                                    </p>
                                    <p><strong>* cancel *</strong></p>
                                    <p>
                                        If you cancel the filming, you will receive a full refund within 7 days of the contract. Cancellations due
                                        to personal reasons will be subject to penalty.
                                    </p>
                                    <p>- If canceled 14 days before shooting, 50%</p>
                                    <p>- If canceled 7 days before shooting, 80%</p>
                                </div>
                            </div>
                            <div class="note3 note">
                                <div class="note3Tit noteTit font_3">
                                    <p>3. Other Checks</p>
                                </div>
                                <div class="note3Txt noteTxt font_4">
                                    <p>- The original file was sent within 2 weeks after the shooting.</p>
                                    <p>- Movement between places appears at the time of picture taking.</p>
                                    <p>- In case of calibration, face correction, calibration and synthesis are not performed.</p>
                                    <p>- In the humorous season, take natural pictures and shoot with flash and tripod.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="basicInfo MenuInfo">
                        <div class="InfoClose">&Cross;</div>
                        <div class="popupContent">
                            <div class="popupTit">-</div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolorum beatae vero dicta, corrupti esse! Temporibus, blanditiis magnam ratione quae quod harum officiis ad, nam incidunt quos beatae repellendus ea.
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
            <div id="contactTitle">
                    <p id="conTit" class="conTitClass font_2-2">Contact Me</p>
                    <div id="conTxt" class="conTitClass font_4">
                        <p id="txtEn">
                            Use this form to send me an email with your basic details to start the ball rolling to secure me to photograph your Event!
                        </p>
                    </div>
            </div>
            <div id="contactWrap">
                <div id="contact_form" class="contact_form font_5">
                    <!-- 폼태그 -->        
                    <div class="txtEn">      
                        <form action="contact_meEn.php" method="post">
                            <label for="name">* Name<small></small></label>
                            <input type="text" id="name" name="name" placeholder="First Name/Last Name" required>
                            <label for="email">* Email <small></small></label>
                            <input type="email" id="email" name="email" placeholder="--------@--------" required>
                            <label for="phone">* Phone Number<small></small></label>
                            <input type="tel" id="phone" name="phone" placeholder="(00) 000-0000-0000" required>
                            <div id="datekind">
                                <div class="dateForm">
                                    <label for="date">* Date of the event<small></small></label>
                                    <input type="text" id="date" name="date" placeholder="DD/MM/YYYY" required>
                                </div>
                                <div class="kindForm">
                                    <label for="kind">* Kind of Photo shoot<small></small></label>
                                    <input type="text" id="kind" name="kind" placeholder="Wedding/Date/Baby/Fmaily...." required>
                                </div>
                            </div>
                            <label for="message">* Message<small></small></label>
                            <textarea id="message" name="message" placeholder="Please enter other details." required></textarea>
                            <input type="submit" value="Send Message" id="submit">
                        </form>
                    </div>
                </div>
                <div id="contactInfo">
                    <div id="infoWrap">
                        <div id="kakao">
                            <p class="font_3">Kakao ID</p>
                            <p class="font_5">imryuhyejin</p>
                        </div>
                        <div id="insragrem">
                            <p class="font_3">Insragrem</p>
                            <p class="font_5"><a href="https://www.instagram.com/studio.yourseason/">studio.yourseason</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div id="footerWrap" class="bodyWrap font_1">
            <div id="copylight">COPYRIGHT© 2018 by YOURSEASON. ALL RIGHTS RESERVED.</div>    
            <div id="sns">
                <ul>
                    <li><a href="https://happytime079.blog.me" target="_new"><img src="images/sns_blogger01.png" alt=""></a></li>
                    <li><a href="https://www.instagram.com/studio.yourseason/" target="_new"><img src="images/sns_instagram01.png" alt=""></a></li>
                    <li><a href="https://www.youtube.com/channel/UCyrQQndaWz40nOWzNtGu8jQ" target="_new"><img src="images/sns_youtube01.png" alt=""></a></li>
                </ul>
            </div>    
        </div>
    </footer>
    <div id="topBtn"><a href="#"><i class="fa fa-angle-double-up" aria-hidden="true"></i></a></div>
</body>
</html>
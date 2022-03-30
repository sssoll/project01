$(window).load(function(){
    clickEvent();
    subMenu();
    search();
    scrollHeader();
    mobile();
    maxboneAni();
    newItem();
    footerAni();
    footerInfo();
    topBtn();
    scrollLoad();
})

function clickEvent(){

    var $img = $('<div id="click-img"> </div>');

    $('body').on('click',function(e){

        //click하는 위치를 알아야 그 위치에서 이미지를 생성해 줄 수 있기 때문에
        //매개변수를 활용
        var $pX = e.pageX;
        var $pY = e.pageY;
        var $randomNum = Math.floor(Math.random()*8)+1;
        //내가 아까 만들었던 번호의 순서 9개

        // console.log($pX)
        // console.log($pY)
        // console.log($randomNum)

        $img.remove();
        $img.removeClass();

        $img.appendTo('body');
        $img.addClass('bg0'+$randomNum);
        $img.css({'top':$pY,'left':$pX})
    })
}

function subMenu(){

    $('.submenu-list').hide();

    var $ball = $('div.menu-active-ball');

    $('.mainmenu-list > li').on('mouseenter',function(){
        $ball.addClass('on');
        $ball.stop().animate({'left':($(this).position().left + $(this).innerWidth()/2)-$ball.innerWidth()/2},200)

        // console.log($(this).position().left)
        // console.log($(this).innerWidth())

        $('.submenu-list').hide();
        $(this).children('.submenu-list').stop().fadeIn(200);
    })

    $('.mainmenu-list').on('mouseleave',function(){
        $ball.removeClass('on');

        $('.submenu-list').hide();
    })
    
}

function search(){
    $('.search-wrapper').hide(0);

    $('.search-btn').on('click',function(){

        $('.search-wrapper').show(0,function(){
            $(this).addClass('on');
            $(this).on('scroll touchmove mousewheel DOMMouseScroll',function(e){
                e.preventDefault();
                e.stopPropagtion();// 부모 요소로 이벤트가 올라가는 것을 막아줌

                //스크롤 막아주는 것
                //touchmove 손가락 이용해서 올리기
                /*mousewheel 이벤트 주의할 점
                - 크롬 마우스 휠 이벤트 = mousewheel
                - 파폭 마우스 휠 이벤트 = DOMMouseScroll
                */
               return false
            })
        })

        $('.gnb-wrapper').hide(0)
        return false;
    })

    $('.close-btn').on('click',function(){
        $('.search-wrapper').fadeOut(300)
        $('.search-wrapper').removeClass('on')
        $('.gnb-wrapper').show(0)
        $('.search-wrapper').off('scroll touchmove mousewheel DOMMouseScroll')
    })
}

function scrollHeader(){
    $(window).on('scroll mousewheel DOMMouseScroll',function(e){
        var $scrollH = $(window).scrollTop();
        console.log(e.originalEvent.wheelDelta)
        //false 음수 => 스크롤 내리는 중
        //e.originalEvent.wheelDelta = 음수 : 스크롤 내리는 중
        //e.originalEvent.wheelDelta = 양수 : 스크롤 올리는 중

        if($scrollH >= 100){
            $('.header-wrapper').addClass('on')
        }else{
            $('.header-wrapper').removeClass('on')
        }

        if($scrollH >=1000 && e.originalEvent.wheelDelta > 0){
            $('.header-wrapper').css({'top':0})
        }else if($scrollH >1000 && e.originalEvent.wheelDelta<0){
            $('.header-wrapper').css({'top':'-100%'})
        }
    })
}

function mobile(){
    $('nav.mobile-gnb').hide(0);

    $('.mobile-menu-btn').on('click',function(){
        $('nav.mobile-gnb').fadeIn(200)
        $('nav.mobile-gnb').addClass('on');       
    })

    $('.mobile-close-btn').on('click',function(){
        $('nav.mobile-gnb').hide(0,function(){
            $('nav.mobile-gnb').removeClass('on');    
        });
    })
}

function maxboneAni(){
    //addClass반복
    //몇 초있다가 없어짐

    setInterval(function(){//addClass 반복(animation 반복)
        $('div.maxbone-ani span').addClass('on');

        setTimeout(function(){
            $('div.maxbone-ani span').removeClass('on')
        },1500)//1.5초 있다가 removeClass 적용
    },2000)
}

// function newItem(){
//     $('.new-item-slider ul').slick({
//         slidesToShow :3,
//         slidesToScroll :1,
//         //centerMode : true,
//         //centerPadding : '18rem',//슬라이드 전체 좌우 여백 
//         infinite : false,//마지막 사진이 1번 사진 앞으로 못 오게 무한 루프 막음
//         prevArrow : $('.new-prev-arrow'),
//         nextArrow : $('.new-next-arrow'),
//     });

//     //1번그림이 가운데로 옮 - >한 칸 땡겨주기
//     //var $itemW= $('.slick-slide').outerWidth(true)//(true) : margin값까지 받아오기
//     //$('.slick-track').css({'margin-left':-$itemW})//아이템 한 칸 만큼 밀어주기

//     /*
//     영역 값을 가져오는 메소드
//     width(), innerWidth(),  outerWidth(), outerWidth(true)
//     width() : 순수한 영역값(여백을 제외한 순수한 width값)
//     innerWidth() : width + padding
//     outerWidth() : width + padding + border
//     outerWidth(true) : width + padding + border + margin
//     */
//     pageNavigation();

//     function pageNavigation(){
//         var totalPage = $('.new-item-slider ul li').size()-2;//6
//         //console.log(totalPage)

//         var $currentPage = parseInt($('.slick-current').data('slick-index')+1)//0번부터니까 1을 더해주기
//         //센터모드에서.slick-center는 맨 앞에 보여지는 첫번째 이미지에만 적용
//         //.data('slick-index') :순번 받아오기
//         // console.log($currentPage)

//         //기본값
//         $('.current-page').html('0'+$currentPage);
//         $('.total-page').html('0'+totalPage );

//         $('.slick-arrow').on('click',function(){
//             $currentPage= parseInt($('.slick-current').data('slick-index')+1)
//             //변하는 값 ->계속 새로 받아오도록 한 번 더 넣기
//             $('.current-page').html('0'+$currentPage);//클릭할 때마다 바뀌게

//             if($currentPage >= totalPage){
//                 //페이지 넘어가지 않게
//                 $('.new-next-arrow').addClass('slick-disabled')
//             }
//         })
        
//         $('.total-page').html('0'+totalPage );
//     };
// }
function newItem(){
    var $newSlider =$('.new-item-slider ul');
    var $newSliderOp ={
        slidesToShow :3,
        slidesToScroll :1,
        infinite : false,
        prevArrow : $('.new-prev-arrow'),
        nextArrow : $('.new-next-arrow'),
    }//$newSliderOp

    newSlideAct();
    $(window).on('load resize',newSlideAct);
    //load을 없애면 사이즈가 갑자기 변했을 때 읽지 못함

    function newSlideAct(){
        if($(window).innerWidth() <540){
            $newSlider.slick('unslick') //slick 해제하는 명령어 : unslick
        }else{
            $newSlider.not('.slick-initialized').slick($newSliderOp)
            //.slick-initialized를 빼고 나머지 slick을 다시 실행
            //not 특정 선택자 제외, 중첩을 방지
            pageNavigation();
        }
    }
    
    function pageNavigation(){
        var totalPage = $('.new-item-slider ul li').size()-2;//6

        var $currentPage = parseInt($('.slick-current').data('slick-index')+1)

        //기본값
        $('.current-page').html('0'+$currentPage);
        $('.total-page').html('0'+totalPage );

        $('.slick-arrow').on('click',function(){
            $currentPage= parseInt($('.slick-current').data('slick-index')+1)

            $('.current-page').html('0'+$currentPage);

            if($currentPage >= totalPage){
                $('.new-next-arrow').addClass('slick-disabled')
            }
        })
        
        $('.total-page').html('0'+totalPage );
    };

}

function footerAni(){
    var $footeritem = $('.footer-layer');
    
    setInterval(function(){
        $footeritem.addClass('on');
        setTimeout(function(){
            $footeritem.removeClass('on')
        },400)
    },800)
}

function footerInfo(){
    $('.footer-text').slideUp();

    $('.footer-info-btn').on('click',function(){
        $('.footer-text').stop().slideToggle(300)
        $(this).children().toggleClass('on')
    })
}

function topBtn(){
    $('.top-btn').on('mouseenter',function(){
        var $topItem = Math.round(Math.random()*3)+1
        //console.log($topItem)

        $('.top-btn-layer').children().removeClass();
        $('.top-btn-layer').children().addClass('top-icon0'+$topItem)
    })/*현재 위치값이 계속 동일해야함 */
    $('.top-btn').on('mouseleave',function(){
        $('.top-btn-layer').children().removeClass();
    })


    $('.top-btn').on('click',function(){
        $('body,html').animate({'scrollTop':0},500)
        $('.header-wrapper').css({'top':0})
        return false;
    })

    $(window).on('scroll',function(){
        var $scrollT = $(window).scrollTop();
        var $domH = $(document).innerHeight() - ($(window).innerHeight()+$('.footer-wrapper').innerHeight())
        // console.log($domH)
        // console.log($scrollT)
        //전체 body의 높이값을 알아내는 공식
        //document의 높이값-window의 높이값

        //스크롤 올릴때 footer 높이값만큼 제외해야 푸터 근처에서 class적용할 수 있음

        if($scrollT < $domH){
            $('.top-btn').addClass('on')
        }else{
            $('.top-btn').removeClass('on')
        }
        
    })
}

function scrollLoad(){
    // $('.load-ani').each(function(index,item){
    //     console.log($(item).offset().top)

    //     $(window).on('scroll',function(){
    //         var $items = $(item).offset().top - $(window).innerHeight();
    //         var $scrollT =$(window).scrollTop();

    //         if($scrollT > $items){
    //             $(item).addClass('on')
    //         }//다시 올라가면 addclass없음
    //     })
    // })


    $(window).on('scroll',function(){
        $('.load-ani').each(function(index,item){
            var $items = $(item).offset().top - $(window).innerHeight();
            var $scrollT =$(window).scrollTop();

            if($scrollT > $items){
                $(item).addClass('on')
            }
        })//each에서 매개변수 index는 순번값을 받아와야 해서 항상 있어야함

        $('.cotie-gallery li').each(function(index,item){
            var $items = $(item).offset().top - $(window).innerHeight();
            var $scrollT =$(window).scrollTop();

            if($scrollT>$items){
                $(item).addClass('on')
            }
        })
    })

}
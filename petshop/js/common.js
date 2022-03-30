
$(window).load(function(){

    clickEvent();
    subMenu();
    search();
    scrollHeader();
    mobile();

})

function clickEvent(){

    var $img = $('<div id="click-img"> </div>');
    // 새로운 태그 생성

    $('body').on('click', function(e){

        // click하는 위치를 알아야 그 위치에서 이미지를 생성해 줄 수 있기 때문에 매개변수 활용

        var $pX = e.pageX;
        var $pY = e.pageY;
        var $randomNum = Math.floor(Math.random()*8)+1;
        // 내가 아까 만들었던 번호의 순서
        // floor로 소수점 제거

        // console.log($pX)
        // console.log($pY)
        // console.log($randomNum)
        // 위치 확인 위해서 body에 임의로 높이값(5000px) 설정

        $img.remove();
        $img.removeClass();
        $img.appendTo('body');

        $img.addClass('bg0'+$randomNum);
        $img.css({
            'top':$pY,
            'left':$pX
        })
        
    })

}

function subMenu(){

    $('.submenu-list').hide();

    var $ball = $('div.menu-active-ball');

    $('.mainmenu-list > li').on('mouseenter', function(){

        $ball.addClass('on');
        $ball.stop().animate({'left':($(this).position().left + $(this).innerWidth()/2) - $ball.innerWidth()/2}, 200)
        // this = 내가 찾은 li
        // $(this).innerWidth()/2) = 원 가운데 위치
        // $ball.innerWidth()/2 = 원 사이즈로 조금 넘는 것 잡아 준다.
        
        $('.submenu-list').hide();
        $(this).children('.submenu-list').stop().fadeIn(0);

    })

    $('.mainmenu-list').on('mouseleave', function(){

        $ball.removeClass('on');

        $('.submenu-list').hide();

    })

}

function search(){

    $('.search-wrapper').hide(0)
    
    $('.search-btn').on('click', function(){

        $('.search-wrapper').show(0, function(){
            $(this).addClass('on');
            $(this).on('scroll touchmove mousewheel DOMMouseScroll', function(e){
                e.preventDefault();
                e.stopPropagtion(); // 부모 요소로 이벤트가 올라가는 것을 방지

                // 스크롤 막아주는 것
                // touchmove = 손가락 이용해서 올리기
                // mousewheel 이벤트 주의할 점
                // 크롬 마우스휠 이벤트 = mousewheel
                // 파폭 마우스휠 이벤트 = DOMMouseScroll
    
                return false
            })
        })

        $('.gnb-wrapper').hide(0)
        return false

    })

    $('.close-btn').on('click', function(){

        $('.search-wrapper').fadeOut(300);
        $('.search-wrapper').removeClass('on');
        $('.gnb-wrapper').show(0);
        $('.search-wrapper').off('scroll touchmove mousewheel DOMMouseScroll');

    })



}

function scrollHeader(){

    $(window).on('scroll mousewheel DOMMouseScroll', function(e){

        var $scrollH = $(window).scrollTop();
        console.log(e.originalEvent.wheelDelta > 0)
        // false = 음수 (스크롤 내리는 중)
        // e.originalEvent.wheelDelta = 음수 > 스크롤 내리는 중
        // e.originalEvent.wheelDelta = 양수 > 스크롤 올리는 중

        if($scrollH >= 100){

            $('.header-wrapper').addClass('on')

        }else{
            $('.header-wrapper').removeClass('on')
        }

        if($scrollH >= 1000 && e.originalEvent.wheelDelta > 0 ){
            $('.header-wrapper').css({'top':'0'})
            // 스크롤 올릴 때 헤더 보이기
        }else if($scrollH > 1000 && e.originalEvent.wheelDelta < 0){
            $('.header-wrapper').css({'top':'-100%'})
            // 스크롤 내릴 때 헤더 숨기기
        }

    })

}

function mobile(){

    $('nav.mobile-gnb').hide(0);

    $('.mobile-menu-btn').on('click', function(){
        $('nav.mobile-gnb').fadeIn(200);
        $('nav.mobile-gnb').addClass('on');
    })

    $('.mobile-close-btn').on('click', function(){

        $('nav.mobile-gnb').hide(0, function(){
            $('nav.mobile-gnb').removeClass('on')
        });

    })

}

































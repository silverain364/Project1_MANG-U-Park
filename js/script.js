$(function(){

  const subNav = $('.sub-nav-wrap')
  const mainNav = $('.main-nav li a')
  const header = $('header')
  const schOpenBtn = $('.sch-open-btn')
  const schCloseBtn = $('.sch-c-btn')
  const searchWrap = $('.search-wrap')
  const subList = $('.sub-list')

  const body = $('body')
  const btnMmenu = $('.btn-m-menu')
  const subNavBtn = $('.sub-nav>li>span.blind')


  // 상태 변수
  let schOpen = false;
  let dskSubNavState = false;

  
  function dskReset(){
    subNav.removeAttr('style')
    header.removeClass('schOpen')
  }
  
  function mobReset(){
    subList.removeAttr('style')
    subNavBtn.parent('li').removeClass('on')
    body.removeClass('mob-mOpen')
  }

  function openSearch (){
    if(!schOpen){
      if(dskSubNavState){
        subNav.stop().slideUp();
        dskSubNavState = false;
      }

      if(body.hasClass('mob-mOpen')){
        body.removeClass('mob-mOpen')
      }

      header.addClass('schOpen')
      searchWrap.fadeIn()
      schOpen = true
    }
  }

  function closeSearch(){
    if(schOpen){
      header.removeClass('schOpen')
      searchWrap.fadeOut()
      schOpen = false
    }
  }

  function dskNavOpen() {
    if (schOpen) {
      closeSearch();
    }

    if (!dskSubNavState) {
      subNav.stop().slideDown();
      dskSubNavState = true;
    }
  }

  function dskNavClose(){
    if(window.innerWidth >= 1024){
      setTimeout(function(){
        subNav.stop().slideUp();
        dskSubNavState = false
      }, 500)
    }
  }

  subNavBtn.on('click', function(){

    const $parentLi = $(this).parent('li')
    const $siblingSub = $(this).siblings('.sub-list')

    if ($parentLi.hasClass('on')) {
      $parentLi.removeClass('on')
      $siblingSub.slideUp()

    } else {
      $parentLi
        .addClass('on')
        .siblings()
        .removeClass('on')
        .children('.sub-list')
        .slideUp()

        $siblingSub.slideDown()
    }

  })

    btnMmenu.on('click', (e) => {
      e.preventDefault()
      if(schOpen){
        closeSearch()
      }
      body.toggleClass('mob-mOpen')
    })
  
  
    $(window).on('resize load', () => {
      let winWidth = window.innerWidth
  
      if (winWidth < 1024) {
        dskReset()
        schOpen=false
      }
      
      if (winWidth >= 1024) {
        mobReset()
        schOpen=false
      }
  
      console.log(winWidth)
    })
  
    schOpenBtn.on('click', function (e) {
      e.preventDefault()
      openSearch()
      
    })
    schCloseBtn.on('click', function (e) {
      closeSearch()
    })
  
    mainNav.on('mouseenter', dskNavOpen)
    subNav.on('mouseleave', dskNavClose)

  })
  
  const fixedTopBtn = document.querySelector('.fixedTop')
 
 
 
  window.addEventListener('scroll', () => {
    let scroll = window.scrollY
  
    if (scroll > 100) {
      fixedTopBtn.classList.add('On')
    } else {
  
      fixedTopBtn.classList.remove('On')
    }
  })
  
  fixedTopBtn.addEventListener('click', (e) => {
    e.preventDefault()
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
 
 // depth5 tab
 const dep5Tabs = document.querySelectorAll('.notice-media-wrap h2 span')
 const dep5Contents = document.querySelectorAll('.content-wrap>ul')
 
 
 
 
 
 dep5Tabs.forEach((tab, i) => {
 
   tab.addEventListener('click', () => {
     console.log(i);
     dep5Tabs.forEach((tab) => tab.classList.remove('on'))
     dep5Contents.forEach((content) => content.classList.remove('active'))
 
     tab.classList.add('on')
     dep5Contents[i].classList.add('active')
   })
 })
 
 
 
 
 
 const heroSlider = new Swiper(".hero-slider", {
   effect: 'fade',
   pagination: {
     el: ".hero-slider .swiper-pagination",
     clickable: true, // 페이지네이션 클릭 가능하도록 설정
 
   },
   loop: true
 });
 
 
 const newsSlider = new Swiper(".news-slider", {
   direction: "vertical",
   navigation: {
     nextEl: ".news-slider .swiper-button-next",
     prevEl: ".news-slider .swiper-button-prev",
     clickable: true, // 페이지네이션 클릭 가능하도록 설정
 
   },
 });
 
 
 // in slider
 const programSlider = new Swiper(".program-slider", {
   autoplay: true,
   pagination: {
     el: ".program-slider .swiper-pagination",
   },
 });
 const promotionSlider = new Swiper(".promotion-slider", {
   autoplay: true,
   pagination: {
     el: ".promotion-slider .swiper-pagination",
   },
 });
 const clipSlider = new Swiper(".clip-slider", {
   autoplay: true,
   pagination: {
     el: ".clip-slider .swiper-pagination",
   },
 });
 const gallerySlider = new Swiper(".gallery-slider", {
   autoplay: true,
   pagination: {
     el: ".gallery-slider .swiper-pagination",
   },
 });
 const serviceSlider = new Swiper(".service-slider", {
   autoplay: true,
   pagination: {
     el: ".service-slider .swiper-pagination",
   },
 });
 const siteSlider = new Swiper('.site', {
   breakpoints: {
     0: {
       slidesPerView: 1,
       navigation: {
         nextEl: 'footer .dep1 .btn-wrap .swiper-button-next',
         prevEl: 'footer .dep1 .btn-wrap .swiper-button-prev',
         clickable: true
       }
 
     },
     650: {
       slidesPerView: 4
     }
   }
  })
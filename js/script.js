window.onload = function () {
  AOS.init();

}
$(document).ready(function () {
  let goTop = $('.gotop')
  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    // console.log(temp)
    if (temp < 400) {
      goTop.stop().hide(200)
      goTop.removeAttr('style')
    } else {
      goTop.stop().show(200)
    }
    goTop.click(function () {
      $('html').stop().animate({
        scrollTop: 0
      }, 1000);
    })
  })
  // $(window).resize(function(){
  //   let wW = $(window).width()
  //   if(wW < 950){
  //     goTop.removeAttr('style')
  //   }
  // })

  // 버튼 이동
  let gnbLiA = $('.gnb > li > a')
  gnbLiA.click(function (e) {
    e.preventDefault()
  })
  $('.go-home').click(function () {
    let offset = $('#home').offset();
    $("html, body").animate({
      scrollTop: offset.top
    }, 800);
  })
  $('.go-profile').click(function () {
    let offset = $('#profile').offset();
    $("html, body").animate({
      scrollTop: offset.top
    }, 800);
  })
  $('.go-protfolio').click(function () {
    let offset = $('#portfolio').offset();
    $("html, body").animate({
      scrollTop: offset.top
    }, 800);
  })
  $('.go-life').click(function () {
    let offset = $('#life').offset();
    $("html, body").animate({
      scrollTop: offset.top
    }, 800);
  })
  $('.go-contact').click(function () {
    let offset = $('#contact').offset();
    $("html, body").animate({
      scrollTop: offset.top
    }, 800);
  })
  let mbMenu = $('.mb-menu')
  mbMenu.click(function(){
    mbMenu.toggleClass('mb-menu-click')
    $('.mb-menu-list').toggleClass('mb-menu-list-click')
  })
  // 스크롤 적용
  setTimeout(function () {
    $(".header").niceScroll({
      cursorwidth: "8px",
      cursoropacitymax: 0.7,
    });
  }, 0);

  $(window).resize(function () {
    $(".header").niceScroll({
      cursorwidth: "8px",
      cursoropacitymax: 0.7,
    });
  });
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  let all = $('.all')
  let personal = $('.personal')
  let study = $('.study')
  let vue = $('.vue')

  all.click(function () {
    $('.protfolio-clone').stop().animate({
      opacity: "1"
    }, 600).show(700);
  })
  personal.click(function () {
    $('.p-personal').stop().animate({
      opacity: "1"
    }, 600).show(700);
    $('.p-study').stop().animate({
      opacity: "0"
    }, 600).hide(700);
    $('.p-vue').stop().animate({
      opacity: "0"
    }, 600).hide(700);
  })
  study.click(function () {
    $('.p-study').stop().animate({
      opacity: "1"
    }, 600).show(700);
    $('.p-personal').stop().animate({
      opacity: "0"
    }, 600).hide(700);
    $('.p-vue').stop().animate({
      opacity: "0"
    }, 600).hide(700);
  })
  vue.click(function () {
    $('.p-vue').stop().animate({
      opacity: "1"
    }, 600).show(700);
    $('.p-study').stop().animate({
      opacity: "0"
    }, 600).hide(700);
    $('.p-personal').stop().animate({
      opacity: "0"
    }, 600).hide(700);
  })
})
window.onload = function () {
  AOS.init();

}
$(document).ready(function (){
  let goTop = $('.gotop')
  $(window).scroll(function(){
    let temp = $(window).scrollTop();
    if(temp < 400){
      goTop.stop().fadeOut(200)
    }else{
      goTop.stop().fadeIn(200)
    }
    goTop.click(function(){
      $('html').stop().animate({
        scrollTop: 0
      }, 1000);
    })
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
    time: 1000
});
  let all = $('.all')
  let personal = $('.personal')
  let study = $('.study')
  let vue = $('.vue')

  all.click(function(){
    $('.protfoio-clone').stop().fadeIn(400);
  })
  personal.click(function(){
    $('.p-personal').stop().fadeIn(400);
    $('.p-study').stop().fadeOut(400);
    $('.p-vue').stop().fadeOut(400);
  })
  study.click(function(){
    $('.p-study').stop().fadeIn(400);
    $('.p-personal').stop().fadeOut(400);
    $('.p-vue').stop().fadeOut(400);
  })
  vue.click(function(){
    $('.p-vue').stop().fadeIn(400);
    $('.p-study').stop().fadeOut(400);
    $('.p-personal').stop().fadeOut(400);
  })
})
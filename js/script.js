window.onload = function () {
  AOS.init();

}
$(document).ready(function (){
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


})
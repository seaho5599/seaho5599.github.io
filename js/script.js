window.onload = function () {
  AOS.init();

  const content = "안녕하세요!! \n 저의 포토폴리오의 오신 걸 \n 환영합니다.";
  const text = document.querySelector(".visual-title");
  let i = 0;
  
  function typing(){
      let txt = content[i++];
      text.innerHTML += txt=== "\n" ? "<br/>": txt;
      if (i > content.length) {
          text.textContent = "";
          i = 0;
      }
  }
  setInterval(typing, 300)

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}

// 초기 실행
setTimeout(typing, 2700);


  let dataset = {
    label: "육류 판매량",
    backgroundColor: ['#ffd950', '#02bc77', '#28c3d7', '#FF6384'], //라벨별 컬러설정
    borderColor: '#22252B',
    data: [90, 90, 90, 90]
  }

  let labels = ['책임감', '소통능력', '도전정신', '성실함'];

  let datasets = {
    datasets: [dataset],
    labels: labels
  }
  let config = {
    type: 'pie',
    data: datasets, //데이터 셋 
    options: {
        responsive: true,
        maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
        legend: {
            position: 'top',
            fontColor: 'black',
            align: 'center',
            display: true,
            fullWidth: true,
            labels: {
                fontColor: 'rgb(0, 0, 0)'
            }
        },
        plugins: {
            labels: {//두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
                render: 'value',
                fontColor: 'black',
                fontSize: 15,
                precision: 2
            }

        }
    }
}
let canvas=document.getElementById('pieChart');
let pieChart = new Chart(canvas,config);



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
  mbMenu.click(function () {
    mbMenu.toggleClass('mb-menu-click')
    $('.mb-menu-list').toggleClass('mb-menu-list-click')
  })
  $(window).resize(function () {
    let wW = $(window).width()
    if (wW < 600) {
      mbMenu.removeClass('mb-menu-click')
      $('.mb-menu-list').removeClass('mb-menu-list-click')
    }
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
window.onload = function () {
  AOS.init();
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    positionFromTop: 200,
    disableScrolling: true,
    maxWidth: "800px",
    maxHeight: "800px",
  });

  //   const content = "안녕하세요!! \n 저의 포토폴리오의 오신 걸 \n 환영합니다.";
  //   const text = document.querySelector(".visual-title");
  //   let i = 0;

  //   function typing(){
  //       let txt = content[i++];
  //       text.innerHTML += txt=== "\n" ? "<br/>": txt;
  //       if (i > content.length) {
  //           text.textContent = "";
  //           i = 0;
  //       }
  //   }
  //   setInterval(typing, 300)

  // // 딜레이 기능 ( 마이크로초 )
  // function wait(ms) {
  //   return new Promise(res => setTimeout(res, ms))
  // }

  // // 초기 실행
  // setTimeout(typing, 2700);

  // const { width, height } = canvas.getBoundingClientRect();
  // canvas.width = width;
  // canvas.height = height;
  let dataset = {
    label: "가능성그래프",
    backgroundColor: ["#ffd950", "#02bc77", "#28c3d7", "#FF6384"], //라벨별 컬러설정
    borderColor: "#22252B",
    data: [90, 85, 95, 98],
  };

  let labels = ["책임감", "소통능력", "도전정신", "성실함"];

  let datasets = {
    datasets: [dataset],
    labels: labels,
  };
  let config = {
    type: "pie",
    data: datasets, //데이터 셋
    options: {
      responsive: true,
      maintainAspectRatio: false, //true 하게 되면 캔버스 width,height에 따라 리사이징된다.
      legend: {
        position: "top",
        fontColor: "black",
        align: "center",
        display: true,
        fullWidth: true,
        labels: {
          fontColor: "rgb(0, 0, 0)",
        },
      },
      plugins: {
        labels: {
          //두번째 script태그를 설정하면 각 항목에다가 원하는 데이터 라벨링을 할 수 있다.
          render: "value",
          fontColor: "black",
          fontSize: 15,
          precision: 2,
        },
      },
    },
  };
  let canvas = document.getElementById("pieChart");
  let pieChart = new Chart(canvas, config);
};
$(document).ready(function () {
  let goTop = $(".gotop");
  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    // console.log(temp)
    if (temp < 400) {
      goTop.stop().hide(200);
      goTop.removeAttr("style");
    } else {
      goTop.stop().show(200);
    }
    goTop.click(function () {
      $("html").stop().animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  });

  // $(window).resize(function(){
  //   let wW = $(window).width()
  //   if(wW < 950){
  //     goTop.removeAttr('style')
  //   }
  // })
  $(window).scroll(function () {
    let temp = $(window).scrollTop();
    if (temp >= 1000) {
      $(".go-profile").addClass("gnbfocus");
    } else {
      $(".go-profile").removeClass("gnbfocus");
    }
    if (temp >= 3212) {
      $(".go-profile").removeClass("gnbfocus");
      $(".go-protfolio").addClass("gnbfocus");
    } else {
      $(".go-protfolio").removeClass("gnbfocus");
    }
    if (temp >= 9240) {
      $(".go-protfolio").removeClass("gnbfocus");
      $(".go-life").addClass("gnbfocus");
    } else {
      $(".go-life").removeClass("gnbfocus");
    }
    if (temp >= 10810) {
      $(".go-life").removeClass("gnbfocus");
      $(".go-contact").addClass("gnbfocus");
    } else {
      $(".go-contact").removeClass("gnbfocus");
    }
  });
  // 버튼 이동
  let gnbLiA = $(".gnb > li > a");
  gnbLiA.click(function (e) {
    e.preventDefault();
  });
  $(".go-home").click(function () {
    let offset = $("#home").offset();
    $("html, body").animate(
      {
        scrollTop: offset.top,
      },
      800
    );
    mbHide();
  });
  $(".go-profile").click(function () {
    let offset = $("#profile").offset();
    $("html, body").animate(
      {
        scrollTop: offset.top,
      },
      800
    );
    mbHide();
  });
  $(".go-protfolio").click(function () {
    let offset = $("#portfolio").offset();
    $("html, body").animate(
      {
        scrollTop: offset.top,
      },
      800
    );
    mbHide();
  });
  $(".go-life").click(function () {
    let offset = $("#life").offset();
    $("html, body").animate(
      {
        scrollTop: offset.top,
      },
      800
    );
    mbHide();
  });
  $(".go-contact").click(function () {
    let offset = $("#contact").offset();
    $("html, body").animate(
      {
        scrollTop: offset.top,
      },
      800
    );
    mbHide();
  });

  // let section = $(".section");
  // $.each(section, function (index, item) {
  //   new Waypoint({
  //     element: $(this),
  //     handler: function (direction) {
  //       let temp = $(this.element);

  //       if (direction == "down") {

  //       } else if (direction == "up") {
  //       }
  //     },
  //     offset: "35%",
  //   });
  // });

  let mbMenuBtn = $(".mb-btn");
  let mbDim = $(".mb-dim");
  mbMenuBtn.click(function () {
    mbMenuBtn.toggleClass("mb-btn-click");
    $(".mb-menu-list").toggleClass("mb-menu-list-click");
    mbDim.toggleClass("mb-dim-click");
  });
  let mbHide = () => {
    mbMenuBtn.removeClass("mb-btn-click");
    $(".mb-menu-list").removeClass("mb-menu-list-click");
    mbDim.removeClass("mb-dim-click");
  };
  mbDim.click(function () {
    mbHide();
  });
  $(window).resize(function () {
    let wW = $(window).width();
    if (wW < 600) {
      mbHide();
    }
  });
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
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
  let all = $(".all");
  let personal = $(".personal");
  let study = $(".study");
  let vue = $(".vue");

  all.click(function () {
    $(".protfolio-clone")
      .stop()
      .animate(
        {
          opacity: "1",
        },
        0
      )
      .show(0);
  });
  personal.click(function () {
    $(".p-personal")
      .stop()
      .animate(
        {
          opacity: "1",
        },
        0
      )
      .show(0);
    $(".p-study")
      .stop()
      .animate(
        {
          opacity: "0",
        },
        0
      )
      .hide(0);
    $(".p-vue")
      .stop()
      .animate(
        {
          opacity: "0",
        },
        0
      )
      .hide(0);
  });
  study.click(function () {
    $(".p-study")
      .stop()
      .animate(
        {
          opacity: "1",
        },
        0
      )
      .show(0);
    $(".p-personal")
      .stop()
      .animate(
        {
          opacity: "0",
        },
        0
      )
      .hide(0);
    $(".p-vue")
      .stop()
      .animate(
        {
          opacity: "0",
        },
        0
      )
      .hide(0);
  });
  vue.click(function () {
    $(".p-vue")
      .stop()
      .animate(
        {
          opacity: "1",
        },
        0
      )
      .show(0);
    $(".p-study")
      .stop()
      .animate(
        {
          opacity: "0",
        },
        0
      )
      .hide(0);
    $(".p-personal")
      .stop()
      .animate(
        {
          opacity: "0",
        },
        0
      )
      .hide(0);
  });
});

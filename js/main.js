
$(document).ready(function () {
    $(".tabButton").on({
      click: function () {
        $(this).siblings().removeClass("clickedButton");
        $(this).addClass("clickedButton");

      },
    });
  });

  $("#menubtn").on("click", ()=>{
    $("#open").toggleClass("d-none")

    $("#menuUl").toggleClass("d-none")
  })
  $("#close").on("click", ()=>{
    console.log("ghfgh");
    $("#open").toggleClass("d-none")
    $("#menuUl").toggleClass("d-none")
  })




var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
nextEl: ".button-next",
prevEl: ".button-prev",
},

pagination: {
el: ".swiper-pagination",
clickable: true,
},
freeMode: true,
loop: true,
// autoplay: {
//   delay: 2500,
//   disableOnInteraction: false,
// },


});

var video = document.getElementById("my-video");
var playPauseImg = document.getElementById("play-pause-img");

function playPause() {
  console.log("click");
  if (video.paused) {
    video.play();
    playPauseImg.src = "./images/puase.svg";
  } else {
    video.pause();
    playPauseImg.src = "./images/Group 1000010345.svg";
  }
}
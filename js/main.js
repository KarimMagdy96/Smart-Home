AOS.init({
  duration: 1200,
});



document.querySelectorAll("*").forEach((elem) => {
  if (elem.offsetWidth > document.documentElement.offsetWidth) {
    console.log("Problem child: ", elem);
  }
});








//color table
let bgColors = ["green", "blue", "orange", "red"];
for (let i = 0; i < bgColors.length; i++) {
  $(".color-box li").eq(i).css("backgroundColor", bgColors[i]);
}

$(".color-box li").click(function () {
  let currentBg = $(this).css("backgroundColor");
  $(".change-color").css("color", currentBg);
});
$(".color-box i ").click(function () {
  let currantWidth = $(".color-options").outerWidth();
  console.log(currantWidth);
  if ($(".color-box").css("left") == "0px") {
    $(".color-box").animate({ left: -currantWidth }, 800);
  } else {
    $(".color-box").animate({ left: "0px" }, 800);
  }
});

// scroll navbar bg change

let navOffsite = $("#card-title").offset().top;

$(window).scroll(function () {
  if ($(window).scrollTop() > navOffsite) {
    $(".navBg").css({ backgroundColor: "#2a2a2a", transition: "0.5s" });
  } else {
    $(".navBg").css({ backgroundColor: "transparent", transition: "0.5s" });
  }
});

// scroll 2 top

$("#scrollTop").click(function () {
  $(window).scrollTop(0);
});

// loading screen

$("document").ready(function () {
  $(".loadingScreen").fadeOut(1000, function () {
    $("*").css("overflowY", "visible");
  });
});

//add active on click\

$(".nav-link").click(function () {
  $(this).addClass("active");
  $(this).parent().siblings().children().removeClass("active");
});

//ad active by scroll
let section = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");
$(window).scroll(() => {
  let current = "";
  section.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

//typing effect

var typed = new Typed(".element", {
  // Waits 1000ms after typing "First"
  strings: ["INTERIOR DESIGNS", "INTERIOR DESIGNS", "PERFECT WORK",'GREAT LAYOUTS' ],
  typeSpeed: 250,
  backSpeed: 100,
  loop: true,
});
//increase num on scroll

// let nums = Array.from( document.querySelectorAll('.num'))
// let stated=false
// function startCount(ele){
// let goal = ele.dataset.goal;
// let count =setInterval(()=>{
// ele.textContent++;
// if(ele.textContent === goal){
//   clearInterval(count)
// }
// },40)
// }
// $(window).scroll(function(){
//   if ($(window).scrollTop() >= $(".increase-num").offset().top) {
//     if (!stated) {
//       nums.forEach((num) => {
//         startCount(num);
//       });
//     }
//     stated = true;
//   }
// })

// nice scrolling
// $(".nav-link").click(function () {
//   let currentHref = $(this).attr("href");
//   let currentOffsite = $(currentHref).offset().top;
//   $("body,html").animate({ scrollTop: currentOffsite },1000);
// });
const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars-staggered"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars-staggered");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  duration: 1000,
});

ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header_content .socials", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".popular_card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover_card img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".discover_card:nth-child(2) img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".discover_card_content h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".discover_card_content .section_description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".discover_card_content h3", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner_content .section_header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".banner_content .section_description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".banner_card", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

ScrollReveal().reveal(".subscribe_content .section_header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".subscribe_content .section_description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".subscribe_content form", {
  ...scrollRevealOption,
  delay: 1000,
});



// PRELOADER & BACK TO TOP BTN AREA 

$(document).ready(function() {

    $(window).on("load", function() {
        $(".preloader_area").fadeOut(1000)
    });

    $(".back_to_top").click(function() {
        $("html, body").animate({scrollTop: 0}, 500)
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $(".back_to_top").fadeIn(500)
        }
        else{
            $(".back_to_top").fadeOut(500)
        }
    });
});
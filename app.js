let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-circle-xmark");  //fontawson ka cancel class hai.
    navbar.classList.toggle("active");
}







var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop: true,
  });

  var swiper = new Swiper(".review-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop:true,
  });
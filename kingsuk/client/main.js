const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

/*------about---*/
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
/*------box-----*/
ScrollReveal().reveal(".top", {
  ...scrollRevealOption,
  delay: 600,
});

ScrollReveal().reveal(".box1", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal(".box2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".box3", {
  ...scrollRevealOption,
  delay: 1100,
});

ScrollReveal().reveal(".box4", {
  ...scrollRevealOption,
  delay: 1300,
});

/*----home----*/

ScrollReveal().reveal(".heading", {
  ...scrollRevealOption,
  delay: 900,
});

ScrollReveal().reveal(".mtop .owl-nav .owl-prev ", {
  ...scrollRevealOption,
  delay: 1200,
});

ScrollReveal().reveal(".mtop .owl-nav .owl-next ", {
  ...scrollRevealOption,
  delay: 1200,
});


ScrollReveal().reveal(".mtop__items ", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".section__subheaderr", {
  ...scrollRevealOption,
  interval: 300,
  origin: "right",
});
ScrollReveal().reveal(".section__headerr", {
  ...scrollRevealOption,
  interval: 600,
  origin: "right",
});
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 700,
  origin: "right",
});



/*--------review--------*/




// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE

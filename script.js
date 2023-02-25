const btnHamburger = document.querySelector('#hamburger-btn')
const menuSlider = documemt.querySelector('')

// !Menu Navigation
let isMenuOpen = false;

// Displaying Menu Navigation function
const showNavigation = function () {
  menuNavigation.classList.toggle("opacity-0");
  menuNavigation.classList.toggle("opacity-100");
  menuNavigation.classList.toggle("invisible");
  body.classList.toggle("overflow-hidden");
};

btnHamburger.addEventListener("click", function () {
  // Animated Hamburger
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    btnHamburger.classList.add("open");
  } else {
    btnHamburger.classList.remove("open");
  }

  // Displaying the Menu Navigation
  if (menuNavigation.classList.contains("opacity-0")) {
    showNavigation();
  } else {
    showNavigation();
  }
});
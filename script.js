const btnHamburger = document.querySelector('#hamburger-btn')
const btnCloseMenu = document.querySelector('#menuClose')
const menuSlider = document.querySelector('#menu-slider')
const body = document.querySelector('#body')

// !Menu Navigation
// Displaying Menu Navigation function
const showNavigation = function () {
  menuSlider.classList.toggle('-translate-x-full')
  body.classList.toggle("overflow-hidden");
};

btnHamburger.addEventListener("click", function () {
  // Displaying the Menu Navigation
  if (menuSlider.classList.contains("-translate-x-full")) {
    showNavigation();
  } else {
    showNavigation();
  }
});

btnCloseMenu.addEventListener('click', () => {
  showNavigation();
})
const btnHamburger = document.querySelector("#hamburger-btn");
const btnCloseMenu = document.querySelector("#menuClose");
const menuSlider = document.querySelector("#menu-slider");
const accordionBtn = document.querySelectorAll("#accordion-btn");
const accordionLinks = document.querySelectorAll("#accordion-links");
const dropdownCategory = document.querySelector('#dropdown-category')
const dropdownCategoryDetail = document.querySelector('#dropdown-category--detail')
const dropdownButton = document.querySelector('#dropdown-button')
const body = document.querySelector("#body");

// !Dropdown 
document.addEventListener('click', (e) => {
  console.log(e);
  const isDropdownButton = e.target.closest('#dropdown-button')

  if(isDropdownButton) {
    dropdownCategoryDetail.classList.toggle('opacity-0')
    dropdownCategoryDetail.classList.toggle('opacity-1')
    dropdownCategoryDetail.classList.toggle('translate-y-0')
  }
  if(!isDropdownButton) {
    dropdownCategoryDetail.classList.add('opacity-0')
  }
})

// !Menu Navigation
// Displaying Menu Navigation Slider Function
const showNavigation = function () {
  menuSlider.classList.remove("-translate-x-full");
  body.classList.add("overflow-hidden");
  document.style
};

// Closing the Menu Navigation Slider Function
const closeNavigation = function () {
  menuSlider.classList.add("-translate-x-full");
  body.classList.remove("overflow-hidden");
};

// Hamburger click event to open menu navigation slider
btnHamburger.addEventListener("click", function () {
  if (menuSlider.classList.contains("-translate-x-full")) {
    showNavigation();
  } else {
    closeNavigation();
  }
});

// Close menu navigation slider via button in the slider
btnCloseMenu.addEventListener("click", () => {
  closeNavigation();
});

// Closing the menu navigation slider when clicking outside 
//TODO HELP: I need help with closing the navigation when clicking outside 
// document.addEventListener('click', (e) => {
//   if(e.target.id !== 'menu-slider' && e.target.id !== "menuClose") {
//     closeNavigation();
//   }
// })

// !Accordion Drop Down
Array.from(accordionBtn).forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("hidden");
  });
});

const btnHamburger = document.querySelector("#hamburger-btn");
const btnCloseMenu = document.querySelector("#menuClose");
const menuSlider = document.querySelector("#menu-slider");
const accordionBtn = document.querySelectorAll("#accordion-btn");
const accordionLinks = document.querySelectorAll("#accordion-links");
const dropdownCategoryDetail = document.querySelector('#dropdown-category--detail')
const dropdownProfileDetail = document.querySelector('#dropdown-profile--detail')
const dropdownButton = document.querySelector('#dropdown-button')
const searchSlideIn = document.querySelector("#search-slidein")
const searchBtn = document.querySelector('#search-btn')
const body = document.querySelector("#body");

// TODO HELP: How should I abstract/refactor the overall code so theres only one function for dropdown menus?

// !Category Dropdown 
document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.closest('#dropdown-button')

  if(isDropdownButton) {
    dropdownCategoryDetail.classList.toggle('opacity-0')
    dropdownCategoryDetail.classList.toggle('opacity-1')
    dropdownCategoryDetail.classList.remove('invisible')
    dropdownCategoryDetail.classList.toggle('translate-y-0')
  }
  if(!isDropdownButton) {
    dropdownCategoryDetail.classList.add('opacity-0')
    dropdownProfileDetail.classList.add('invisible')

  }
})

////////////////////////////////////////////////////////////////////
// !Profile Dropdown
document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.closest('#dropdown-button--profile')


  // Dropdown opens when user clicks on an element with the closest parent element of the id #dropdown-button--profile
  if(isDropdownButton) {
    dropdownProfileDetail.classList.toggle('opacity-0')
    dropdownProfileDetail.classList.toggle('opacity-1')
    dropdownProfileDetail.classList.remove('invisible')
    dropdownProfileDetail.classList.toggle('translate-y-0')
  }

  // Dropdown closes when users click outside of the closest mentioned parent element
  if(!isDropdownButton) {
    dropdownProfileDetail.classList.add('opacity-0')
    dropdownProfileDetail.classList.add('invisible')
  }
})


////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////
// !Accordion Drop Down
Array.from(accordionBtn).forEach((e) => {
  e.addEventListener("click", () => {
    e.nextElementSibling.classList.toggle("hidden");
  });
});

//////////////////////////////////////////////////////////
// !Search slide in
searchBtn.addEventListener('click', function() {
  searchSlideIn.classList.toggle('max-h-44')
})
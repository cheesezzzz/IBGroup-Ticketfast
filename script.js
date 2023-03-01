const btnHamburger = document.querySelector("#hamburger-btn");
const btnCloseMenu = document.querySelector("#menuClose");
const menuSlider = document.querySelector("#menu-slider");
const accordionBtn = document.querySelectorAll("#accordion-btn");
const dropdownCategoryDetail = document.querySelector('#dropdown-category--detail')
const dropdownProfileDetail = document.querySelector('#dropdown-profile--detail')
const searchSlideIn = document.querySelector("#search-slidein")
const searchBtn = document.querySelector('#search-btn')
const body = document.querySelector("#body");

// Function to toggle dropdown visibility
function toggleDropdown(button, detail) {
  button.addEventListener('click', (e) => {
    detail.classList.toggle('opacity-0')
    detail.classList.toggle('opacity-1')
    detail.classList.remove('invisible')
    detail.classList.toggle('translate-y-0')

    e.stopPropagation();
  });

  document.addEventListener('click', () => {
    detail.classList.add('opacity-0')
    detail.classList.add('invisible')
  });
}

// Category Dropdown 
const dropdownButton = document.querySelector('#dropdown-button')
toggleDropdown(dropdownButton, dropdownCategoryDetail);

// Profile Dropdown
const dropdownButtonProfile = document.querySelector('#dropdown-button--profile')
toggleDropdown(dropdownButtonProfile, dropdownProfileDetail);

// Menu Navigation
const showNavigation = function () {
  menuSlider.classList.remove("-translate-x-full");
  body.classList.add("overflow-hidden");
};

const closeNavigation = function () {
  menuSlider.classList.add("-translate-x-full");
  body.classList.remove("overflow-hidden");
};

btnHamburger.addEventListener("click", function () {
  if (menuSlider.classList.contains("-translate-x-full")) {
    showNavigation();
  } else {
    closeNavigation();
  }
});

btnCloseMenu.addEventListener("click", () => {
  closeNavigation();
});

// TODO HELP: I am not sure how to implement functionality where the menu would close when clicking outside
// document.addEventListener('click', (e) => {
//   if(e.target.id !== 'menu-slider' && e.target.id !== "menuClose" && !menuSlider.contains(e.target)) {
//     closeNavigation();
//   }
// });

// Accordion Drop Down
Array.from(accordionBtn).forEach((button) => {
  button.addEventListener("click", () => {
    const links = button.nextElementSibling;
    links.classList.toggle("hidden");
  });
});

// Search slide in
searchBtn.addEventListener('click', function() {
  searchSlideIn.classList.toggle('max-h-44')
});

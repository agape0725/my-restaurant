'use strict'

// Section One Variables
const sectionOneContainer =  document.querySelector('.section_one_container');
const tryButton = document.querySelector('.try-button');

// Section Two Variables
const foodSelections = document.querySelectorAll('.food_selection');
const foodMainContainers = document.querySelectorAll('.food_main_container');

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready) 
} else {
  ready()
}

function ready() {
// Section Two // 
  const foodSelections = document.getElementsByClassName('food_selection');
  for (let x = 0; x < foodSelections.length; x++) {
    const foodSelection = foodSelections[x];
    foodSelection.addEventListener('click', foodMenuSelected);
  }
}

// Section One // 

const fcOption = {
  root: null,
  threshold: .35,
}

const foodContainer = document.querySelector('.food_menu_container');
const foodContainerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('interscting');
      sectionOneContainer.style.paddingTop = '4.5rem';
      sectionOneContainer.style.height = '700px';
      tryButton.style.transform = 'translate(-50%, 230%)'
    }
  })
}, fcOption)

foodContainerObserver.observe(foodContainer);

// Section Two //
const foodMenuSelected = function(e) {
  const link = e.target;
  const foodAttr = link.getAttribute('food-option');
  const menuContainer = document.querySelector(`.${foodAttr}_container`);
  const selectedMenuText = document.querySelector('.menu-selected-text');
  foodSelections.forEach(fs => {
    fs.classList.remove('food_selection--active');
    if (link) {
      link.classList.add('food_selection--active');
      selectedMenuText.textContent = link.textContent;
      foodMainContainers.forEach(fmc => {
        fmc.classList.remove('food_main_container--active');
        if (foodAttr == foodAttr) {
          menuContainer.classList.add('food_main_container--active');
        }
      })
    }
  })
}
'use strict'

// Section One Variables 
const sectionOneContainer =  document.getElementById('main_section_one');
const tryButton = document.querySelector('.try-button');

// Section Two Variables
const drinkSelections = document.querySelectorAll('.drink_selection');
const drinkMainContainers = document.querySelectorAll('.drink_main_container');

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready) 
} else {
  ready()
}

function ready() {
// Section Two // 
  const drinkSelections = document.getElementsByClassName('drink_selection');
  for (let x = 0; x < drinkSelections.length; x++) {
    const drinkSelection = drinkSelections[x];
    drinkSelection.addEventListener('click', drinkMenuSelected);
  }
}

// Section One // 

const dcOption = {
  root: null,
  threshold: .35,
}

const drinkContainer = document.querySelector('.drink_menu_container');
const drinkContainerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('interscting');
      sectionOneContainer.style.paddingTop = '4.5rem';
      sectionOneContainer.style.height = '700px';
      tryButton.style.transform = 'translate(-50%, 230%)'
    }
  })
}, dcOption)

drinkContainerObserver.observe(drinkContainer);

// Section Two //
const drinkMenuSelected = function(e) {
  const link = e.target;
  const drinkAttr = link.getAttribute('drink-option');
  const menuContainer = document.querySelector(`.${drinkAttr}_container`);
  const selectedMenuText = document.querySelector('.menu-selected-text');
  drinkSelections.forEach(ds => {
    ds.classList.remove('drink_selection--active');
    if (link) {
      link.classList.add('drink_selection--active');
      selectedMenuText.textContent = link.textContent;
      drinkMainContainers.forEach(dmc => {
        dmc.classList.remove('drink_main_container--active');
        if (drinkAttr == drinkAttr) {
          menuContainer.classList.add('drink_main_container--active');
        }
      })
    }
  })
}
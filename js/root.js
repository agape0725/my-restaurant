'use strict'

// Header Variables
const burgerIcon = document.querySelector('.burger_icon');
const navList = document.querySelector('.nav_list');
const itemList = document.querySelectorAll('.list-item');

// Header //  // Header //  // Header //

burgerIcon.addEventListener('click', function (e) {
  navList.classList.toggle('active');
  burgerIcon.classList.toggle('active');
})

navList.addEventListener('mouseover', function (e) {
  const link = e.target;
  itemList.forEach(il => {
    if (il !== link) {
      il.style.opacity = 0.5;
    } else {
      il.style.opacity = 1;
    }
  })
})

navList.addEventListener('mouseout', function (e) {
  const link = e.target;
  itemList.forEach(il => {
    if (il !== link) {
      il.style.opacity = 1;
    } else {
      il.style.opacity = 1;
    }
  })
})

const headerOption = {
  root: null,
  rootMargin: '-300px',
}

const headerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector('header').classList.add('active');
    }
  })
}, headerOption)

const sectionTwo = document.querySelector('.section_two');
headerObserver.observe(sectionTwo);
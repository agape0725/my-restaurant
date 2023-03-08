'use strict'

// Section One Variables
const slideContainer = document.querySelector('.carousel')
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 5000;
let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;
const firstClone =  slides[0].cloneNode(true);
const lastClone =  slides[slides.length - 1].cloneNode(true);
const getSlides = () => document.querySelectorAll('.slide');
firstClone.id = 'first-clone';
lastClone.id = 'last-clone';
slide.append(firstClone);
slide.prepend(lastClone);
const slideWidth = slides[index].clientWidth;
slide.style.transform = `translateX(${-slideWidth * index}px)`;

// Swiper //
var swiper = new Swiper('.swiper_product', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'coverflow',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

var swiper = new Swiper('.swiper_testimonial', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 5000,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Toggle Blur
function toggleBlur(e) {
  const blur = document.querySelectorAll('.blur');
  blur.forEach(b => {
    b.classList.add('active');
  })
}

// Remove Toggle Blur
function removeToggleBlur(e) {
  const blur = document.querySelectorAll('.blur');
  blur.forEach(b => {
    b.classList.remove('active');
  })
}

// Close Modal
const closeModal = function(e) {
  const link = e.target;
  const modalContainers = link.parentElement;
  modalContainers.classList.remove('employee__info__container--active');
  modalContainers.classList.remove('view_image_container--active');
  removeToggleBlur();
}

// Section Three Variables
const productMenuContainer = document.getElementsByClassName('product_menu_container')[0];
const productMenuItems = document.querySelectorAll('.product-menu-item');
const swiperSlides = document.querySelectorAll('.swiper-slide');
const hiddenFacts = document.querySelectorAll('.hidden_fact');

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready) 
} else {
  ready()
}

function ready() {

// Close Modal Function // 

  // Close Button Click
  const closeModalButtons = document.getElementsByClassName('close-modal-button');
  for (let x = 0; x < closeModalButtons.length; x++) {
    const closeModalButton = closeModalButtons[x];
    closeModalButton.addEventListener('click', closeModal)
  }

// Section Three //

  // View Button
  const viewButtons = document.getElementsByClassName('view-button');
  for (let x = 0; x < viewButtons.length; x++) {
    const viewButton = viewButtons[x];
    viewButton.addEventListener('click', viewButtonClicked);
  }

  // Close Button
  const closeButtons = document.getElementsByClassName('close-button');
  for (let x = 0; x < closeButtons.length; x++) {
    const closeButton = closeButtons[x];
    closeButton.addEventListener('click', closeButtonClicked);
  }

// Section Four // 

  // Hover Restaurant Images
  var restaurantImages = document.getElementsByClassName('image_gallery_container');
  for (let x = 0; x < restaurantImages.length; x++) {
    const restaurantImage = restaurantImages[x];
    restaurantImage.addEventListener('mouseover', restaurantImageHover);
  }

  // Release Hover Restaurant Images
  var restaurantImages = document.getElementsByClassName('image_gallery_container');
  for (let x = 0; x < restaurantImages.length; x++) {
    const restaurantImage = restaurantImages[x];
    restaurantImage.addEventListener('mouseout', releaseRestaurantImageHover);
  }

  // View Button Click
  const viewImageButtons = document.getElementsByClassName('view-image-button');
  for (let x = 0; x < viewImageButtons.length; x++) {
    const viewButton = viewImageButtons[x];
    viewButton.addEventListener('click', viewButtonClick)
  }
}

// Section One // // Section One // // Section One // 

  // Start Slide
const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};
startSlide();

  // Slide Transition End
slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = `none`;
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = `none`;
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
})

  // Move to Next Slide
const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = `2s`;
};

  // Move To Previous Slide
const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
  slide.style.transition = `2s`;
}

  // Slide Listeners
slideContainer.addEventListener('mouseover', () => {clearInterval(slideId);})
slideContainer.addEventListener('mouseout', startSlide);
nextBtn.addEventListener('click', moveToNextSlide)
prevBtn.addEventListener('click', moveToPreviousSlide)

// Section Two //  // Section Two //  // Section Two // 



// Section Three // // Section Three // // Section Three //

  // Show Product Menu
productMenuItems.forEach(pmi => pmi.addEventListener('click', function (e) { 
  const link = e.target;
  const itemAttr = link.getAttribute('menu-item');
  const activateItem = document.querySelector(`.product-menu-item[menu-item="${itemAttr}"]`);
  const productContainers = document.querySelectorAll('.products_container');
  const productContainer = document.querySelector(`.products_container[product-title="${itemAttr}"]`);
  const swipers = document.querySelectorAll('.swiper');
  const swiper = document.querySelector(`.swiper[swiper="${itemAttr}"]`);

  
  productMenuItems.forEach(pmi => {
    pmi.classList.remove('product-menu-item--active');
    if (itemAttr === itemAttr) {
      activateItem.classList.add('product-menu-item--active'); 
      productContainers.forEach(pc => {
        pc.classList.remove('product_container--active');
        productContainer.classList.add('product_container--active');
      })

      swipers.forEach(s => {
        s.classList.remove('swiper--active');
        swiper.classList.add('swiper--active');
      })

      // Swiper Slide
      swiperSlides.forEach(ss => {
        ss.classList.remove('swiper-slide--active');
      })

      // Hidden Facts
      hiddenFacts.forEach(hf => {
        hf.classList.remove('hidden_fact--active');
      })

    }
  })

}))

  // View Button Clicked
const viewButtonClicked = function(e) {
  const link = e.target;
  const swiperSlideContainer = link.parentElement.parentElement.parentElement;
  const hiddenFact = swiperSlideContainer.children[1];
  
  // Swiper Slide
  swiperSlides.forEach(ss => {
    ss.classList.remove('swiper-slide--active');
    swiperSlideContainer.classList.add('swiper-slide--active');
  })

  // Hidden Facts
  hiddenFacts.forEach(hf => {
    hf.classList.remove('hidden_fact--active');
    hiddenFact.classList.add('hidden_fact--active');
  })
}

  // Close Button Clicked
const closeButtonClicked = function(e) {

  swiperSlides.forEach(ss => {
    ss.classList.remove('swiper-slide--active');
  })

  hiddenFacts.forEach(hf => {
    hf.classList.remove('hidden_fact--active');
  })
}

// Section Four //  // Section Four //  // Section Four //

  // Intersection Observer for Restaurants Gallery
const irOption = {
  root: null,
  threshold: .25,
}

const imageRows = document.querySelectorAll('.image_row');
const imageRowObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const link = entry.target;
      const imageRow = link.closest('.image_row');

      if (!entry.isIntersecting) return;

        if (entry.isIntersecting) {
          imageRow.classList.add('image_row--active')
        } else {
          imageRowObserver.unobserve(entry);
        }
    }
  })
}, irOption)

imageRows.forEach(ir => {
  imageRowObserver.observe(ir);
})

const stOption = {
  root: null,
  threshold: .5,
}

const sectionTwoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const link = entry.target;
      const leftColImages = link.children[0];
      const rightColContent = link.children[1];
      leftColImages.classList.add('left-col--active');
      rightColContent.classList.add('right-col--active');
      document.querySelector('.carousel').style.paddingTop = '4.5rem';
    } 
  })
}, stOption)

const sectionTwoContainer = document.querySelectorAll('.section-two');

sectionTwoContainer.forEach(stc => {
  sectionTwoObserver.observe(stc);
})


  // Hover Restaurant Images
const restaurantImageHover = function(e) {
  const link = e.target;
  const imageContainer = link.closest('.image_gallery_container');
  const viewButtonContainer = imageContainer.lastElementChild;
  const viewButton = viewButtonContainer.firstElementChild;
  viewButton.classList.add('view-image-button--active');
  imageContainer.classList.add('image_gallery_container--active');
}

  // Release Hover Restaurant Images 
  const releaseRestaurantImageHover = function(e) {
    const link = e.target;
    const imageContainer = link.closest('.image_gallery_container');
    const viewButtonContainer = imageContainer.lastElementChild;
    const viewButton = viewButtonContainer.firstElementChild;
    viewButton.classList.remove('view-image-button--active');
    imageContainer.classList.remove('image_gallery_container--active');
  }

  // View Button Clicked
  const viewButtonClick = function (e) {
    const link = e.target;
    const viewButtonParent = link.parentElement;
    const imageGalleryContainer = viewButtonParent.parentElement;
    const image = imageGalleryContainer.firstElementChild;
    // const viewButton = viewButtonParent.firstElementChild;
    const viewLarge = document.querySelector('.view-image-large');
    const viewImageContainer = viewLarge.parentElement;

    viewLarge.src = image.src;
    viewImageContainer.classList.add('view_image_container--active');
    toggleBlur();
  }

// Media Query // // Media Query // // Media Query // 
const productMedia = function(e) {
  let productWidth = window.matchMedia("(max-width: 768px");
  if (productWidth.matches) {

  }
}

productMedia();




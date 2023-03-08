'use strict'

// Section One Variables
const lettersOnly = /^[a-zA-Z ]*$/;
const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let dateInput = document.querySelector('.date-input');
let timeInput = document.querySelector('.time-input');
let paxInput = document.querySelector('.pax-input');
let bookButton = document.querySelector('.book-button');
let phoneInput = document.querySelector('.phone-input');
let emailInput = document.querySelector('.email-input');
let lastnameInput = document.querySelector('.lastname-input');
let firstnameInput = document.querySelector('.firstname-input');
let commentInput = document.querySelector('.comment-input');

let dropdown = document.querySelector('.person_dropdown_container');
let errorPax = document.getElementById('error-pax');

// Hidden Container Variables
const bookTableContainer = document.querySelector('.book_a_table');
const hiddenDateInput = document.getElementById('hidden-date-input');
const hiddenTimeInput = document.getElementById('hidden-time-input');
const hiddenFullnameInput = document.getElementById('hidden-fullname-input');
const hiddenPaxInput = document.getElementById('hidden-pax-input');
const hiddenEmailInput = document.getElementById('hidden-email-input');
const hiddenPhoneInput = document.getElementById('hidden-phone-input');
const hiddenCommentInput = document.getElementById('hidden-comment-input');
const hiddenCommentContainer = document.querySelector('.hidden_comment_container');
const reservationContainer = document.querySelector('.reservation_confirmed');
const reservationMessage = document.querySelector('.reservation-message');
const sliceFirstname = firstnameInput.value.slice(1);
const sliceLastname = lastnameInput.value.slice(1);
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const selectedDate = new Date(dateInput.value);

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

// Section One // // Section One // // Section One //

// Date Validation

const dateValidation = function(e) {
  dateInput = document.querySelector('.date-input');
  const errorDate = document.getElementById('error-date');

  const errorDateValidation = function(errorMessage) {
    errorDate.classList.add('active');
    dateInput.classList.add('error');
    dateInput.classList.remove('correct');
    errorDate.textContent = errorMessage;
  }

  if (dateInput.value === '') {
    errorDateValidation('date is required.');
    return false;
  }

  errorDate.classList.remove('active');
  dateInput.classList.remove('error'); 
  dateInput.classList.add('correct');
  return true;
}

// Time Validation

const timeValidation = function(e) {
  timeInput = document.querySelector('.time-input');
  const errorTime = document.getElementById('error-time');

  const errorTimeValidation = function(errorMessage) {
    errorTime.classList.add('active');
    timeInput.classList.add('error');
    timeInput.classList.remove('correct');
    errorTime.textContent = errorMessage;
  }

  if (timeInput.value === '') {
    errorTimeValidation('time is required.');
    return false;
  }

  errorTime.classList.remove('active');
  timeInput.classList.remove('error'); 
  timeInput.classList.add('correct');
  return true;
}

// Pax Validation
const selectedPaxCount = function(e) {
  dropdown.classList.remove('dropdown');
  paxInput.value = e.target.textContent;

  errorPax.classList.remove('active');
  paxInput.classList.remove('error'); 
  paxInput.classList.add('correct');
}

paxInput.addEventListener('click', function(e) {
  dropdown.classList.toggle('dropdown');
})

document.addEventListener('click', (e) => {
  const personDropdown = e.target.closest('.people_container');
  if (!personDropdown) {
    dropdown.classList.remove('dropdown');
  }
})

const paxCounts = document.getElementsByClassName('person-count');
for (let x = 0; x < paxCounts.length; x++) {
  const paxCount = paxCounts[x];
  paxCount.addEventListener('click', selectedPaxCount);
}

const paxValidation = function() {
  paxInput = document.querySelector('.pax-input');
  document.getElementById('error-pax');

  const errorPaxValidation = function(errorMessage) {
    errorPax.classList.add('active');
    paxInput.classList.add('error');
    paxInput.classList.remove('correct');
    errorPax.textContent = errorMessage;
  }

  if (paxInput.value === '') {
    errorPaxValidation('field is required.');
    return false;
  }

  errorPax.classList.remove('active');
  paxInput.classList.remove('error'); 
  paxInput.classList.add('correct');
  return true;
}

// Firstname validation
const firstnameValidation = function() {
  firstnameInput = document.querySelector('.firstname-input');
  const errorFirstname = document.getElementById('error-firstname');

  const errorFirstnameValidation = function(errorMessage) {
    errorFirstname.classList.add('active');
    firstnameInput.classList.add('error');
    firstnameInput.classList.remove('correct');
    errorFirstname.textContent = errorMessage;
  }

  if (firstnameInput.value === '') {
    errorFirstnameValidation('firstname is required.');
    return false;
  }

  if (!firstnameInput.value.match(lettersOnly)) {
    errorFirstnameValidation('firstname consists of letters only.');
    return false;
  }

  errorFirstname.classList.remove('active');
  firstnameInput.classList.remove('error');
  firstnameInput.classList.add('correct');
  return true;
}

// Lastname validation
const lastnameValidation = function() {
  lastnameInput = document.querySelector('.lastname-input');
  const errorLastname = document.getElementById('error-lastname');

  const errorLastnameValidation = function(errorMessage) {
    errorLastname.classList.add('active');
    lastnameInput.classList.add('error');
    lastnameInput.classList.remove('correct');
    errorLastname.textContent =  errorMessage;
  }

  if (lastnameInput.value === '') {
    errorLastnameValidation('lastname is required.');
    return false;
  }

  if (!lastnameInput.value.match(lettersOnly)) {
    errorLastnameValidation('lastname consists of letters only.');
    return false;
  }

  errorLastname.classList.remove('active');
  lastnameInput.classList.remove('error');
  lastnameInput.classList.add('correct');
  return true;
}

// Email validation
const emailValidation = function() {
  emailInput = document.querySelector('.email-input');
  const errorEmail = document.getElementById('error-email');

  const errorEmailValidation = function(errorMessage) {
    errorEmail.classList.add('active');
    emailInput.classList.add('error');
    emailInput.classList.remove('correct');
    errorEmail.textContent = errorMessage;
  }

  if (emailInput.value === '') {
    errorEmailValidation('email is required.');
    return false;
  }

  if (!emailInput.value.match(emailFormat)) {
    errorEmailValidation('incorrect email format.');
    return false;
  }

  errorEmail.classList.remove('active');
  emailInput.classList.remove('error');
  emailInput.classList.add('correct');
  return true
}

// Phone validation
const phoneValidation = function() {
  phoneInput = document.querySelector('.phone-input');
  const errorPhone = document.getElementById('error-phone');

  const errorPhoneValidation = function(errorMessage) {
    errorPhone.classList.add('active');
    phoneInput.classList.add('error');
    phoneInput.classList.remove('correct');
    errorPhone.textContent = errorMessage;
  }

  if (phoneInput.value === '') {
    errorPhoneValidation('phone number is required.');
    return false;
  }

  if (phoneInput.value.length <= 9) {
    errorPhoneValidation('phone number consist of 11 digits.');
    return false;
  }

  errorPhone.classList.remove('active');
  phoneInput.classList.remove('error');
  phoneInput.classList.add('correct');
  return true;
}

// Change Button
const changeButton = document.querySelector('.change-btn');

changeButton.addEventListener('click', function(e) {
  bookTableContainer.classList.remove('active');
  removeToggleBlur();
})

// Confirm Button

const confirmButton = document.querySelector('.confirm-btn');

confirmButton.addEventListener('click', function(e) {
  const confirmedDateTime = document.querySelector('.confirmed-time-date');
  bookTableContainer.classList.remove('active');
  reservationContainer.classList.add('active');
  reservationMessage.textContent = `Hi ${firstnameInput.value.charAt(0).toUpperCase() + sliceFirstname.toLowerCase()}, appointment confirmed with Agape's Restaurant on ${selectedDate.toLocaleDateString('en-US', dateOptions)} at ${timeInput.value}. Please find the details below: `
  confirmedDateTime.textContent = `${selectedDate.toLocaleDateString('en-US', dateOptions)} at ${timeInput.value}`
})

// Okay Button

const okayButton = document.querySelector('.okay-btn');

okayButton.addEventListener('click', function(e) {
  reservationContainer.classList.remove('active');
  removeToggleBlur();
})

// Hidden Container //  // Hidden Container //  // Hidden Container //

bookButton.addEventListener('click', function(e) {

   if (commentInput.value !== '') {
    hiddenCommentContainer.style.display = 'block';
    hiddenCommentInput.textContent = commentInput.value;
   } else {
    hiddenCommentContainer.style.display = 'none';
   }

   if (!timeValidation()) {
    console.log('wrong');
    return false;
  }

  if (!dateValidation()) {
    console.log('wrong');
    return false;
  }

  if (!paxValidation()) {
    console.log('wrong');
    return false;
  }

  if (!firstnameValidation()) {
    console.log('wrong');
    return false;
  }

  if (!lastnameValidation()) {
    console.log('wrong');
    return false;
  }

  if (!emailValidation()) {
    console.log('wrong');
    return false;
  }

  if (!phoneValidation()) {
    console.log('wrong');
    return false;
  }

  bookTableContainer.classList.add('active');
  hiddenFullnameInput.textContent = firstnameInput.value.charAt(0).toUpperCase() + sliceFirstname.toLowerCase() + ' ' + lastnameInput.value.charAt(0).toUpperCase() + sliceLastname.toLowerCase(); 
  hiddenPaxInput.textContent = paxInput.value;
  hiddenEmailInput.textContent = emailInput.value;
  hiddenPhoneInput.textContent = '0' + phoneInput.value;
  hiddenDateInput.textContent = selectedDate.toLocaleDateString('en-US', dateOptions);
  hiddenTimeInput.textContent = timeInput.value;
  toggleBlur();
  return true;
})

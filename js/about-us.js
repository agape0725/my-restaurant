'use strict'

// Section Two
const hiddenMemberContainer = document.querySelector('.hidden_member_container');
const blurContainers = document.querySelectorAll('.blur');

// Section Three

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready) 
} else {
  ready()
}

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
  const parentElement = link.parentElement;
  parentElement.classList.remove('hidden_member_container--active');
  removeToggleBlur();
}

function ready() {

  // Close Modal Function // 

  // Close Button Click
  const closeModalButtons = document.getElementsByClassName('close-modal-button');
  for (let x = 0; x < closeModalButtons.length; x++) {
    const closeModalButton = closeModalButtons[x];
    closeModalButton.addEventListener('click', closeModal)
  }

  // Section Two // 
  const teamMembers = document.getElementsByClassName('employee');
  for (let x = 0; x < teamMembers.length; x++) {
    const teamMember = teamMembers[x];
    teamMember.addEventListener('click', memberClicked);
  }

  // Section Three
  const servicesChoices = document.getElementsByClassName('services-choice');
  for (let x = 0; x < servicesChoices.length; x++) {
    const servicesChoice = servicesChoices[x];
    servicesChoice.addEventListener('click', servicesChoiceClicked);
  }
}

// Section Two

const memberClicked = function(e) {
  const link = e.target;
  const firstChild = link.children[0];
  const memberName = firstChild.children[0];
  const memberPosition = firstChild.children[1];

  const hiddenMemberName = document.querySelector('.hidden_member_name');
  const hiddenMemberPosition = document.querySelector('.hidden_member_position');
  const hiddenMemberComment = document.querySelector('.hidden_member_comment');

  if (link) {
    hiddenMemberName.textContent = memberName.textContent;
    hiddenMemberPosition.textContent = memberPosition.textContent;
    hiddenMemberContainer.classList.add('hidden_member_container--active');
    toggleBlur();
  }
}

// Section Three

const servicesChoiceClicked = function(e) {
  const link = e.target;
  const servicesText = link.textContent.toLowerCase();
  const servicesChoices = document.querySelectorAll('.services-choice');
  const servicesContainers = document.querySelectorAll('.services_container');
  const servicesChoice = document.querySelector(`.${servicesText}-choice`);
  const sericesContainer = document.querySelector(`.${servicesText}_container`)

  servicesChoices.forEach(sc => {
    sc.classList.remove('services-choice--active');
    servicesChoice.classList.add('services-choice--active');
  })

  servicesContainers.forEach(sc => {
    sc.classList.remove('services_container--active');
    sericesContainer.classList.add('services_container--active');
  })
}
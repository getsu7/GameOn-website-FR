function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

/**
 * DOM Selectors
 */
const modalbg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const close = document.querySelector('.close');
const content = document.querySelector('.content');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');

// Form fields
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const nbTournament = document.querySelector('#nbTournament');
const locations = document.querySelectorAll('input[name="location"]');
const termsOfUse = document.querySelector('#termsOfUse');
const newsletter = document.querySelector('#newsletter');

const formFields = {
  firstname: { value: '', valid: undefined },
  lastname: { value: '', valid: undefined },
  email: { value: '', valid: undefined },
  birthdate: { value: '', valid: undefined },
  nbTournament: { value: 0, valid: undefined },
  location: { value: '', valid: undefined },
  termsOfUse: { value: true, valid: undefined },
  newsletter: { value: false, valid: undefined }
};

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

// validate the form fields
function validate(formFields) {
  if (typeof formFields.firstname.value === 'string' && formFields.firstname.value.length > 2) {
    formFields.firstname.valid = true;
  } else {
    formFields.firstname.valid = false;
  }
}

/**
 * Events
 */

// launch modal
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// close modal
close.addEventListener('click', closeModal);

// get values from form fields
form.addEventListener('submit', (event) => {
  event.preventDefault();
  formFields.firstname.value = firstname.value;
  formFields.lastname.value = lastname.value;
  formFields.email.value = email.value;
  formFields.birthdate.value = birthdate.value;
  formFields.nbTournament.value = nbTournament.value;
  formFields.termsOfUse.value = termsOfUse.checked;
  formFields.newsletter.value = newsletter.checked;
  formFields.location.value = Object.values(locations).find((location) => location.checked === true).value;

  validate(formFields);
});

import { formState } from './formStore.js';
import * as validateForm from './utils/validationSchema.js';

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
const modalbg = document.querySelector('.form');
const modalBtn = document.querySelectorAll('.modal-btn');
const closeForm = document.querySelector('.close-form-modal');
const closeSuccess = document.querySelector('.close-success-modal');
const form = document.querySelector('form');
const successModal = document.querySelector('.success-modal');
const submitBtn = document.querySelector('.btn-submit');

export const firstname = document.querySelector('#firstname');
export const lastname = document.querySelector('#lastname');
export const email = document.querySelector('#email');
export const birthdate = document.querySelector('#birthdate');
export const nbTournament = document.querySelector('#nbTournament');
export const termsOfUse = document.querySelector('#termsOfUse');
export const newsletter = document.querySelector('#newsletter');

// form fields
export const fields = document.querySelectorAll('.form-field');
export const locations = document.getElementsByName('location');

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}

function launchSuccesModal() {
  modalbg.style.display = 'none';
  successModal.style.display = 'block';
}

function closeSuccessModal() {
  successModal.style.display = 'none';
}

function displayError() {
  Object.entries(formState).forEach((field) => {
    if (field[0] !== 'isTrusted') {
      const fieldError = document.querySelector(`.${field[0]}-error`);
      if (!field[1].valid) {
        fieldError.style.display = 'block';
      } else {
        fieldError.style.display = 'none';
      }
    }
  });
}

function fieldValidation(field, formState) {
  if (formState.value) {
    if (formState.valid === true) {
      field.style.borderColor = 'green';
      displayError(field);
    } else {
      field.style.borderColor = 'red';
      displayError(field);
    }
  } else {
    field.style.borderColor = '';
  }
}

function postForm(formState) {
  let formIsValid = true;
  Object.entries(formState).forEach((formField) => {
    if (!formField[1].valid) {
      displayError();
      return (formIsValid = false);
    }
  });
  return formIsValid;
}

//

/**
 * Events
 */

// launch modal
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));
submitBtn.addEventListener('click', postForm);

// close modal
closeForm.addEventListener('click', closeModal);
closeSuccess.addEventListener('click', closeSuccessModal);

firstname.addEventListener('change', (e) => {
  formState.firstname.value = e.target.value;
  validateForm.onChangeValidateName(formState.firstname);
  fieldValidation(firstname, formState.firstname);
});

lastname.addEventListener('change', (e) => {
  formState.lastname.value = e.target.value;
  validateForm.onChangeValidateName(formState.lastname);
  fieldValidation(lastname, formState.lastname);
});

email.addEventListener('change', (e) => {
  formState.email.value = e.target.value;
  validateForm.onChangeValidateEmail(formState.email);
  fieldValidation(email, formState.email);
});

birthdate.addEventListener('change', (e) => {
  formState.birthdate.value = e.target.value;
  validateForm.onChangeValidateBirthdate(formState.birthdate);
  fieldValidation(birthdate, formState.birthdate);
});

nbTournament.addEventListener('change', (e) => {
  formState.nbTournament.value = parseInt(e.target.value);
  validateForm.onChangeValidateNbTournament(formState.nbTournament);
  fieldValidation(nbTournament, formState.nbTournament);
});

locations.forEach((location) => {
  location.addEventListener('click', (e) => {
    formState.location.value = e.target.value;
    formState.location.valid = true;
  });
});

termsOfUse.addEventListener('click', (e) => {
  formState.termsOfUse.value = e.target.checked;
  validateForm.onClickValidateTermsOfUse(formState.termsOfUse);
});

newsletter.addEventListener('click', (e) => {
  formState.newsletter.value = e.target.checked;
});

// get values from form fields
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (postForm(formState)) {
    launchSuccesModal();
  }
});

// validate email field
export function onChangeValidateEmail(emailState) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(emailState.value)) {
    emailState.valid = true;
    return true;
  }
  emailState.valid = false;
  return false;
}

// validate name fields
export function onChangeValidateName(nameState) {
  if (typeof nameState.value === 'string' && nameState.value.length > 2) {
    nameState.valid = true;
    return true;
  }
  nameState.valid = false;
  return false;
}

export function onChangeValidateBirthdate(birthdateState) {
  const birthYear = new Date(birthdateState.value).getFullYear();
  const currentYear = new Date();
  if (birthYear > !currentYear.getFullYear() - 1 && birthYear < currentYear.getFullYear() - 6) {
    birthdateState.valid = true;
    return true;
  }
  birthdateState.valid = false;
  return false;
}

export function onChangeValidateNbTournament(nbTournamentState) {
  if (nbTournamentState.value >= 0 && nbTournamentState.value !== '') {
    nbTournamentState.valid = true;
    return true;
  }
  nbTournamentState.valid = false;
  return false;
}

export function onClickValidateTermsOfUse(termsOfUseState) {
  if(termsOfUseState.value) {
    termsOfUseState.valid = true;
    return true;
  }
  termsOfUseState.valid = false;
  return false;
}



const validateForm = (email, password) => {
  if (!email && !password) {
    setErrorMsg(
      'Oops, there was an issue signing in: Password and Email are required.'
    );
    return false;
  } else if (!email) {
    setErrorMsg('Oops, there was an issue signing in: Email is required.');
    return false;
  } else if (!password) {
    setErrorMsg('Oops, there was an issue signing in: Password is required.');
    return false;
  }
  return true;
};

export default validateForm;

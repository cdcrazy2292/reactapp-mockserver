const validateForm = (email, password) => {
  const errors = [];
  if (email.trim() === '') {
    errors.push('Email is required.');
  } else if (
    !/\S+@\S+\.\S+/.test(email) ||
    email.length < 5 ||
    email.length > 50
  ) {
    errors.push('Please enter a valid email address.');
  }
  if (password.trim() === '') {
    errors.push('Password is required.');
  } else if (!(/[ -~]{8,50}/.test(password) && /\d+/.test(password))) {
    errors.push('Please enter a valid password.');
  }
  return errors;
};

export default validateForm;

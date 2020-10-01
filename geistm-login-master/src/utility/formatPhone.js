const formatPhone = (phone) => {
  const matchFormat = phone.match(/^(\+1|)?(\d{3})(\d{3})(\d{4})$/);
  if (matchFormat) {
    return `${matchFormat[1] || ''} (${matchFormat[2]}) ${matchFormat[3]}-${
      matchFormat[4]
    }`;
  } else {
    return phone;
  }
};

export default formatPhone;

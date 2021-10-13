
const getRndInteger = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return false;
  }
  const randomNumber = (Math.random() *(max-min + 1)) + min;
  return Math.round(randomNumber);
};

getRndInteger(2, 6);

const getRndDecimal = (min, max, decimal) => {
  if (min < 0 || max < 0 || min >= max) {
    return false;
  }
  const randomNumber = (Math.random() *(max-min + 1)) + min;
  return randomNumber.toFixed(decimal);
};

getRndDecimal(2.5, 5.7, 3);

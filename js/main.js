<<<<<<< HEAD
=======
const getRndInteger = (min, max) => {
  if (min >= 0 && max >= 0 && max >= min) {
    return Math.round((Math.random() *(max-min + 1)) + min);
  }
  return 'Введите корректные значения';
};

getRndInteger(2, 6);

const getRndDecimal = (min, max, decimal) => {
  if (min >= 0 && max >= 0 && max >= min && decimal >= 0) {
    return (Math.random() *(max-min + 1) + min).toFixed(decimal);
  }
  return 'Введите корректные значения';
};

getRndDecimal(2.5, 5.7, 3);

>>>>>>> 43b7a26548fb5016d4f9316d18346d7f4e85d33d


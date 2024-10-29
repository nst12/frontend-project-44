export const getRandomNumber = (max, min = 0) => {
  //   Реализация получения случайного числа в диапазоне от min до max
  //   На вход могут приниматься и целые, и дробные числа
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};
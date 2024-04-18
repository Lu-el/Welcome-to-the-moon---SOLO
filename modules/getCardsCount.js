export const getCardsCount = (array, className) => {
  const spanNumber = document.querySelector(`.${className}`);
  spanNumber.textContent = array.length;
}
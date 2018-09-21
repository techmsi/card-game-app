export const CARD_FACE_UP = true;
export const CARD_FACE_DOWN = false;

export const isString = value =>
  typeof value === 'string' || value instanceof String;

export const isNumber = value => typeof +value === 'number' && isFinite(+value);

export const halveArray = arr => {
  const END = arr.length;
  const HALF = Math.floor(END / 2);

  return [arr.slice(0, HALF), arr.slice(HALF, END)];
};

export const getCardValue = cardValue =>
  isNumber(cardValue) ? +cardValue : cardValue[0] === 'A' ? 1 : 10;

export const getPoints = cards => {
  const visibleCards = cards.filter(o => o.face === CARD_FACE_UP);

  const sumOfCardsDisplayed = visibleCards.reduce((total, amount) => {
    return total + getCardValue(amount.value);
  }, 0);

  console.log(
    `(${visibleCards.length}) cards shown = ${sumOfCardsDisplayed} pts`
  );

  return sumOfCardsDisplayed;
};

export const getAngle = (previousAngle, itemIndex, totalItems) => {
  let minRotation = 45;
  let maxRotation = 90;

  previousAngle = itemIndex === 0 ? -minRotation : previousAngle;
  let perCardRotation = Math.floor(maxRotation / totalItems);

  return previousAngle + perCardRotation;
};

export const updateItem = (arr, itemId, newItem) => {
  console.log('UPDATE', arr, itemId, newItem);

  const updatedArray = arr.map(
    item => (item.code === itemId ? { ...item, ...newItem } : item)
  );

  console.table(updatedArray, ['code', 'face']);

  return updatedArray;
};

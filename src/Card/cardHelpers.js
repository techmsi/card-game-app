import { isNumber } from "../helpers";

const cardFaceImages = {
  K: "https://openclipart.org/download/282637/PlayingCardKing.svg",
  Q: "https://openclipart.org/download/282635/PlayingCardQueen.svg",
  J: "https://openclipart.org/download/282633/PlayingCardJack.svg"
};

export const getSymbolLayout = value => {
  if (isNumber(value)) value = +value;

  let layout = {
    left: 0,
    middle: 0,
    right: 0
  };

  switch (value) {
    case 2:
    case 3:
      layout.middle = value;
      return layout;

    case 4:
    case 6:
      layout.left = value / 2;
      layout.right = value / 2;
      return layout;

    case 5:
    case 7:
    case 9:
      layout.left = Math.floor(value / 2);
      layout.middle = 1;
      layout.right = Math.floor(value / 2);
      return layout;

    case 8:
      layout.left = 3;
      layout.middle = 2;
      layout.right = 3;
      return layout;

    case 10:
      layout.left = 4;
      layout.middle = 2;
      layout.right = 4;
      return layout;

    case "K":
    case "Q":
    case "J":
      layout.middle = cardFaceImages[value];
      return layout;
    case "A":
    default:
      layout.middle = 1;
      return layout;
  }
};

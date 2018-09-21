import { CARD_FACE_UP, CARD_FACE_DOWN } from "../helpers";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

export const turnFaceDown = cards =>
  cards.map(o => {
    o.face = CARD_FACE_DOWN;
    return o;
  });

export const turnFaceUp = cards =>
  cards.map(o => {
    o.face = CARD_FACE_UP;
    return o;
  });

export const getDeckId = () => {
  return fetch(`${API_BASE_URL}new/shuffle/?deck_count=1`).then(r => r.json());
};

export const getFirstCards = (deck_id, startingCards = "10") => {
  return fetch(`${API_BASE_URL}${deck_id}/draw/?count=${startingCards}`)
    .then(r => r.json())
    .then(data => {
      const newState = {
        remaining: data.remaining,
        deckId: data.deck_id,
        cards: turnFaceDown(data.cards)
      };

      return newState;
    });
};

export const drawCard = (deck_id, amount = 2) => {
  return fetch(`${API_BASE_URL}${deck_id}/draw/?count=${amount}`)
    .then(r => r.json())
    .then(data => {
      const newState = {
        remaining: data.remaining,
        cards: turnFaceDown(data.cards)
      };

      return newState;
    });
};

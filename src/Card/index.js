import React from 'react';

import { CardValue, CardShell, FaceGroup } from '../styles/Cards';
import { SuitColumn, SuitColumnMiddle, SuitGroup } from '../styles/Suits';

import { isNumber } from '../helpers';
import { getSymbolLayout } from './cardHelpers';

import SuitDisplay, { SuitSymbol, SuitFace } from './Suit';

const PictureCard = ({ suit, image }) => (
  <FaceGroup>
    <SuitFace image={image} suit={suit} />
  </FaceGroup>
);

const NumberCard = ({ left, right, middle, suit }) => (
  <SuitGroup>
    <SuitDisplay value={left} suit={suit} />
    <SuitDisplay value={middle} suit={suit} />
    <SuitDisplay value={right} suit={suit} />
  </SuitGroup>
);

const Card = ({ code, suit, value: originalValue, angle }) => {
  suit = suit.toLowerCase();
  const [firstLetter = null] = originalValue;

  const isAce = firstLetter === 'A';
  let value = isNumber(originalValue) ? +originalValue : firstLetter;
  const { middle } = getSymbolLayout(value);

  return (
    <CardShell angle={angle}>
      <SuitColumn>
        <CardValue suit={suit}>{value}</CardValue>
        <SuitSymbol suit={suit} size="tiny" />
      </SuitColumn>

      <SuitColumnMiddle>
        {isAce ? (
          <SuitSymbol suit={suit} size="large" />
        ) : isNumber(value) ? (
          <NumberCard suit={suit} {...getSymbolLayout(value)} />
        ) : (
          <PictureCard image={middle} suit={suit} />
        )}
      </SuitColumnMiddle>

      <SuitColumn align="end" upturned>
        <CardValue suit={suit}>{value}</CardValue>
        <SuitSymbol suit={suit} size="tiny" />
      </SuitColumn>
    </CardShell>
  );
};

export default Card;

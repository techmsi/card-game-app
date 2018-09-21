import React from "react";
import { BaseSuit, BlackSuit, RedSuit, SuitGroupItem } from "../styles/Suits";

export const SuitSymbol = props =>
  ["hearts", "diamonds"].indexOf(props.suit) !== -1 ? (
    <RedSuit {...props} />
  ) : (
    <BlackSuit {...props} />
  );

export const SuitFace = ({ suit, image }) => (
  <BaseSuit>
    <img src={image} />
  </BaseSuit>
);

const SuitDisplay = ({ value, ...props }) => (
  <SuitGroupItem>
    {Array(value)
      .fill(0)
      .map((o, i) => (
        <SuitSymbol
          key={`suit-symbol-${i}`}
          {...props}
          upturned={i !== 0 && i === value - 1}
        />
      ))}
  </SuitGroupItem>
);

export default SuitDisplay;

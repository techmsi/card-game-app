import styled, { css } from "styled-components";

const _SUITS = {
  diamonds: "♦",
  hearts: "♥",
  clubs: "♣",
  spades: "♠"
};

const _SIZES = {
  tiny: 0.9,
  normal: 2.3,
  large: 5.5
};

export const BaseSuit = styled.div`
  font-size: ${({ size = "normal" }) => _SIZES[size]}rem;
  ${({ upturned }) =>
    upturned &&
    css`
      transform: rotate(180deg);
    `};
`;

export const BlackSuit = styled(BaseSuit)`
&:after {
  content: "${({ suit }) => _SUITS[suit]}";
  color: black;

 text-shadow:
  -1px -1px 0 #ccc,  
  1px -1px 0 #555,
  -1px 1px 0 #555,
  1px 1px 0 #555;
}
`;

export const RedSuit = styled(BaseSuit)`
&:after {
  content: "${({ suit }) => _SUITS[suit]}";
  color: red;

  text-shadow:
    -1px -1px 0 pink,
    1px -1px 0 orange,  
    -1px 1px 0 orangered,
    1px 1px 0 pink;
}
`;

export const SuitColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex- ${({ align = "start" }) => align};
  ${({ upturned }) =>
    upturned &&
    css`
      transform: rotate(180deg);
    `};
`;

export const SuitColumnMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0;
`;

export const SuitGroupItem = styled.li`
  flex: 1 0;

  &:nth-child(2) {
    align-self: center;
  }
`;

export const SuitGroup = styled.ul`
  display: flex;
  align-items: center;
  flex: 1 0;
`;

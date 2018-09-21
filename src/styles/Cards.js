import styled, { css } from 'styled-components';

const Flexed = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardValue = styled.p`
  font-size: 1.6rem;
  font-family: 'Bungee', sans-serif;
  color: ${({ suit }) =>
    ['hearts', 'diamonds'].indexOf(suit) !== -1 ? 'red' : 'black'};
`;

export const CardFixedWidth = styled(Flexed)`
  height: 15rem;
  width: 12rem;
`;

export const CardShell = styled(CardFixedWidth)`
  background-color: beige;
  border: 1px solid #d6d0b5;
  border-radius: 0.25rem;
  box-shadow: 1px 2px 3px #76725f;
  font-size: 1.6rem;
  padding: 0.25rem;
  cursor: pointer;
  ${({ angle }) =>
    angle &&
    css`
      transform: rotate(${angle}deg);
      transform-origin: bottom;
    `};
`;

const CardBackPattern = styled(CardShell)`
  background-image: url("data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%23f2f0e4' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

export const CardBackDesign = styled(CardBackPattern)`
  border: 15px solid #b6b090;
  background-color: #c1bb99;
  box-shadow: 0 0 0 2px #706c57, 0 0 0 3px #b6b090, 0 0 0 1px #706c57;
`;

export const FlipShell = styled(CardFixedWidth)`
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 600ms ease;
  ${({ flipped = 0 }) =>
    flipped &&
    css`
      transform: rotateY(${flipped}deg);
    `};
`;

export const FlipFace = styled.div`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const FlipFaceFront = styled(FlipFace)`
  z-index: 2;
  transform: rotateY(0deg);
`;

export const FlipFaceBack = styled(FlipFace)`
  transform: rotateY(180deg);
`;

export const FaceGroup = styled.li`
  border: 1px solid #555;
  align-self: center;
  margin: 0.25rem;
  padding: 1px;

  & > *:nth-of-type(1) {
    font-size: 1.5rem;
    align-self: flex-start;
  }
  & > *:nth-of-type(3) {
    font-size: 1.5rem;
    align-self: flex-end;
  }
`;

import styled, { css } from 'styled-components';

const FlexDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexItem = styled.div`
  margin: 0.25rem;
  padding: 0.25rem;
  text-align: center;
  flex: 1 0;
  width: 100%;
  ${({ minh }) =>
    minh &&
    css`
      min-height: ${minh};
    `};
`;
export const Button = styled.button`
  background: #111;
  color: white;
  font-size: 1.2rem;
  border: 1px solid #333;
  padding: 0.5rem 1.5rem;
`;
export const ButtonLink = styled(Button)`
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Page = styled(FlexDiv)``;
export const Header = styled(FlexDiv)`
  h1,
  h2 {
    color: white;
    text-align: center;
  }
`;
export const Content = styled(FlexItem)`
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
`;

export const TextContent = styled.p`
  color: gray;
  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}
  font-family: ${({ strong }) => (strong ? 'Bungee' : 'Cantarell')}, sans-serif;
  font-size: 1.4rem;
  padding: 1.4rem 0;
`;

export const Subheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;

export const ControlBar = styled(Subheader)`
  background-color: rgba(0, 0, 0, 0.5);
  border: 3px solid #000;

  & h2 {
    color: #fff;
  }
  & .points {
    color: #fff;
    font-size: 1.3rem;
    white-space: nowrap;
  }
`;

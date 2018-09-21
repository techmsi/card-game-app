import React from 'react';
import { Link } from 'react-router-dom';

import { Page, TextContent, Header, ButtonLink } from '../styles/Layout';

const Welcome = () => (
  <Page className="welcome">
    <Header>
      <h1>Cards, Cards, Cards!</h1>
    </Header>

    <TextContent center>Click Begin to Start a Game</TextContent>

    <TextContent strong>Can you win?</TextContent>

    <ButtonLink>
      <Link to="/play/10">Begin</Link>
    </ButtonLink>
  </Page>
);

export default Welcome;

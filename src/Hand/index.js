import React, { Component } from 'react';
import { Page, Content, Header, Button, ControlBar } from '../styles/Layout';
import { getAngle } from '../helpers';

import CardFlip from '../Card/CardFlip';
import Points from '../Points/';

class Hand extends Component {
  state = {
    fan: false
  };

  toggleFan = () => {
    this.setState(prevState => ({ fan: !prevState.fan }));
  };

  render() {
    const { fan } = this.state;
    const { cards, onDeal, roleName = 'player', points } = this.props;

    let angle = 0;
    let classes = `hand ${fan ? 'fan' : 'stacked'}`;

    return (
      <Page>
        <ControlBar>
          <h2>{roleName}</h2>
          <Points points={points} roleName={roleName} />

          <div>
            <Button onClick={onDeal}>Deal</Button>
          </div>
        </ControlBar>

        <Content minh="60vh" className={classes}>
          {cards &&
            cards.map((card, i) => {
              if (fan) angle = getAngle(angle, i, cards.length);

              return (
                <CardFlip
                  key={card.code}
                  angle={angle}
                  {...card}
                  {...this.props}
                />
              );
            })}
        </Content>
      </Page>
    );
  }
}

export default Hand;

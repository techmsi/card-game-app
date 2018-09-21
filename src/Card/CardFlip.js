import React, { Component } from 'react';
import { CARD_FACE_DOWN } from '../helpers';

import {
  CardBackDesign,
  FlipShell,
  FlipFaceFront,
  FlipFaceBack
} from '../styles/Cards';

import Card from './';

class CardFlip extends Component {
  state = {
    face: this.props.face || CARD_FACE_DOWN
  };

  flipFace = () => {
    const { face } = this.state;
    const { onFlip, roleName, code, angle } = this.props;
    console.log(`CardFlip - flip: (${code}) was ${face ? 'Up' : 'Down'}`);

    this.setState(prevState => ({ face: !prevState.face }));

    onFlip(roleName, code, !this.state.face);
  };

  componentDidMount() {
    const { code, roleName, angle } = this.props;

    console.log(`
    ${roleName} [${angle}deg] - State (${code}): ${this.state.face}
    ${roleName} [${angle}deg] -  Props (${code}): ${this.props.face}
    `);
  }

  render() {
    return (
      <FlipShell flipped={this.state.face ? 0 : 180} onClick={this.flipFace}>
        <div className="flipper">
          <FlipFaceFront className="front">
            <Card {...this.props} />
          </FlipFaceFront>

          <FlipFaceBack className="back">
            <CardBackDesign angle={this.props.angle} />
          </FlipFaceBack>
        </div>
      </FlipShell>
    );
  }
}

export default CardFlip;

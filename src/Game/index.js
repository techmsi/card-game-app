import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hand from '../Hand/';

import { getDeckId, getFirstCards, drawCard, turnFaceUp } from '../Api/';

import { halveArray, updateItem, getPoints } from '../helpers';
import {
  Page,
  Header,
  ButtonLink,
  Content,
  TextContent
} from '../styles/Layout';

const GameOver = ({ playerPoints, dealerPoints }) => (
  <Page className="game-over">
    <Header>
      <h1> Game Over.</h1>
      <h2> You win!</h2>
    </Header>
    <Content>
      <TextContent>Player: {playerPoints}</TextContent>
      <TextContent>Dealer: {dealerPoints}</TextContent>
    </Content>
    <ButtonLink>
      <Link to="/">Play Again?</Link>
    </ButtonLink>
  </Page>
);

class Game extends Component {
  state = {
    startingCards: this.props.match.params.startingCards || 10,
    remaining: 0,
    gameOver: false,
    deckId: 0,
    dealerPoints: 0,
    playerPoints: 0,
    dealerPile: [],
    playerPile: []
  };

  setCardsInGame = data => {
    const { cards, ...newState } = data;
    const [dealerPile, playerPile] = halveArray(cards);

    const updatedDealerCards = turnFaceUp(dealerPile);

    this.setState({
      ...newState,
      dealerPile: updatedDealerCards,
      dealerPoints: getPoints(updatedDealerCards),
      playerPile
    });
  };

  addCardsToGame = data => {
    const { playerPile, dealerPile } = this.state;
    const { cards, remaining } = data;
    const [dealerCard, playerCard] = halveArray(cards);

    this.setState({
      remaining,
      dealerPile: [...dealerPile, ...turnFaceUp(dealerCard)],
      playerPile: [...playerPile, ...playerCard]
    });
  };

  start = () => {
    const { startingCards } = this.state;

    getDeckId()
      .then(({ deck_id }) => getFirstCards(deck_id, startingCards))
      .then(this.setCardsInGame);
  };

  end = () => {
    const { playerPoints, dealerPoints } = this.state;

    this.setState({ gameOver: playerPoints > dealerPoints });
  };

  deal = () => {
    const { deckId } = this.state;

    drawCard(deckId).then(this.addCardsToGame);
  };

  flip = (roleName, cardId, face) => {
    const { dealerPile, playerPile } = this.state;

    const pile = roleName === 'dealer' ? dealerPile : playerPile;
    const updateCards = updateItem(pile, cardId, { face });

    console.log(`${roleName}Pile flip`, cardId);

    this.setState({
      [`${roleName}Pile`]: updateCards,
      [`${roleName}Points`]: getPoints(updateCards)
    });

    this.end();
  };

  componentDidMount() {
    this.start();
  }

  render() {
    const {
      gameOver,
      remaining,
      dealerPile,
      playerPile,
      playerPoints,
      dealerPoints
    } = this.state;

    return (
      <div>
        {gameOver ? (
          <GameOver playerPoints={playerPoints} dealerPoints={dealerPoints} />
        ) : (
          <Page className="game">
            {remaining > 0 && (
              <TextContent> {remaining} cards left in deck </TextContent>
            )}
            <Hand
              roleName="player"
              cards={playerPile}
              points={playerPoints}
              onFlip={this.flip}
              onDeal={this.deal}
            />
            <Hand
              roleName="dealer"
              cards={dealerPile}
              points={dealerPoints}
              onFlip={this.flip}
              onDeal={this.deal}
            />
          </Page>
        )}
      </div>
    );
  }
}

export default Game;

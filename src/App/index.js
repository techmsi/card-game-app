import React, { Component } from "react";
import { Route } from "react-router-dom";

import Game from "../Game/";
import Welcome from "../Welcome/";

class App extends Component {
  render() {
    return (
      <section className="app">
        <main>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/play/:startingCards" component={Game} />
        </main>
      </section>
    );
  }
}

export default App;

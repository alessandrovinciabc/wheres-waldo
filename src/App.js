import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home.js';
import Game from './Pages/Game.js';
import Leaderboard from './Pages/Leaderboard.js';
import MissingPage from './Pages/MissingPage.js';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact render={Game} />
        <Route path="/leaderboard" exact render={Leaderboard} />
        <Route path="/*" component={MissingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

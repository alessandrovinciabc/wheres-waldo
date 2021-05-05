import React from 'react';

import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Home from './Pages/Home.js';
import Leaderboard from './Pages/Leaderboard.js';
import MissingPage from './Pages/MissingPage.js';

import GlobalStyle from './globalStyles.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={withRouter(Home)} />
          <Route
            path="/leaderboard"
            exact
            component={withRouter(Leaderboard)}
          />
          <Route path="/*" component={MissingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import history from 'utils/History';
import Welcome from './components/Welcome';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default Routes;

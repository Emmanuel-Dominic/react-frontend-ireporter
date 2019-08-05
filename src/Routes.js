import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Footer from 'components/Footer';
import history from 'utils/History';
import Home from 'components/Home';
import Login from 'components/Login';
import Navigation from 'components/Navigation';
import PrivateRoute from 'utils/PrivateRoute';
import React from 'react';
import Signup from 'components/registration';
import Welcome from 'components/Welcome';

function Routes() {
  return (
    <Router history={history}>
      <Navigation />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <PrivateRoute
          exact
          path="/home"
          component={Welcome}
          isAuthenticated={sessionStorage.getItem('isLoggedIn')}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;

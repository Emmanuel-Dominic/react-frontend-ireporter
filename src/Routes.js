import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import Navigation from 'components/Navigation';
import history from 'utils/History';
import Footer from 'components/Footer';
import PrivateRoute from 'utils/PrivateRoute';
import Login from 'components/Login';
import Welcome from 'components/Welcome';
import Home from 'components/Home';


function Routes() {
  return (
    <Router history={history}>
      <Navigation />
      <Switch>
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

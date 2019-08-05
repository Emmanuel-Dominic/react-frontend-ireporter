/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import 'assets/css/Navigation.css';
import history from 'utils/History';

export default class Navigation extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    sessionStorage.removeItem('token');
    sessionStorage.setItem('isLoggedIn', false);
    history.push('/login');
  };

  render() {
    const loggedIn = sessionStorage.getItem('isLoggedIn');
    return (
      <nav className="navbar navbar-light navbar-expand-md navbar-fixed-top navigation-clean-button">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span className="head-text">&#8465;&#8477;&#8455;</span>
            PORT
            <span className="head-text">&#8455;&#8477;</span>
          </Link>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navcol-1"
            className="navbar-toggler"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <div className="ml-auto navbar-text actions">
              {
                (loggedIn === 'true')
                  ? (
                    <React.Fragment>
                      <Link to="/home" className="btn btn-light action-buttons">
                        Home
                      </Link>
                      <Link to="/login" className="btn btn-light action-buttons" onClick={this.handleClick}>logout</Link>
                    </React.Fragment>
                  )
                  : (
                    <React.Fragment>
                      <Link to="/login" className="btn btn-light action-buttons">Log In</Link>
                    </React.Fragment>
                  )
              }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

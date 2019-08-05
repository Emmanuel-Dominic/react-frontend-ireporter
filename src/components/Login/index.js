/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import React from 'react';
import loginAction from 'store/actions/Login';

import 'assets/scss/Login.scss';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      detailError: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const credentials = {
      email,
      password,
    };
    const { login } = this.props;

    if (this.validateDataEntry(email, password)) {
      return;
    }
    await login(credentials);
    this.setState({
      email: '',
      password: '',
    });
  }

  validateDataEntry(email, password) {
    if ((email === '') || (password === '')) {
      toast.dismiss();
      this.setState({
        detailError: 'Email & Password fields are Required',
      });
      return true;
    }
    return false;
  }

  render() {
    const { detailError } = this.state;
    return (
      <div className="body">
        <form className="container">
          <h2 className="sr-only text-center">
            <strong className="head-text">Login</strong>
            Form
          </h2>
          <div className="illustration">
            <i className="icon ion-ios-navigate" />
          </div>
          <p className="errors">{detailError}</p>
          <div className="container">
            <div className="form-group">
              <input id="email" type="email" name="email" onChange={this.handleChange} placeholder="Email" className="form-control" />
            </div>
            <div className="form-group">
              <input
                id="password"
                type="password"
                name="password"
                onChange={this.handleChange}
                placeholder="Password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                Login
              </button>
            </div>
          </div>
          <a href="#" className="forgot">
            Forgot your email or password?
          </a>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
});

export default connect(mapStateToProps, { login: loginAction })(Login);

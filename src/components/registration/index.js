import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Registration from 'store/actions/registration';
import '../../assets/scss/Signup.scss';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      emailError: '',
      usernameError: '',
      firstnameError: '',
      lastnameError: '',
      phonenumberError: '',
      passwordError: '',
      confirmpassword: '',
      confirmPasswordError: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  validateFormData = () => {
    const {
      email,
      userName,
      firstName,
      lastName,
      phoneNumber,
      password,
      confirmpassword,
    } = this.state;

    // eslint-disable-next-line no-useless-escape
    const passwordValidation = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');
    // eslint-disable-next-line no-useless-escape
    const usernameValidation = new RegExp('^([a-zA-Z\d]+[-_])*[a-zA-Z\d*]+$');

    this.setState({
      emailError: email.length > 8 ? null : 'Please enter a vaild Email Address',
      usernameError: userName.length > 3 && usernameValidation.test(userName) ? null : 'Username should be 4 characters and cannot be integers, have white spaces or symbol',
      firstnameError: firstName.length > 4 && usernameValidation.test(firstName) ? null : 'firstname should be 4 characters and cannot be integers, have white spaces or symbol',
      lastnameError: lastName.length > 4 && usernameValidation.test(lastName) ? null : 'lastname should be 4 characters and cannot be integers, have white spaces or symbol',
      phonenumberError: phoneNumber.length > 9 ? null : 'Please provide a valid Phonenumber of 10 digits and starting with \'07\'',
      passwordError: passwordValidation.test(password) ? null : 'Password should be 8 to more characters with atleast a number, capital and small letter.',
      confirmPasswordError: confirmpassword === password ? null : 'Passwords don\'t match',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      email, userName, firstName, lastName, phoneNumber, password
    } = this.state;
    const { Register } = this.props;
    const newUser = {
      email, userName, firstName, lastName, phoneNumber, password
    };
    Register(newUser);
    this.setState({
      email: '',
      userName: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: '',
      confirmpassword: '',
    });
  }

  render() {
    const {
      email,
      userName,
      firstName,
      lastName,
      phoneNumber,
      password,
      confirmpassword,
      emailError,
      usernameError,
      firstnameError,
      lastnameError,
      phonenumberError,
      passwordError,
      confirmPasswordError,
    } = this.state;

    return (
      <div className="register-photo body">
        <div className="form-container container">
          <div className="image-holder" />
          <form>
            <h2 className="text-center">
              <strong className="head-text">Create </strong>
            an account
            </h2>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                onKeyUp={this.validateFormData}
                placeholder="Email"
                className="form-control"
                required
              />
              <p className="error">{emailError}</p>
              <input
                id="username"
                type="text"
                name="userName"
                value={userName}
                onChange={this.handleChange}
                onKeyUp={this.validateFormData}
                placeholder="Username"
                className="form-control"
                required
              />
              <p className="error">{usernameError}</p>
              <input
                id="firstname"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                onKeyUp={this.validateFormData}
                placeholder="firstName"
                className="form-control"
                required
              />
              <p className="error">{firstnameError}</p>
              <input
                id="lastname"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                onKeyUp={this.validateFormData}
                placeholder="lastName"
                className="form-control"
                required
              />
              <p className="error">{lastnameError}</p>
              <input
                id="phonenumber"
                type="number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
                onKeyUp={this.validateFormData}
                placeholder="phoneNumber"
                className="form-control"
                required
              />
              <p className="error">{phonenumberError}</p>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                onKeyUp={this.validateFormData}
                placeholder="Password"
                className="form-control"
                required
              />
              <p className="error">{passwordError}</p>
              <input
                id="confirmpassword"
                type="password"
                name="confirmpassword"
                value={confirmpassword}
                onChange={this.handleChange}
                onKeyUp={this.validateFormData}
                placeholder="Confirmpassword"
                className="form-control"
                required
              />
              <p className="error">{confirmPasswordError}</p>
            </div>
            <div className="form-group">
              <Link to="/" className="already">Changed your mind? Cancel registration.</Link>
            </div>
            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary btn-block">Signup</button>
            <Link to="/login" className="already">You already have an account? Login here.</Link>
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  Register: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps, { Register: Registration })(Signup);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Login from './Login';
import loginUserAction from '../../../actions/auth/loginAction';
import { toastFailure } from '../../../utils/toast';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      emailError: '',
      passwordError: '',
    };
  }

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  validateDataEntry(email, password) {
    if ((email === '') || (password === '')) {
      toast.dismiss();
      toastFailure('Email & Password fields are Required', 'A');
      this.setState({ isLoading: false });
      return true;
    }
    return false;
  }

  handleSubmit = async (e) => {
    this.setState({ isLoading: true });
    e.preventDefault();
    const { email, password } = this.state;
    const login = {
      email,
      password,
    };
    const { loginAction } = this.props;

    if (this.validateDataEntry(email, password)) {
      return;
    }
    await loginAction(login);
    this.setState({
        isLoading: false,
        email: '',
        password: '',
    });
  }


  render() {
    const { isLoading } = this.state;
    return (
      <Login
        handleSubmit={this.handleSubmit}
        onInputChange={this.onInputChange}
        isLoading={isLoading}
      />
    );
  }
}

LoginContainer.propTypes = {
  loginAction: PropTypes.func.isRequired,
};


export const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
});

export default connect(mapStateToProps, { loginAction: loginUserAction })(LoginContainer);
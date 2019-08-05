import axios from 'axios';
import { toast } from 'react-toastify';
import { LoginConstants } from 'store/actions/actionTypes';
import history from 'utils/History';
import { toastSuccess, toastFailure } from 'utils/Toast';


const loginAction = loginData => dispatch => axios.post('https://flask-backend-ireporter.herokuapp.com/api/v3/auth/login', loginData)
  .then((response) => {
    sessionStorage.setItem('token', response.data.token);
    sessionStorage.setItem('isLoggedIn', true);
    dispatch({
      type: LoginConstants.LOGIN_SUCCESS,
      payload: response.data.message,
    });
    toast.dismiss();
    history.push('/home');
  })
  .catch((error) => {
    dispatch({
      type: LoginConstants.LOGIN_FAILURE,
      payload: error.response.data.message,
    });
    if (error.response.data) {
      toast.dismiss();
      toastFailure(`${error.response.data.message}`, 'A');
    }
  });

export default loginAction;

import axios from 'axios';
import { RegistrationConstants } from 'store/actions/actionTypes';
import { toastSuccess, toastFailure } from 'utils/Toast';
import history from 'utils/History';


export const Registration = newUser => (dispatch) => {
  dispatch({
    type: RegistrationConstants.REGISTER_REQUEST,
  });
  return axios
    .post('https://flask-backend-ireporter.herokuapp.com/api/v3/auth/signup', newUser, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then((response) => {
      dispatch({
        type: RegistrationConstants.REGISTER_SUCCESS,
        payload: response.data.message,
      });
      toastSuccess(`Account created and you are ${response.data.message}`, 'A');
      history.push('/login');
    })
    .catch((error) => {
      if (error.response.status === 400) {
        dispatch({
          type: RegistrationConstants.REGISTER_FAILURE,
          payload: error.response.data.error.message,
        });
        toastFailure(`${error.response.data.error.message}`, 'A');
      } else if (error.response.status === 406) {
        dispatch({
          type: RegistrationConstants.REGISTER_FAILURE,
          payload: error.response.data.error,
        });
        toastFailure('Please check the your fields again', 'A');
      }
    });
};

export default Registration;

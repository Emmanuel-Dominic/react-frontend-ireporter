import { LoginConstants } from 'store/actions/actionTypes';
import initialLogin from 'store/reducers/initialState';


const loginReducer = (state = initialLogin, { type, payload }) => {
  switch (type) {
    case LoginConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        isUserLoggedIn: true,
        logged_in: true,
      };
    case LoginConstants.LOGIN_FAILED:
      return {
        ...state,
        errors: payload.errors.error[0],
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;

import { combineReducers } from 'redux';
import loginReducer from 'store/reducers/Login';

export default combineReducers({
  user: loginReducer,
});

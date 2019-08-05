import { combineReducers } from 'redux';
import userReducer from './reducers/userReduce';

const rootReducers = combineReducers({
  userReducer,
});

export default rootReducers;

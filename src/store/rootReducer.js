import { combineReducers } from 'redux';
import IncidentReducer from 'store/reducers/Incident';
import loginReducer from 'store/reducers/Login';

import userReducer from './reducers/userReduce';

const rootReducers = combineReducers({
  userReducer, user: loginReducer, incidents: IncidentReducer,
});

export default rootReducers;

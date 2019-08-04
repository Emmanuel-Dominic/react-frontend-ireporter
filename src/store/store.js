import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Root from 'store/reducers/Root';

const initialState = {};
const middleWare = [thunk];

const store = createStore(
  Root,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare)),
);
export default store;

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import loginUserAction from 'store/actions/Login';
import { LoginConstants } from 'store/actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authenticating', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  const data = { data: { token: 'eyJ07urLnYhISdyAqTAsPYVmwluFHxfn0g8pXa0JV14eVU', email: 'email@gmail.com' } };

  it('user successfully logs in', () => {
    const loginDetails = {
      email: 'email',
      password: 'password',
    };
    const initialState = {
      isLoggingIn: null,
      isUserLoggedIn: false,
      token: '',
    };
    const expectedResponse = {
      data: {
        email: 'email@gmail.com',
        token: 'eyJ07urLnYhISdyAqTAsPYVmwluFHxfn0g8pXa0JV14eVU',
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    // eslint-disable-next-line max-len
    const expectedActions = [{ type: LoginConstants.LOGIN_SUCCESS, payload: data }];
    const store = mockStore(initialState);
    return store
      .dispatch(loginUserAction(loginDetails))
      .then(() => {
        expect(expectedResponse).toEqual(expectedActions[0].payload);
      });
  });
});

import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import Registration from 'store/actions/registration';
import { RegistrationConstants } from 'store/actions/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('registration action testing', () => {
  beforeEach(() => moxios.install(axios));
  afterEach(() => moxios.uninstall(axios));

  const data = {
    message: undefined,
    userName: 'username',
    firstName: 'username',
    lastName: 'username',
    phoneNumber: '07000000000',
    email: 'email@gmail.com',
    password: 'password',
  };
  const error406 = {
    message: undefined,
    userName: '',
    firstName: 'username',
    lastName: 'username',
    phoneNumber: '07000000000',
    email: 'email@gmail.com',
    password: 'password',
  };
  it('should register user successfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 201, response: data });
    });

    const expectedAction = [
      {
        type: RegistrationConstants.REGISTER_REQUEST,
      },
      {
        payload: undefined,
        type: RegistrationConstants.REGISTER_SUCCESS,
      },
    ];

    const store = mockStore({});
    return store
      .dispatch(Registration(data))
      .then(
        () => {
          expect(store.getActions()).toEqual(expectedAction);
        },
      );
  });
  it('should register user failure with 406', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 406, response: error406 });
    });

    const expectedAction = [
      {
        type: RegistrationConstants.REGISTER_REQUEST,
      },
      {
        payload: undefined,
        type: RegistrationConstants.REGISTER_FAILURE,
      },
    ];

    const store = mockStore({});
    return store
      .dispatch(Registration(error406))
      .then(
        () => {
          expect(store.getActions()).toEqual(expectedAction);
        },
      );
  });
});

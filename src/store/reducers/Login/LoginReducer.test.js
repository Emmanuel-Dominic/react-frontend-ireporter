import loginReducer from 'store/reducers/Login';


describe('reducer initial state', () => {
  it('should handle LOGIN_USER_FAILURE', () => {
    expect(
      loginReducer(
        {
          isUserLoggedIn: false,
          token: '',
        },
        {
          type: 'LOGIN_USER_FAILURE',
          payload: {
            errors: {
              error: [
                'error message here',
              ],
            },
          },
        },
      ),
    ).toEqual({
      isUserLoggedIn: false,
      token: '',
      errors: 'error message here',
    });
  });
  it('should handle LOGIN_USER_SUCCESS', () => {
    expect(
      loginReducer(
        {
          isUserLoggedIn: false,
          token: '',
        },
        {
          type: 'LOGIN_USER_SUCCESS',
          payload: {
            response: {
              data: {},
            },
          },
        },
      ),
    ).toEqual({});
  });
});

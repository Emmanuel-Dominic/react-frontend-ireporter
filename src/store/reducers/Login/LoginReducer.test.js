import loginReducer from '../../reducers/auth/login/loginReducer';


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
      message: 'error message here',
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Signup, mapStateToProps } from 'components/registration';


function renderSignup(args) {
  const defaultProps = {
    actions: { Register: jest.fn() },
    user: {},
    Register: jest.fn(),
  };
  const props = { ...defaultProps, ...args };
  return shallow(<Signup {...props} />);
}

describe('registration page', () => {
  const wrapper = renderSignup();
  const wrapperInst = wrapper.instance();

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle input change', () => {
    const event = {
      target: {
        name: 'userName',
        value: 'emma',
      },
    };
    wrapperInst.handleChange(event);
    expect(wrapperInst.state.userName).toBe('emma');
  });

  it('should handle submit and clear form after', () => {
    wrapper.setState({
      userName: 'emma',
      firstName: 'emma',
      lastName: 'emma',
      phoneNumber: '07000000000',
      email: 'email@email.com',
      password: 'password',
      confirmpassword: 'confirmpassword',
    });

    expect(wrapperInst.state.userName).toBe('emma');
    expect(wrapperInst.state.firstName).toBe('emma');
    expect(wrapperInst.state.lastName).toBe('emma');
    expect(wrapperInst.state.phoneNumber).toBe('07000000000');
    expect(wrapperInst.state.email).toBe('email@email.com');
    expect(wrapperInst.state.password).toBe('password');
    expect(wrapperInst.state.confirmpassword).toBe('confirmpassword');

    const event = {
      Register: jest.fn(),
      target: {
        type: 'submit',
      },
      preventDefault: jest.fn(),
    };
    wrapperInst.handleSubmit(event);
    expect(wrapperInst.state.userName).toBe('');
    expect(wrapperInst.state.firstName).toBe('');
    expect(wrapperInst.state.lastName).toBe('');
    expect(wrapperInst.state.phoneNumber).toBe('');
    expect(wrapperInst.state.email).toBe('');
    expect(wrapperInst.state.password).toBe('');
    expect(wrapperInst.state.confirmpassword).toBe('');
  });

  it('should map tostate to props', () => {
    const mockedState = {
      user: {
        registering: true,
      },
    };
    const state = mapStateToProps(mockedState);
    expect(state.user.registering).toBe(true);
  });
});

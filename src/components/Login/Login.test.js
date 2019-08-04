import React from 'react';
import { shallow } from 'enzyme';
import { Login } from 'components/Login';

// test to check if the App component matches the snapshot
describe('<Login />', () => {
  it('should match snapshot', () => {
    const props = {
      login: jest.fn(),
      handleSubmit: jest.fn(),
      hanndleChange: jest.fn(),
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});

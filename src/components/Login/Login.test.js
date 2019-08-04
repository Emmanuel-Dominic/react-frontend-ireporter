import React from 'react';
import { shallow } from 'enzyme';
import Login from 'components/Login';

// test to check if the App component matches the snapshot
describe('Login Component', () => {
  it('renders without crashing', () => {
    const component = shallow(<Login />);
    expect(component.exists()).toBe(true);
  });
});

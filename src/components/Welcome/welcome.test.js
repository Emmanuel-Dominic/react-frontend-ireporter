import React from 'react';
import { shallow } from 'enzyme';
import Welcome from 'components/Welcome';

// test to check if the App component matches the snapshot
describe('Welcome Component', () => {
  it('renders without crashing', () => {
    const component = shallow(<Welcome />);
    expect(component.exists()).toBe(true);
  });
});

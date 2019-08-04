import React from 'react';
import { shallow } from 'enzyme';
import Navigation from 'components/Navigation';

// test to check if the App component matches the snapshot
describe('Navigation Component', () => {
  it('renders without crashing', () => {
    const component = shallow(<Navigation />);
    expect(component.exists()).toBe(true);
  });
});

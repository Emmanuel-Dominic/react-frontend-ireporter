import React from 'react';
import { shallow } from 'enzyme';
import Home from 'components/Home';

// test to check if the App component matches the snapshot
describe('Home Component', () => {
  it('renders without crashing', () => {
    const component = shallow(<Home />);
    expect(component.exists()).toBe(true);
  });
});

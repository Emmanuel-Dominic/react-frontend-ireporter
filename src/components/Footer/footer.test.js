import React from 'react';
import { shallow } from 'enzyme';
import Footer from 'components/Footer';

// test to check if the App component matches the snapshot
describe('Footer Component', () => {
  it('renders without crashing', () => {
    const component = shallow(<Footer />);
    expect(component.exists()).toBe(true);
  });
});

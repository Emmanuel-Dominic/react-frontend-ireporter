import React from 'react';
import { shallow } from 'enzyme';
import Loading from 'components/Loading';

// test to check if the App component matches the snapshot
describe('Loading Component', () => {
  it('renders without crashing', () => {
    const component = shallow(<Loading />);
    expect(component.exists()).toBe(true);
  });
});

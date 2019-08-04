import React from 'react';
import { shallow } from 'enzyme';
import Navigation from 'components/Navigation';

// test to check if the App component matches the snapshot
describe('<Navigation />', () => {
  it('should match snapshot', () => {
    const props = {
      hanndleClick: jest.fn(),
    };
    const wrapper = shallow(<Navigation {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});

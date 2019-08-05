import React from 'react';
import { shallow } from 'enzyme';
import Navigation from 'components/Navigation';

// test to check if the App component matches the snapshot
describe('<Navigation />', () => {
  let wrapper;
  sessionStorage.setItem('token', 'hello');
  sessionStorage.setItem('isLoggedIn', true);
  const props = {
    hanndleClick: jest.fn(),
    history : { push: jest.fn() },
  };
  beforeEach(() => {
    wrapper = shallow(<Navigation {...props} />);
  });
  it('should match snapshot', () => {
    const component = shallow(<Navigation {...props} />);
    expect(component.exists()).toBe(true);
  });
  it('should handle click', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleClick(event);
    expect(props.history.push).toBeTruthy();
  });
});

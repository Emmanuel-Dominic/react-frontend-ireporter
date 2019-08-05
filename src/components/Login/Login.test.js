import React from 'react';
import { shallow } from 'enzyme';
import { Login } from 'components/Login';


describe('<LoginUser />', () => {
  let wrapper;
  const props = {
    login: jest.fn(),
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<Login {...props} />);
  });
  it('should match snapshot', () => {
    const component = shallow(<Login {...props} />);
    expect(component).toMatchSnapshot();
  });
  it('should handle submit and change', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'userName',
        value: 'emma',
      },
    };
    wrapper.instance().handleSubmit(event);
    wrapper.instance().handleChange(event);
    expect(props).toBeTruthy();
  });
});

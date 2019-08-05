import React from 'react';
import { shallow } from 'enzyme';
import { Login } from 'components/Login';


describe('<LoginUser />', () => {
  it('should match snapshot', () => {
    const props = {
      login: jest.fn(),
      handleSubmit: jest.fn(),
      handleChange: jest.fn(),
    };
    const wrapper = shallow(<Login {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});

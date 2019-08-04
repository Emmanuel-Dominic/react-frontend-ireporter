import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';

import PrivateRoute from 'src/privateRoute';


describe('<PrivateRoute />', () => {
  const wrapper = shallow(<PrivateRoute />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { ViewIncident } from 'components/Incident';


describe('<LoginUser />', () => {
  let wrapper;
  const props = {
    incidents: [{
      comment: 'Mbale highway broken down after a previous track accident last month amonth ',
      created_on: 'Thu, 10 Jan 2019 04:01:14 GMT',
      imagename: null,
      incident_id: 5,
      incident_type: 'intervention',
      latitude: 5.38974,
      longtitude: 0.33737,
      status_: 'draft',
      title: 'Road Breakdown',
      user_name: 'Manuel',
      videoname: null
    }],
    login: jest.fn(),
    componentDidMount: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<ViewIncident {...props} />);
  });
  it('should match snapshot', () => {
    const component = shallow(<ViewIncident {...props} />);
    expect(component).toMatchSnapshot();
  });
});

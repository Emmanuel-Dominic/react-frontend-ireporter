import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import axios from 'axios';
import IncidentsAction from 'store/actions/Incident';
import { IncidentConstants } from 'store/actions/actionTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Render incidents', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });

  it('should render incidents', () => {
    const initialState = {
      incidents: [],
    };
    const expectedResponse = {
      data: {
        data: [{
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
        }]
      },
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedResponse,
      });
    });
    const expectedActions = [{
      type: IncidentConstants.VIEW_INCIDENT_SUCCESS,
      payload: expectedResponse
    }];
    const store = mockStore(initialState);
    return store
      .dispatch(IncidentsAction())
      .then(() => {
        expect(expectedResponse).toEqual(expectedActions.payload);
      });
  });
});

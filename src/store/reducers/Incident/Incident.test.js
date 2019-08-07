import IncidentReducer from 'store/reducers/Incident';
import { initialIncidentState } from 'store/reducers/initialState';
import { IncidentsAction } from 'store/actions/Incident';

describe('view reducer initial state', () => {
  it('should return the initial state', () => {
    expect(IncidentReducer(initialIncidentState, IncidentsAction)).toEqual({ incidents: [] });
  });
});

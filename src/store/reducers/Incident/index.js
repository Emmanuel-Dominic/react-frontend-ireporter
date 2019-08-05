import { IncidentConstants } from 'store/actions/actionTypes';
import { initialIncidentState } from 'store/reducers/initialState';

const IncidentReducer = (state = initialIncidentState, action) => {
  switch (action.type) {
    case IncidentConstants.VIEW_INCIDENT_SUCCESS:
      return {
        ...state,
        incidents: action.payload,
      };
    case IncidentConstants.VIEW_INCIDENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default IncidentReducer;

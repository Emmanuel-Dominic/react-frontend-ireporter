import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

import { IncidentConstants } from 'store/actions/actionTypes';

const IncidentsUrl = 'https://flask-backend-ireporter.herokuapp.com/api/v3/admin/';
let Url;
export const IncidentsAction = url => (dispatch) => {
  if (url === 'red-flags') {
    Url = `${IncidentsUrl}red-flags`;
  } else if (url === 'intervention') {
    Url = `${IncidentsUrl}intervention`;
  }
  return axios.get(Url, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  })
    .then((response) => {
      dispatch({
        type: IncidentConstants.VIEW_INCIDENT_SUCCESS,
        payload: response.data.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: IncidentConstants.VIEW_INCIDENT_FAILURE,
        payload: error.response.data.message,
      });
    });
};

export default IncidentsAction;

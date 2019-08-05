/* eslint-disable no-underscore-dangle */
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';
import React from 'react';

import '../../assets/scss/Home.scss';
import { IncidentsAction } from 'store/actions/Incident';

export class ViewIncident extends React.Component {
  componentDidMount() {
    const { viewIncidents } = this.props;
    viewIncidents('intervention');
  }

  render() {
    const {
      incidents,
    } = this.props;
    return (
      <React.Fragment>
        <ToastContainer />
        <div className="incident-body">
          {incidents.map(incident => (
            <div className="container card card-body" key={incident.incident_id}>
              <h4 className="col-md-10 title">{incident.title}</h4>
              <div className="row">
                <p className="col-md-2">{incident.user_name}</p>
                <p className="col-md-2">{incident.status_}</p>
              </div>
              <div className="row">
                <p className="col-md-2">{incident.latitude}</p>
                <p className="col-md-2">{incident.longtitude}</p>
              </div>
              <p>{incident.comment}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = ({ incidents }) => ({
  incidents: incidents.incidents,
});

ViewIncident.propTypes = {
  viewIncidents: PropTypes.func,
}.isRequired;

ViewIncident.defaultProps = {
  viewIncidents: () => {},
};

export default connect(
  mapStateToProps,
  { viewIncidents: IncidentsAction },
)(ViewIncident);

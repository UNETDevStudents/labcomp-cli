import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Reservation from './components/Reservation';

import reservationActions from './api';

class Container extends Component {
  componentWillMount() {
    this.props.base();
  }
  render() {
    return <Reservation {...this.props} />;
  }
}

Container.propTypes = {
  base: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { reservation } = state;
  return {
    infrastructure: reservation.base.response && reservation.base.response.infrastructures,
    blocks: reservation.base.response && reservation.base.response.blocks,
    days: reservation.base.response && reservation.base.response.days,
    // data: reservation.data,
    // timetables: reservation.timetables,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  base: reservationActions.base,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);

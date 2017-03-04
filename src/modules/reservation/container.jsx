import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Reservation from './components/Reservation';

import reservationActions from './api';

class Container extends Component {
  componentWillMount() {
    this.props.base();
  }
  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.infrastructure)) {
      this.props.getCalendarByRoom(nextProps.selected.room);
    }
  }
  render() {
    return <Reservation {...this.props} />;
  }
}

Container.propTypes = {
  base: PropTypes.func.isRequired,
  getCalendarByRoom: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { reservation } = state;
  return {
    infrastructure: reservation.base.response ? reservation.base.response.infrastructures : {},
    blocks: reservation.base.response ? reservation.base.response.blocks : {},
    days: reservation.base.response ? reservation.base.response.days : {},
    data: reservation.data,
    selected: reservation.selected,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  base: reservationActions.base,
  getCalendarByRoom: reservationActions.getCalendarByRoom,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);

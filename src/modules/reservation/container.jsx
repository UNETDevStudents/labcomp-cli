import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

import Reservation from './components/Reservation';

import reservationActions from './api';

class Container extends Component {
  componentWillMount() {
    this.props.base();

    let requestGetCalendarByRoom = false;
    this.setState({
      requestGetCalendarByRoom
    });
  }
  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.infrastructure) && nextProps.selected.room) {
      if (!this.state.requestGetCalendarByRoom) {
        this.setState({requestGetCalendarByRoom : true});
        this.props.getCalendarByRoom(null, nextProps.selected.room);
      }
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
    getCalendarByRoom: reservation.getCalendarByRoom.response,
    data: reservation.data,
    selected: reservation.selected,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  base: reservationActions.base,
  getCalendarByRoom: reservationActions.getCalendarByRoom,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);

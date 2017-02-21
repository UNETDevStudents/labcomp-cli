import { connect } from 'react-redux';

import Reservation from './components/Reservation';

const mapStateToProps = (state) => {
  const { reservation } = state;
  return {
    infrastructure: reservation.base.infrastructure,
    blocks: reservation.blocks,
    days: reservation.days,
    data: reservation.data,
    timetables: reservation.timetables,
  };
};

export default connect(mapStateToProps)(Reservation);

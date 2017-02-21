import { connect } from 'react-redux';

import Reservation from './components/Reservation';

const mapStateToProps = (state) => {
  const { reservation: { base: { infrastructure }, blocks, days, data, timetables } } = state;
  return {
    infrastructure,
    blocks,
    days,
    data,
    timetables,
  };
};

export default connect(mapStateToProps)(Reservation);

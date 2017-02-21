import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';

import Tabs from '../../../main/components/Tabs';
import Rooms from '../Rooms';
import Calendar from '../Calendar';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '1',
    };
  }
  render() {
    const { infrastructure, blocks, days, data } = this.props;
    const { selected } = this.state;
    return (
      <Tabs
        list={map(infrastructure, (item, key) => ({ key, name: item.name, icon: item.icon }))}
        selected={selected}
      >
        <Rooms rooms={infrastructure[selected].rooms} />
        <Calendar blocks={blocks} days={days} data={data} />
      </Tabs>
    );
  }
}

Reservation.propTypes = {
  infrastructure: PropTypes.func.isRequired,
  blocks: PropTypes.func.isRequired,
  days: PropTypes.func.isRequired,
  data: PropTypes.func.isRequired,
};

export default Reservation;

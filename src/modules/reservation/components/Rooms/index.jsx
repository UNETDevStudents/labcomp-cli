import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';

import classnames from 'classnames';

import './styles.sass';

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '1',
    };
  }
  render() {
    const { rooms } = this.props;
    const { selected } = this.state;
    return (
      <div className="rooms">
        <ul>
          {map(rooms, (room, key) => (
            <li key={key}>
              <a className={classnames({ selected })}>{room.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Rooms.propTypes = {
  rooms: PropTypes.func.isRequired,
};

export default Rooms;

import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Tab = ({ name, selected }) => (
  <li className="tabs-head-tab">
    <a className={classnames({ selected })}>
      {name}
    </a>
  </li>
);

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Tab;

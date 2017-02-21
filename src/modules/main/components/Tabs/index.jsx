import React, { Component, PropTypes } from 'react';

import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: '1',
    };
  }
  render() {
    const { children, list, selected } = this.props;
    return (
      <div className="tabs">
        <div className="tabs-head">
          <ul>
            {list.map(item => (
              <Tab key={item.key} selected={selected === item.key} name={item.name} />
            ))}
          </ul>
        </div>
        <div className="tabs-content">
          {children}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Tabs;

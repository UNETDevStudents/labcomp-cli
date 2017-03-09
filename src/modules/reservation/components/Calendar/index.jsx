import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import keys from 'lodash/keys';
import isEmpty from 'lodash/isEmpty';

// import classnames from 'classnames';

import Button from '../../../main/components/Button';

import './styles.sass';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: '20 - 26',
    };
  }
  render() {
    const { blocks, days, data } = this.props;
    return (
      <div className="calendar">
        <div className="calendar-head">
          <div className="calendar-head-item calendar-head-controls">
            <div className="button-group">
              <Button type="icon" size="small" icon="icon-arrow-left" />
              <Button type="icon" size="small" icon="icon-arrow-right" />
              <Button text="Hoy" type="no-icon" size="small" icon="icon-arrow-right" />
            </div>
          </div>
          <div className="calendar-head-item calendar-head-week">
            <h3>20 - 26 de Febrero</h3>
          </div>
          <div className="calendar-head-item calendar-head-week" />
        </div>
        <div className="calendar-body">
          <div className="calendar-body-separators">
            <div className="u-row alendar-body-blocks">
              <div className="u-column--x-uhd1 calendar-blocks" />
              <div className="u-column--x-uhd11 calendar-days">
                <div className="calendar-blocks-item" />
                { map(blocks, (block, key) => {
                  if (parseInt(key, 10) < keys(blocks).length) {
                    return (
                      <div key={key} className="calendar-blocks-item">
                        <div className="calendar-blocks-item-half" />
                        <div className="calendar-blocks-item-half" />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          <div className="u-row calendar-body-blocks">
            <div className="u-column--x-uhd1 calendar-blocks">
              <div className="calendar-blocks-item" />
              { map(blocks, (block, key) => (
                <div key={key} className="calendar-blocks-item">
                  <span>{block}</span>
                </div>
              ))}
            </div>
            <div className="u-column--x-uhd11 calendar-days">
              <div className="calendar-days-head">
                { map(days, (day, key) => (
                  <div key={key} className="calendar-days-head-day">
                    {day}
                  </div>
                ))}
              </div>
              <div className="calendar-days-data">
                { !isEmpty(data) && map(data.days, (day, key) => (
                  <div key={key} className="calendar-days-data-column">
                    { map(day.blocks, (block, blockKey) => {
                      if (block.section) {
                        return (
                          <div
                            key={blockKey}
                            className="calendar-blocks-item calendar-blocks-item-data"
                            style={{ backgroundColor: block.section.color }}
                          >
                            <p>{block.section.subject}</p>
                          </div>
                        );
                      }
                      return (
                        <div className="calendar-blocks-item calendar-blocks-item-data" />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  blocks: PropTypes.func.isRequired,
  days: PropTypes.func.isRequired,
  data: PropTypes.func.isRequired,
};

export default Calendar;
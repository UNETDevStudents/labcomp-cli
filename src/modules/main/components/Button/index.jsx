import React, { PropTypes } from 'react';
import './styles.sass';

const Button = ({ text, type = 'default', size = 'regular', color = 'primary', icon = '' }) => (
  <a
    href="/"
    className={`button button--${type} button--${size} button--${color}`}
  >
    {type !== 'icon' ? text : <i className={icon} />}
  </a>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Button;

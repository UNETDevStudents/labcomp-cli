import React, { PropTypes } from 'react';
import './style.sass';

const Button = ({ text, type = 'default', color = 'primary' }) => (
  <a href="/" className={`button button--${type} button--${color}`}>
    {text}
  </a>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;

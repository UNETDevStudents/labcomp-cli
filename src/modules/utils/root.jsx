import React, { PropTypes } from 'react';

import { Provider } from 'react-redux';

const Root = ({ store, children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Root.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Root;

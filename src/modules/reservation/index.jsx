import React from 'react';
import { render } from 'react-dom';

// Utils
import { Root } from '../utils/redux';

import mainStore from '../main';
import Container from './container';

render(
  <Root store={mainStore}>
    <Container />
  </Root>,
  document.getElementById('Reservation'),
);

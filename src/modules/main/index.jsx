// Utils
import { configureStore } from '../utils/redux';

import rootReducer from './rootReducer';

const pathname = window.location.pathname.replace(/\//g, '');
const el = document.getElementById(`menu-${pathname}`);

if (el) el.classList.add('active');

const initialState = {};

export default configureStore(initialState, rootReducer);

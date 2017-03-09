import { RESERVATION_SET_INITIAL_IDS } from './actionTypes';

const setInitialIDs = iDs => ({
    type: RESERVATION_SET_INITIAL_IDS,
    payload: iDs,
});

export default {
    setInitialIDs,
};
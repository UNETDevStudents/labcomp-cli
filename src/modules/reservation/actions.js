import { RESERVATION_SET_INITIAL_IDS, RESERVATION_SET_CALENDAR_DATA } from './actionTypes';

const setInitialIDs = iDs => ({
    type: RESERVATION_SET_INITIAL_IDS,
    payload: iDs,
});

const setCalendarData = data => ({
    type: RESERVATION_SET_CALENDAR_DATA,
    payload: data.rows,
});

export default {
    setInitialIDs,
    setCalendarData
};

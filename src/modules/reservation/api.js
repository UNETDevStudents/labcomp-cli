import map from 'lodash/map';

// APIModule
import { Module } from '../utils/APIModule';
import actions from './actions';

export const init = new Module('init', [
  {
    name: 'base',
    method: 'GET',
    url: 'timetable/base',
    afterSuccess: (dispatch, json) => {
      const infrastructureID = map(json.infrastructures, (infrastructure, key) => (key))[0];
      const roomID = map(json.infrastructures[infrastructureID].rooms, (room, key) => (key))[0];
      const iDs = [infrastructureID, roomID];
      dispatch(actions.setInitialIDs(iDs));
    },
  },
  {
    name: 'getCalendarByRoom',
    method: 'GET',
    url: 'timetable/room/:id',
    afterSuccess: () => (null),
  }]);

export default {
  base: init.actions.base.request,
  getCalendarByRoom: init.actions.getCalendarByRoom.request,
};

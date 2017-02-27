// APIModule
import { Module } from '../utils/APIModule';

export const init = new Module('init', [
  {
    name: 'base',
    method: 'GET',
    url: 'timetable/base',
  }]);

export default {
  base: init.actions.base.request,
};

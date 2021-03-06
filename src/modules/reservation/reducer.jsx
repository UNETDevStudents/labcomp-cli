import { combineReducers } from 'redux';

const initialState = {
  1: {
    name: 'Laboratorios',
    icon: '',
    rooms: {
      1: {
        name: 'C01',
        characteristics: [
          {
            name: 'Infraestructura',
            icon: '',
            characteristics: [
              {
                name: 'Aire Acondicionado',
                icon: '',
                value: 'Si',
              },
            ],
          },
        ],
      },
    },
  },
};

// const rooms = (state = {}, action = {}) => {
//   switch (action.type) {
//     default: {
//       return state;
//     }
//   }
// };

const infrastructure = (state = initialState, action = {}) => {
  switch (action.type) {
  default:
    return state;
  }
};

const base = combineReducers({
  infrastructure,
});

export default combineReducers({
  blocks: () => ({
    1: '7:00',
    2: '8:00',
    3: '9:00',
    4: '10:00',
    5: '11:00',
    6: '12:00',
    7: '13:00',
    8: '14:00',
    9: '15:00',
    10: '16:00',
    11: '17:00',
    12: '18:00',
    13: '19:00',
    14: '20:00',
    15: '21:00',
    16: '22:00',
  }),
  days: () => ({
    0: 'Lunes',
    1: 'Martes',
    2: 'Miércoles',
    3: 'Jueves',
    4: 'Vernes',
    5: 'Sábado',
    6: 'Domingo',
  }),
  base,
  data: () => ({
    days: {
      0: {
        blocks: {
          1: {
            section: {
              code: 'm1',
              subject: 'Multimedia',
              subject_code: '123',
              color: '#e2c376',
            },
          },
          2: {
            section: {
              code: 'm1',
              subject: 'Multimedia',
              subject_code: '123',
              color: '#e2c376',
            },
          },
        },
      },
      1: {
        blocks: {},
      },
      2: {
        blocks: {},
      },
      3: {
        blocks: {
          1: {},
          2: {},
          3: {},
          4: {
            section: {
              code: 'm1',
              subject: 'Computación I',
              subject_code: '123',
              color: '#e2c376',
            },
          },
        },
      },
      4: {
        blocks: {},
      },
      5: {
        blocks: {},
      },
      6: {
        blocks: {},
      },
    },
  }),
  timetables: () => ({
    rows: [
      {
        section: {
          code: 'm1',
          subject: 'Multimedia',
          subject_code: '123',
          color: '#e2c376',
        },
        day: 0,
        blocks: [
          1,
          2,
        ],
      },
    ],
  }),
});

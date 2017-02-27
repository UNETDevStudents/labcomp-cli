import { API } from '../../env';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

export class ActionType {
  constructor(moduleName, name) {
    this.keys = {};
    ['REQUEST', 'SUCCESS', 'FAILURE'].forEach((result) => {
      const value = `${moduleName}/${name.toUpperCase()}@${result.toUpperCase()}`;
      this.keys[result] = `${moduleName}_${name}_${result}`.toUpperCase();
      this[this.keys[result]] = value;
    });
  }
  getConstant(result) {
    return this[this.keys[result]];
  }
}

export class Action {
  constructor(self, moduleName, initialState) {
    this.initialState = Object.assign({
      requested: false,
    }, initialState);
    this.method = this._method(self);
    this.url = this._url(self);
    this.actionsType = new ActionType(moduleName, self.name);
    this.reducer = this._reducer.bind(this);
    this.request = this._request.bind(this);
  }
  _method(self) {
    if (self.method) {
      return self.method;
    } else if (self.body) {
      return 'POST';
    }
    return 'GET';
  }
  _url(self) {
    if (self.url) {
      return `${API}/${self.url}`;
    }
    return `${API}/`;
  }
  _reducer(state = this.initialState, action = {}) {
    switch (action.type) {
    case this.actionsType.getConstant('REQUEST'):
      return Object.assign({}, state, {
        requested: true,
      });
    case this.actionsType.getConstant('SUCCESS'):
      return Object.assign({}, state, {
        completed: true,
        requested: false,
        response: action.args,
      });
    case this.actionsType.getConstant('FAILURE'):
      return Object.assign({}, state, {
        requested: false,
        error: action.args,
      });
    default:
      return state;
    }
  }
  _request(body = null) {
    return (dispatch) => {
      const data = {
        method: this.method,
        body,
      };
      fetch(this.url, data)
      .then(json => this._check(json))
      .then((json) => { dispatch(this.getState('REQUEST')); return json; })
      .then((json) => { dispatch(this.getState('SUCCESS', json)); return json; })
      .catch(error => dispatch(this.getState('FAILURE', error)));
    };
  }
  _check(response) {
    let res = response && response.statusText !== 'No Content' ? response.json() : {};
    if (!response.ok) {
      res = res.then((err) => {
        throw new Error(err.message);
      });
    }
    return res;
  }
  _success(json) {
    this.object.afterSuccess(json);
    return this.getState('SUCCESS', json);
  }
  _failure(json) {
    this.object.errorHandling(json);
    return this.getState('FAILURE', json);
  }
  getState(result, args = {}) {
    return {
      type: this.actionsType.getConstant(result),
      args,
    };
  }
}

export class Module {
  constructor(name, actions, initialState = {}) {
    this.name = name;
    this.actions = {};
    actions.forEach((action) => {
      this.actions[action.name] = new Action(action, name, initialState);
    });
  }
}

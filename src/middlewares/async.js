import { FETCH_USERS } from '../actions/types';

export default function({ dispatch}) {
  return next => action => {
    // If action does not have payload or a promise, send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // Otherwise, resolve the promise, replace the payload promise
    // with resolved data, and dispatch the action again
    action.payload.then(users => dispatch({
      ...action, payload: users
    }));
  };
}

import { EDIT_LOAD, FAIL_LOAD } from '../actions/loadActions.js';

const initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {
    case FAIL_LOAD:
      return state;
    case EDIT_LOAD:
      return action.payloads;
    default:
      return state;
  }
}
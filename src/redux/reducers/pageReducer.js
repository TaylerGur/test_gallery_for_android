import { EDIT_PAGE, FAIL_PAGE } from '../actions/pageActions.js';

const initialState = 1;

export default function (state = initialState, action) {
  switch (action.type) {
    case FAIL_PAGE:
      return state;
    case EDIT_PAGE:
      return action.payloads;
    default:
      return state;
  }
}
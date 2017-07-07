import { CREATE_GALLERY, ADD_GALLERY, FAIL_GALLERY } from '../actions/dataActions.js';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FAIL_GALLERY:
      return state;
    case CREATE_GALLERY:
      return action.payloads;
    case ADD_GALLERY:
      return [...state, ...action.payloads];
    default:
      return state;
  }
}
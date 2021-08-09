import {EDIT_TODO} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case EDIT_TODO:
      return payload.index;
    default:
      return state;
  }
}

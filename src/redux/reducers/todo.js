import {ADD_TODO, DELETE_TODO} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case DELETE_TODO:
      return payload.todoArr.filter(key => {
        return key.id !== payload.item;
      });

    default:
      return state;
  }
}

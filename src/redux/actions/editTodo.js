import {EDIT_TODO} from './types';
export const editTodo = index => dispatch => {
  dispatch({
    type: EDIT_TODO,
    payload: {index},
  });
};

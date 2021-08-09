import {ADD_TODO, DELETE_TODO} from './types';

export const addTodo = item => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: item,
  });
};

export const deleteData = (item, todoArr) => dispatch => {
  dispatch({
    type: DELETE_TODO,
    payload: {item, todoArr},
  });
};

import {combineReducers} from 'redux';
import todo from './todo';
import editTodo from './editTodo';

export default combineReducers({
  todo,
  editTodo,
});

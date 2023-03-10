import { combineReducers } from 'redux';

import filterReducer from './features/filters/filterSlice';
import todosReducer from './features/todos/todosSilce';

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer
});

export default rootReducer;

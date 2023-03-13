import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './features/todos/todos-reducer/todos.slice';
import filterReducer from './features/filters/filter-reducer/filter.slice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filterReducer
  }
});

export default store;

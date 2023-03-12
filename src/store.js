import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './features/todos/todosSilce';
import filterReducer from './features/filters/filterSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filterReducer
  }
});

export default store;

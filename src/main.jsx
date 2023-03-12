import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';

import './main.css';

import store from './store';
import { fetchTodos } from './features/todos/todosSilce';

store.dispatch(fetchTodos);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

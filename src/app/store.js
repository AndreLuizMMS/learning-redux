import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../app/features/counter/counterSlice';
import postsReducer from '../app/features/blog/posts/postsSlice';
import usersSlice from './features/blog/users/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersSlice
  }
});

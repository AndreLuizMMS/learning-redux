import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../app/features/counter/counterSlice';
import postsReducer from '../app/features/blog/posts/postsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  }
});

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    userId: '2'
  },
  {
    id: '2',
    title: 'Slices...',
    content: 'Yes, the more I say slice, the more I want pizza.',
    userId: '3'
  }
];
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        //tipo um formatador de payload
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId
          }
        };
      }
    }
  }
});
export const { postAdded } = postsSlice.actions;

export const selectAllPosts = state => state.posts;

export default postsSlice.reducer;

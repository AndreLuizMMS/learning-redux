import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from '../postsSlice';
import { selectAllUsers } from '../../users/usersSlice';

const initialPostState = {
  title: '',
  content: '',
  userId: ''
};

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const [post, setPost] = useState(initialPostState);
  const { content, title, userId } = post;

  const handleChange = e => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postAdded(content, title, userId));
    setPost(initialPostState);
  };

  const usersOptions = users.map(user => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          value={title}
          onChange={handleChange}
          required
        />

        <label htmlFor="postAuthor">Post Author</label>
        <select
          id="postAuthor"
          name="userId"
          value={userId}
          onChange={handleChange}
        >
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="content"
          value={content}
          onChange={handleChange}
          required
        />
        <button>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;

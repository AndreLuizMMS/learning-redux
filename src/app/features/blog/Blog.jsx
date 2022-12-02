//
//component
import PostsList from './posts/PostsList';
import AddPostForm from './posts/addPostForm/AddPostForm';

import './blog.styles.scss';

function Blog() {
  return (
    <div className="blog-container">
      <div className="posts">
        <AddPostForm />
        <PostsList />
      </div>
    </div>
  );
}

export default Blog;

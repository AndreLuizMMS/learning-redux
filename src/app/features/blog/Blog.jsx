import PostsList from './posts/PostsList';

import './blog.styles.scss';

function Blog() {
  return (
    <div className="blog-container">
      <div className="posts">
        <PostsList />
      </div>
    </div>
  );
}

export default Blog;

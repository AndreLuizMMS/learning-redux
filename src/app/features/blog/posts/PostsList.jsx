import { useSelector } from 'react-redux';

import './posts.styles.scss';

function PostsList() {
  const posts = useSelector(state => state.posts);

  const renderedPosts = posts.map(post => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    );
  });

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList;

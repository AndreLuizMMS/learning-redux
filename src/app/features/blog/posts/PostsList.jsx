import { useSelector } from 'react-redux';

import PostAuthor from './post author/PostAuthor';
import PostTime from './post time/PostTime';
import PostReactions from './post reactions/PostReactions';

import { selectAllPosts } from './postsSlice';

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map(post => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <PostAuthor userId={post.userId} />
        <PostTime date={post.date} />
        <PostReactions post={post} />
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

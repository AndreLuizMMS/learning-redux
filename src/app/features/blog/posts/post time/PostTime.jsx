import { parseISO, formatDistanceToNow } from 'date-fns';

const PostTime = ({ date }) => {
  let timeAgo = '';
  if (date) {
    const time = parseISO(date);
    const timePeriod = formatDistanceToNow(time);
    timeAgo = `${timePeriod} ago`;
  }

  return <span className='time-ago'>{timeAgo}</span>;
};

export default PostTime;

import React from 'react';
import Tweet from './Tweet';

function TweetList({ tweets }) {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
}

export default TweetList;

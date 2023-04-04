import React, { useEffect, useState } from 'react';
import TweetList from '../components/TweetList';

function Explore() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch popular tweets or suggested users from API
  }, []);

  return (
    <div>
      <h1>Explore</h1>
      <TweetList tweets={tweets} />
    </div>
  );
}

export default Explore;

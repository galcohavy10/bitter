import React, { useEffect, useState } from 'react';
import TweetList from '../components/TweetList';

function Home() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch tweets from API
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <TweetList tweets={tweets} />
    </div>
  );
}

export default Home;

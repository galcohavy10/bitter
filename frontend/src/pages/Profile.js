import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import TweetList from '../components/TweetList';

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch user and tweets from API
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <UserProfile user={user} />
      <TweetList tweets={tweets} />
    </div>
  );
}

export default Profile;

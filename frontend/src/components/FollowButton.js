import React from 'react';
import { Button } from '@material-ui/core';

function FollowButton({ isFollowing, onFollow, onUnfollow }) {
  const handleClick = () => {
    if (isFollowing) {
      onUnfollow();
    } else {
      onFollow();
    }
  };

  return (
    <Button onClick={handleClick} variant="contained" color="primary">
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
}

export default FollowButton;

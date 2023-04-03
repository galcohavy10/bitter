import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function CreateTweet() {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to create tweet
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Tweet
      </Button>
    </form>
  );
}

export default CreateTweet;

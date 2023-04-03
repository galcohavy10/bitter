import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function Tweet({ tweet }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{tweet.author.username}</Typography>
        <Typography variant="body1">{tweet.content}</Typography>
      </CardContent>
    </Card>
  );
}

export default Tweet;

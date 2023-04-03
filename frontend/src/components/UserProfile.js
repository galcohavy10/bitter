import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function UserProfile({ user }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{user.username}</Typography>
        <Typography variant="body1">{user.bio}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserProfile;

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Navigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Bitter
        </Typography>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Register</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;

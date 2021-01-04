import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import * as styles from './home.module.scss'; 

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [anonUsername, setAnonUsername] = useState('');

  const onSubmitLogin = () => {
    // use Switch to redirect to Login page
    if (username === '' || password === '') return;

    // TODO 
  }

  const onAnonLogin = () => {
    // use Switch to redirect to Lobby page
    // use randomly generated Anon name
  }

  const renderLogin = () => {
    return (
      <Box className={styles.login}>
        <Box>
          <TextField id='standard-basic' label='Username' />
        </Box>
        <Box>
          <TextField id='standard-basic' label='Password' />
        </Box>
        <Box>
          <Button variant='contained' color='primary' onClick={onSubmitLogin()}>Login</Button>        
        </Box>
      </Box>
    );
  };

  const renderAnonLogin = () => (
    <Box>
      <Link to='/lobby' style={{ textDecoration: 'none' }}>
        <Button variant='contained' color='secondary' onClick={onAnonLogin()}>Enter anonymously</Button>
      </Link>
    </Box>
  );
  

  return (
    <Grid>
      <Typography variant='h3'>P2P Chat</Typography>
      {renderLogin()}
      <Typography>OR</Typography>
      {renderAnonLogin()}
      <h3>Hello</h3>
    </Grid>
  );
}
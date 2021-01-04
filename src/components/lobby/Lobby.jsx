import React, { useState, useEffect } from 'react';
import { Grid, Paper, Box, Typography, TextField, Button } from '@material-ui/core';

import * as styles from './lobby.module.scss';
import defaultUserIcon from '../../assets/default-user-icon.png';

// Fake data - remove with real data later 
const friends = [
  {
    username: 'friend1',
    recentMessages: [
      { sender: 'friend1', message: 'hello' },
      { sender: 'friend1', message: 'how are you' },
      { sender: 'friend1', message: 'im friend1 1234567890123456789012345678901234456734343' }
    ]
  },
  {
    username: 'friend2',
    recentMessages: [
      { sender: 'friend2', message: 'hello' },
      { sender: 'friend2', message: 'how are you' },
    ]
  },
  {
    username: 'friend3',
    recentMessages: [
      { sender: 'friend3', message: 'hello' },
      { sender: 'friend3', message: 'im friend3' }
    ]
  },
  {
    username: 'friend4',
    recentMessages: [
      { sender: 'friend4', message: 'hello' },
      { sender: 'friend4', message: 'how are you' },
      { sender: 'friend4', message: 'im friend4' }
    ]
  },
  {
    username: 'friend5',
    recentMessages: [
      { sender: 'friend5', message: 'hello' },
      { sender: 'friend5', message: 'how are you' },
      { sender: 'You', message: 'im good thanks' },
      { sender: 'friend5', message: 'glad to hear' }
    ]
  },
  {
    username: 'friend6',
    recentMessages: [
      { sender: 'friend6', message: 'sup' },
      { sender: 'You', message: 'hey man! long time no see' },
    ]
  },
]

export default function Lobby({ username }) {
  const [currentChat, setCurrentChat] = useState({});
  const [message, setMessage] = useState('');
  // const [username, setUsername] = useState('');

  // useEffect(() => {
  //   setCurrentChat(friends[0]);
  // }, []);

  const handleLogout = () => {
    
  };

  const onSubmitMessage = () => {
    if (message === '') return;

    const updatedChat = { ...currentChat };
    updatedChat.recentMessages.push({ sender: 'You', message });

    // TODO: replace with API call to backend
    setCurrentChat(updatedChat);

    setMessage('');

  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onChangeChat = (selectedChat) => {
    setCurrentChat(selectedChat);
  };

  const renderHeader = () => {
    return (
      <Grid container xs={12}>
        <h1>Lobby</h1>
      </Grid>
    );
  };

  const renderChatList = () => {
    return (
      <Grid item xs={3} style={{ backgroundColor: 'lightblue' }}>
        <Grid className={styles.chatContainer} container direction='column' spacing={2}>
          {friends.map((friend) => renderChatItem(friend))}
        </Grid>
      </Grid>
    );
  };

  const truncateMessage = (message) => {
    return ((message.length > 20) ? (message.substring(0, 20) + '...') : message);
  };

  const renderChatItem = (friend) => {
    const lastMessage = friend.recentMessages[friend.recentMessages.length - 1];

    return (
      <Box className={styles.chatItem} onClick={() => onChangeChat(friend)} px={3} py={3}>
        <Grid key={friend.username} item xs={12}>
          <Box>
            <Typography>
              <Box fontWeight='fontWeightBold'>{friend.username}</Box> 
              <Box>{lastMessage.sender}: {truncateMessage(lastMessage.message)}</Box>
            </Typography>
          </Box>
        </Grid>
      </Box>
    );
  };

  const renderChat = () => {
    let prevSender = '';

    return (
      <Grid item xs={9} display='grid' style={{ backgroundColor: 'lightpink' }}>
        <Box>
          {Object.keys(currentChat).length === 0 ? 
            <h3>Please select a chat box from the list to start messaging a friend</h3>
            :
            <Box>
              <h3>{currentChat.username}</h3>
              {currentChat.recentMessages.map((msg) => {
                console.log(msg);
                console.log("prevSender", prevSender);
                const useIcon = (msg.sender !== prevSender || prevSender === '') ? true : false;
                const alignment = (msg.sender === 'You') ? 'right' : 'left';
                prevSender = msg.sender;

                return (
                  <Box textAlign={alignment}>
                    {useIcon && alignment === 'left' && <img src={defaultUserIcon} display='inline' width={20} height={20} alt=''/>}
                    <Typography display='inline'> {msg.message} </Typography>
                    {useIcon && alignment === 'right' && <img src={defaultUserIcon} display='inline' width={20} height={20} alt=''/>}
                  </Box>
                );
              })}
              <Box alignItems='flex-end'>
                <TextField variant="outlined" placeholder="Enter message to send" value={message} onChange={onChangeMessage} />
                <Button variant='contained' color='primary' onClick={onSubmitMessage}>Hello</Button>              
              </Box>
            </Box>
          }
        </Box>

      </Grid>
    );
  };
  
  return (
    <Grid container spacing={2} direction='column' className={styles.container}>
      <Grid item xs={12}>
        {renderHeader()}
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          {renderChatList()}
          {renderChat()}
        </Grid>
      </Grid>
    </Grid>

    // <Box bgcolor='blue'>
    //   <Grid container spacing={2}>
    //     {renderHeader()}
    //     {renderChatList()}
    //     {renderChat()}
    //   </Grid>
    // </Box>
  );
}
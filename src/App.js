import './App.css';
import { Container, Typography, Box, TextField, Button, Card, CardContent, Link, CardHeader, CardMedia } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from './actions/userActions';
import AppNavBar from './components/AppNavbar';

function App() {

  // Login search hoook
  const [login, setLogin] = useState('');
  // Action dispatch
  const dispatch = useDispatch();
  // Get user state from the store
  const user = useSelector(state => state.user.profile);

  const handleChange = (e) => {
    setLogin(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getUser(login));
  }

  return (
    <>
      <AppNavBar handleSubmit={handleSubmit} handleChange={handleChange} />
      <Container maxWidth="md" align="center" style={{ padding: "1rem" }}>
        <Box>
          <form onSubmit={handleSubmit}>
            <TextField placeholder="Enter a github username" variant="outlined" onChange={handleChange} name="login" />
            <Button type="submit" variant="contained" style={{ margin: "0 1rem", marginTop: "0.5rem" }}>Search</Button>
          </form>
        </Box>
        {
          user ?
            <Card style={{ maxWidth: "300px", margin: "1rem" }} align="left">
              <Link href={user.html_url} target="_blank">
                <CardMedia component="img" height="200" src={user.avatar_url} />
              </Link>
              <CardHeader title={user.name} subheader={user.login} />
              <CardContent>
                <Typography variant="body1" color="textPrimary">
                  {user.bio}
                </Typography>
              </CardContent>
            </Card>
            :
            ''
        }
      </Container >
    </>
  );
}

export default App;
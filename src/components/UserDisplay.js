import React, { useEffect, useState } from 'react';
import { Container, Box, TextField, Button, Grid, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from "react-redux";
import { getUser, addUser } from '../actions/userActions';
import { clearErrors } from '../actions/errorActions';

import UserCard from './UserCard';

function UserDisplay() {
    // Login search hook
    const [login, setLogin] = useState('');
    // Error alert hook
    const [errorMsg, setErrorMsg] = useState(null);
    // Action dispatch
    const dispatch = useDispatch();
    // Get user state from the store
    const user = useSelector(state => state.user.profile);
    const users = useSelector(state => state.user.users);
    const error = useSelector(state => state.error);

    useEffect(() => {
        // Check if user not found
        if (error.id === 'USER_NOT_FOUND') {
            setErrorMsg("User not found.");
        } else {
            setErrorMsg(null);
        }
    }, [errorMsg, error.id])

    const handleChange = (e) => {
        setLogin(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearAlert();
        dispatch(addUser(login));
    }

    const clearAlert = () => {
        dispatch(clearErrors());
        setErrorMsg(null);
    }

    return (
        <Container maxWidth="md" align="center" style={{ padding: "1rem" }}>
            {
                errorMsg ? <Alert severity="error" style={{ marginBottom: "1rem" }}>{errorMsg}</Alert> : null
            }
            <Box>
                <form onSubmit={handleSubmit}>
                    <TextField placeholder="Enter a github username" variant="outlined" onChange={handleChange} name="login" />
                    <Button type="submit" variant="contained" style={{ margin: "0 1rem", marginTop: "0.5rem" }}>Add</Button>
                </form>
            </Box>
            <Grid container justify="flex-start" alignItems="baseline" spacing={2} style={{ padding: "1rem" }}>
                {
                    users ? users.map(user => (
                        <Grid item xs={6} md={4}>
                            <UserCard
                                htmlURL={user.html_url}
                                avatarURL={user.avatar_url}
                                name={user.name}
                                login={user.login}
                                bio={user.bio}
                            />
                        </Grid>
                    ))
                        :
                        <Typography variant="h4" color="textSecondary" style={{ marginTop: "1rem" }}>No profiles added</Typography>
                }
            </Grid>
        </Container >
    )
}

export default UserDisplay

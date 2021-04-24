import React, { useEffect, useState } from 'react';
import { Container, Box, TextField, Button, Grid, Typography, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../actions/userActions';
import { clearErrors, duplicateError } from '../actions/errorActions';

import UserCard from './UserCard';
import { DUPLICATE_ERROR, USER_NOT_FOUND } from '../actions/types';

function UserDisplay() {
    // Login search hook
    const [login, setLogin] = useState('');
    // Error alert hook
    const [errorMsg, setErrorMsg] = useState(null);
    // Snackback open state hook
    const [open, setOpen] = useState(false);
    // Action dispatch
    const dispatch = useDispatch();
    // Get user state from the store
    const users = useSelector(state => state.user.users);
    const error = useSelector(state => state.error);

    useEffect(() => {
        // Handle errors
        switch (error.id) {
            case USER_NOT_FOUND:
                setOpen(true);
                setErrorMsg("User not found.");
                break;
            case DUPLICATE_ERROR:
                setOpen(true);
                setErrorMsg("User already added.");
                break;
            default:
                setErrorMsg(null);
        }
    }, [errorMsg, error.id])

    const handleChange = (e) => {
        setLogin(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearAlert();
        const index = users.findIndex(user => user.login === login);
        if (index !== -1) return dispatch(duplicateError());
        dispatch(addUser(login));
    }

    const clearAlert = () => {
        dispatch(clearErrors());
        setErrorMsg(null);
    }

    const handleClose = () => {
        clearAlert();
        setOpen(false);
    }

    return (
        <Container maxWidth="md" align="center" style={{ padding: "1rem" }}>
            {
                errorMsg ?
                    <Snackbar
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: "top", horizontal: "center" }}
                        autoHideDuration={18000}
                    >
                        <Alert variant="filled"
                            severity="error"
                            onClose={handleClose}
                            style={{ marginBottom: "1rem" }}
                        >
                            {errorMsg}
                        </Alert>
                    </Snackbar> : null
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
                        <Grid item xs={12} sm={4}>
                            <UserCard
                                htmlURL={user.html_url}
                                avatarURL={user.avatar_url}
                                name={user.name}
                                login={user.login}
                                bio={user.bio}
                            />
                        </Grid>
                    )) : <Typography variant="h4" color="textSecondary" style={{ marginTop: "1rem" }}>No profiles added</Typography>
                }
            </Grid>
        </Container >
    )
}

export default UserDisplay

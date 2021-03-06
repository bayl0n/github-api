import axios from 'axios';
import { GET_USER, ADD_USER, REMOVE_USER, USER_NOT_FOUND } from './types';
import { returnErrors } from './errorActions';

export const getUser = (login) => dispatch => {
    axios.get(`https://api.github.com/users/${login}`).then(res => {
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    })
        .catch(error => {
            dispatch(returnErrors(error.response.data, error.response.status, 'USER_NOT_FOUND'));
            dispatch({
                type: USER_NOT_FOUND
            });
        });
}

export const addUser = (login) => dispatch => {
    axios.get(`https://api.github.com/users/${login}`).then(res => {
        dispatch({
            type: ADD_USER,
            payload: res.data
        });
    })
        .catch(error => {
            // If user not found in API, throw user not found
            dispatch(returnErrors(error.response.data, error.response.status, 'USER_NOT_FOUND'));
            dispatch({
                type: USER_NOT_FOUND
            });
        });
}

export const removeUser = (login) => dispatch => {
    dispatch({
        type: REMOVE_USER,
        payload: login
    });
}
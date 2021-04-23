import axios from 'axios';
import { GET_USER } from './types';

export const getUser = (login) => dispatch => {
    axios.get(`https://api.github.com/users/${login}`).then(res => {
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    })
        .catch(error => {
            console.log(error);
        })
}
import { ADD_USER, GET_USER } from '../actions/types';

const initialState = {
    profile: null,
    users: []
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                profile: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state;
    }

}
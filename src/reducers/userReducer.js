import { GET_USER } from '../actions/types';

const initialState = {
    profile: null
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                state,
                profile: action.payload
            }
        default:
            return state;
    }

}
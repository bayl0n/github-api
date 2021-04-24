import { GET_ERRORS, CLEAR_ERRORS, DUPLICATE_ERROR } from './types';

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { msg, status, id }
    };
};

export const duplicateError = () => dispatch => {
    dispatch({
        type: DUPLICATE_ERROR,
        payload: {
            msg: "User is already added",
            id: "DUPLICATE_ERROR"
        }
    });
}

// CLEAR ERRORS
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
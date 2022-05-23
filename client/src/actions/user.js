import axios from 'axios';
import { GET_USER, GET_USERS, USER_ERROR, ADD_USER, GET_ERRORS } from './types';

// view current user
export const getCurrentUser = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/users/${id}`);

        dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get List of Users
export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/users');

        dispatch({
            type: GET_USERS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Add Users
export const addUser = (formData, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post('/api/users', formData, config);

        dispatch({
            type: ADD_USER,
            payload: res.data,
        });

        history.push('/official/admin/users');
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: USER_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

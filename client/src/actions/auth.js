import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    APPELLANT_USER_LOADED,
    LOGOUT,
    GET_ERRORS,
} from './types';

// Load user
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
};

// Login User
export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({
        email,
        password,
    });

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            // errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));

            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

// logout a user
export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};

// load current user - Appellant
export const loadUserAppellant = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/appellants/auth');

        dispatch({
            type: APPELLANT_USER_LOADED,
            payload: res.data,
        });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
};

// Register Appellant
export const register = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify(formData);

    try {
        const res = await axios.post('/api/appellants/register', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUserAppellant());
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({
                type: GET_ERRORS,
                payload: errors,
            });
        }

        dispatch({
            type: REGISTER_FAIL,
        });
    }
};

// Login as an Appellant
export const appellantLogin = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({
        email,
        password,
    });

    try {
        const res = await axios.post('/api/appellants/login', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUserAppellant());
    } catch (err) {
        const errors = err.response.data;

        if (errors) {
            dispatch({ type: GET_ERRORS, payload: errors });
        }

        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

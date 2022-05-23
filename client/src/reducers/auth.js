import jwt_decode from 'jwt-decode';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    LOGOUT,
    USER_LOADED,
    APPELLANT_USER_LOADED,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    userType: null,
    loading: true,
    user: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    let decoded;

    switch (type) {
        case USER_LOADED:
        case APPELLANT_USER_LOADED:
            const token = localStorage.getItem('token');
            decoded = jwt_decode(token);
            return {
                ...state,
                isAuthenticated: true,
                userType: decoded.user.type,
                loading: false,
                user: payload,
            };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            decoded = jwt_decode(payload.token);
            return {
                ...state,
                ...payload,
                userType: decoded.user.type,
                isAuthenticated: true,
                loading: false,
            };

        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                userType: null,
                isAuthenticated: false,
                loading: false,
            };
        default:
            return state;
    }
}

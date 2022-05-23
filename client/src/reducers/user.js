import { GET_USERS, USER_ERROR, ADD_USER, GET_USER } from '../actions/types';

const initialState = {
    users: [],
    user: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER:
            return {
                ...state,
                user: payload,
                loading: false,
            };

        case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false,
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload],
                loading: false,
            };
        case USER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}

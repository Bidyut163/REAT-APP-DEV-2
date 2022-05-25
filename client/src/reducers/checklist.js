import {
    CREATE_CHECKLIST,
    GET_CHECKLIST,
    CHECKLIST_ERROR,
} from '../actions/types';

const initialState = {
    checklist: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_CHECKLIST:
        case GET_CHECKLIST:
            return {
                ...state,
                checklist: payload,
                loading: false,
            };

        case CHECKLIST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}

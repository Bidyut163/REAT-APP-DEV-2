import {
    GET_APPEALS,
    GET_APPEAL,
    CREATE_APPEAL,
    FORWARD_APPEAL,
    APPEAL_ERROR,
} from '../actions/types';

const initialState = {
    appeals: [],
    appeal: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_APPEAL:
            return {
                ...state,
                appeal: payload,
                loading: false,
            };
        case GET_APPEALS:
            return {
                ...state,
                appeals: payload,
                loading: false,
            };
        case CREATE_APPEAL:
            return {
                ...state,
                appeal: payload,
                loading: false,
            };
        case FORWARD_APPEAL:
            return {
                ...state,
                appeals: state.appeals.filter(
                    (appeal) => appeal.id !== payload
                ),
                loading: false,
            };

        case APPEAL_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}

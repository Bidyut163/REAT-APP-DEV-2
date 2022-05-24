import axios from 'axios';
import {
    APPEAL_ERROR,
    GET_APPEALS,
    GET_APPEAL,
    CREATE_APPEAL,
    FORWARD_APPEAL,
    GET_APPEALS_REGISTRAR,
    GET_APPEAL_REGISTRAR,
} from './types';

// Get List of Appeals with Receptionist
export const getAppeals = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/receptionist/appeals');

        dispatch({
            type: GET_APPEALS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get a single appeal
export const getAppeal = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/receptionist/appeals/${id}`);

        dispatch({
            type: GET_APPEAL,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Create an appeal
export const createAppeal = (formData, history) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const res = await axios.post(
            '/api/appellants/appeal/new',
            formData,
            config
        );
        dispatch({
            type: CREATE_APPEAL,
            payload: res.data,
        });
        history.push('/appellant/submitted');
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Forward appeal to registrar
export const forwardToRegistrar = (id, history) => async (dispatch) => {
    try {
        await axios.put(`/api/receptionist/appeals/${id}/forward`);

        dispatch({
            type: FORWARD_APPEAL,
            payload: id,
        });

        history.push('/official/receptionist/appeals');
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get List of Appeals with Registrar
export const getAppealsWithRegistrar = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/registrar/appeals');

        dispatch({
            type: GET_APPEALS_REGISTRAR,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

// Get a single appeal with registrar
export const registrarGetAppeal = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/registrar/appeals/${id}`);

        dispatch({
            type: GET_APPEAL_REGISTRAR,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: APPEAL_ERROR,
            payload: {
                msg: err.response.statusText,
                status: err.response.status,
            },
        });
    }
};

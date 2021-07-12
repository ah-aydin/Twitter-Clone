import axios from 'axios'
import { 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    AUTHENTICATED_SUCCESS, 
    AUTHENTICATED_FAIL,
    LOGOUT,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    USER_LOAD_FAIL,
    USER_LOAD_SUCCESS,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL
} from './types';

const WEBSITE_API_URL = "http://localhost:8000/";

export const load_user = () => async dispatch => {
    if (localStorage.getItem("access")) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        };

        axios.get(`${WEBSITE_API_URL}auth/users/me/`, config)
        .then(response => {
            dispatch({
                type: USER_LOAD_SUCCESS,
                payload: response.data
            });
        })
        .catch(err => {
            dispatch({
                type: USER_LOAD_FAIL,
                payload: err.response.data
            });
        });

    } else {
        dispatch({
            type: USER_LOAD_FAIL
        });
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({email, password});

    axios.post(`${WEBSITE_API_URL}auth/jwt/create`, body, config)
    .then(response => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });

        dispatch(load_user())
    })
    .catch(err => {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data
        });
    });
}

export const signup = (email, username, name, last_name, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, username, name, last_name, password, re_password });

    axios.post(`${WEBSITE_API_URL}auth/users/`, body, config)
    .then(response => {
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: email
        });
    })
    .catch(err => {
        dispatch({
            type: SIGNUP_FAIL,
            payload: err.response.data
        });
    });
}

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({uid, token})

    axios.post(`${WEBSITE_API_URL}auth/users/activation/`, body, config)
    .then(response => {
        dispatch({
            type: ACTIVATION_SUCCESS
        });
    })
    .catch(err => {
        dispatch({
            type: ACTIVATION_FAIL,
            payload: err.response.data
        });
    });
}
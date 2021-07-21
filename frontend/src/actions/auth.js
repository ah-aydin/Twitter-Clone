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
    ACTIVATION_FAIL,
    TWEET_CLEAR,
    FOLLOW_ACCOUNT
} from './types';

import { getFollowingTweets } from './tweet'

export const load_user = () => async dispatch => {
    if (localStorage.getItem("access")) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem("access")}`
            }
        };

        try{
            const response = await axios.get(`${process.env.REACT_APP_API_URL}auth/users/me/`, config);
            dispatch({
                type: USER_LOAD_SUCCESS,
                payload: response.data
            });
            dispatch(getFollowingTweets());
        } catch (err) {
            dispatch({
                type: USER_LOAD_FAIL,
                payload: err.response.data
            });
        }
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

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/jwt/create`, body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });

        dispatch(load_user());
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data
        });
    }
}

export const signup = (email, username, name, last_name, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ email, username, name, last_name, password, re_password });

    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/users/`, body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: email
        });
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL,
            payload: err.response.data
        });
    }
}

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    });
    dispatch({
        type: TWEET_CLEAR
    });
}

export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({uid, token})

    try {
        const response = axios.post(`${process.env.REACT_APP_API_URL}auth/users/activation/`, body, config);
        dispatch({
            type: ACTIVATION_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL,
            payload: err.response.data
        });
    }
}

export const follow = (id) => async dispatch => {
    const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
            'Content-type': 'application/json'
        }
    };
    const body = { 'id_account': id }

    try {
        const response = axios.post(`${process.env.REACT_APP_API_URL}api/account/follow/`, body, config);
        dispatch({
            type: FOLLOW_ACCOUNT
        });
    } catch (err) {
        dispatch({
            type: FOLLOW_ACCOUNT
        });
    }
}

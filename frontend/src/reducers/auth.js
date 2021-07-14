import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGOUT,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAIL
} from '../actions/types.js';

const initialState = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: false,
    login_success: true,
    user: null,
    errors: [ ],
    successes: [ ]
};

const formatErrors = (errors) => {
    let formatData = [ ];
    for (const error in errors) {
        formatData.push(errors[error])
    }
    return formatData;
}

const removeItems = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem('user');
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("access", payload.access);
            localStorage.setItem("refresh", payload.refresh);
            return {
                ...state,
                isAuthenticated: true,
                access: payload.access,
                login_success: true,
                refresh: payload.refresh,
                errors: [ ],
                successes: [ ]
            };
        case LOGIN_FAIL:
            removeItems();
            return {
                ...state,
                isAuthenticated: false,
                access: null,
                refresh: null,
                login_success: false,
                user: null,
                errors: formatErrors(payload),
                successes: [ ]
            }
        
        case USER_LOAD_SUCCESS:
            localStorage.setItem("user", payload);
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
                errors: [ ],
                successes: [ ]
            };
        case USER_LOAD_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                errors: formatErrors(payload),
                successes: [ ]
            };
        case LOGOUT:
            removeItems();
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
                errors: [ ],
                successes: [ ]
            };
        case ACTIVATION_FAIL:
        case SIGNUP_FAIL:
            return {
                ...state,
                errors: formatErrors(payload),
                successes: [ ]
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                errors: [ ],
                successes: [`An activation email has been sent to ${payload}`]
            };
        case ACTIVATION_SUCCESS:
            return {
                ...state
            };
        default:
            return state
    }
}
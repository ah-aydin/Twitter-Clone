import {
    TWEET_GET_FOLLOWING_SUCCESS,
    TWEET_GET_FOLLOWING_FAIL,
    LOAD_USER_TWEET_SUCCESS,
    LOAD_USER_TWEET_FAIL,
    TWEET_CLEAR
} from '../actions/types.js';

const initialState = {
    following_tweets: { results: [], next: null, previous: null },
    tweets: { results: [], next: null, previous: null },
    errors: []
};

const formatErrors = (errors) => {
    let formatData = [ ];
    for (const error in errors) {
        formatData.push(errors[error])
    }
    return formatData;
}

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOAD_USER_TWEET_SUCCESS:
            return {
                ...state,
                tweets: payload
            }
        case LOAD_USER_TWEET_FAIL:
            return {
                ...state,
                tweets: { results: [], next: null, previous: null }
            }
        case TWEET_GET_FOLLOWING_SUCCESS:
            return {
                ...state,
                following_tweets: payload
            }
        case TWEET_CLEAR:
        case TWEET_GET_FOLLOWING_FAIL:
            return {
                ...state,
                following_tweets: { results: [], next: null, previous: null }
            }
        default:
            return state
    }
}
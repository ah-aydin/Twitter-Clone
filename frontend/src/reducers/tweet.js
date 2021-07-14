import {
    TWEET_GET_FOLLOWING_SUCCESS,
    TWEET_GET_FOLLOWING_FAIL
} from '../actions/types.js';

const initialState = {
    tweets: { results: []}
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case TWEET_GET_FOLLOWING_SUCCESS:
            return {
                ...state,
                tweets: payload
            }
        case TWEET_GET_FOLLOWING_FAIL:
            return {
                ...state,
                tweets: { results: []}
            }
        default:
            return state
    }
}
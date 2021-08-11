import {
    TWEET_GET_FOLLOWING_SUCCESS,
    TWEET_GET_FOLLOWING_FAIL,
    LOAD_MORE_FOLLOWING_SUCCESS,
    LOAD_MORE_FOLLOWING_FAIL,

    LOAD_USER_TWEET_SUCCESS,
    LOAD_USER_TWEET_FAIL,
    LOAD_USER_MORE_TWEET_SUCCESS,
    LOAD_USER_MORE_TWEET_FAIL,


    LOAD_EXPLORE_TWEET_SUCCESS,
    LOAD_EXPLORE_TWEET_FAIL,
    LOAD_EXPLORE_TWEET_MORE_SUCCESS,
    LOAD_EXPLORE_TWEET_MORE_FAIL,

    TWEET_CLEAR,
} from '../actions/types.js';

const initialState = {
    following_tweets: { results: [], next: null, previous: null },
    tweets: { results: [], next: null, previous: null },
    explore_tweets: { results: [], next: null, previous: null },
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
                tweets: {
                    ...state.tweets,
                    results: [...payload.results],
                    next: payload.next,
                }
            }
        case LOAD_USER_MORE_TWEET_SUCCESS:
            return {
                ...state,
                tweets: {
                    results: [...state.tweets.results, ...payload.results],
                    next: payload.next,
                    previous: payload.previous
                }
            }
        case LOAD_EXPLORE_TWEET_FAIL:
            return {
                ...state,
                tweets: { results: [], next: null, previous: null }
            }
        case LOAD_EXPLORE_TWEET_MORE_FAIL:
        case LOAD_USER_MORE_TWEET_FAIL:
            return {
                ...state
            }
        
        case LOAD_EXPLORE_TWEET_SUCCESS:
            return {
                ...state,
                explore_tweets: {
                    ...state.explore_tweets,
                    results: [...payload.results],
                    next: payload.next,
                }
            }
        case LOAD_EXPLORE_TWEET_MORE_SUCCESS:
            return {
                ...state,
                explore_tweets: {
                    results: [...state.tweets.results, ...payload.results],
                    next: payload.next,
                    previous: payload.previous
                }
            }
        case LOAD_USER_TWEET_FAIL:
            return {
                ...state,
                explore_tweets: { results: [], next: null, previous: null }
            }
        case TWEET_GET_FOLLOWING_SUCCESS:
            return {
                ...state,
                following_tweets: payload
            }
        case LOAD_MORE_FOLLOWING_SUCCESS:
            return {
                ...state,
                following_tweets: {
                    ...state.following_tweets,
                    results: [...state.following_tweets.results, ...payload.results],
                    next: payload.next,
                    previous: payload.previous
                }
            }
        case LOAD_MORE_FOLLOWING_FAIL:
            return {
                ...state
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
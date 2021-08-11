import axios from 'axios'
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
    LOAD_EXPLORE_TWEET_MORE_FAIL
} from './types'

export const getFollowingTweets = () => async dispatch => {
    const config = { 
        headers: {
            'Authorization': `JWT ${localStorage.getItem('access')}`,
        }
    };

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}api/account/following/tweets/`, config);
        dispatch({
            type: TWEET_GET_FOLLOWING_SUCCESS,
            payload: response.data
        });
    } catch (err) {
        dispatch({
            type: TWEET_GET_FOLLOWING_FAIL
        });
    }
}

export const loadMoreFollowingTweets = (next) => async dispatch => {
    const config = {
        headers: {
            'Authorization': `JWT ${localStorage.getItem('access')}`,
        }
    }

    axios.get(next, config)
    .then(response => {
        const data = response.data;
        dispatch({
            type:LOAD_MORE_FOLLOWING_SUCCESS,
            payload: data
        });
    })
    .catch(err => {
        dispatch({
            type: LOAD_MORE_FOLLOWING_FAIL
        });
    })
}

export const like_tweet = (tweet_id)  => {
    const config = {
        headers: {
            'Authorization': `JWT ${localStorage.getItem('access')}`
        }
    };
    axios.post(`${process.env.REACT_APP_API_URL}api/tweet/${tweet_id}/likes/add/`, { }, config);
}

export const post_tweet = (content, retweet_id=null) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`
        }
    };
    let body;
    if (retweet_id) {
        body = JSON.stringify({content, retweet_id});
    } else {
        body = JSON.stringify({content});
    }

    axios.post(`${process.env.REACT_APP_API_URL}api/tweet/`, body, config).catch(err => {
        console.log(err.response)
    });
}

export const loadUserTweets = (id) => async dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}api/account/${id}/tweets/`, { })
    .then(response => {
        const data = response.data;
        dispatch({
            type: LOAD_USER_TWEET_SUCCESS,
            payload: data
        });
    })
    .catch(err => {
        dispatch({
            type: LOAD_USER_TWEET_FAIL,
        });
    });
}

export const loadMoreUserTweets = (next) => async dispatch => {
    axios.get(next, { })
    .then(response => {
        const data = response.data;
        dispatch({
            type:LOAD_USER_MORE_TWEET_SUCCESS,
            payload: data
        });
    })
    .catch(err => {
        dispatch({
            type: LOAD_USER_MORE_TWEET_FAIL
        })
    })
}

export const loadExploreTweets = () => async dispatch => {
    axios.get(`${process.env.REACT_APP_API_URL}api/tweet/explore/`, { })
    .then(response => {
        const data = response.data;
        dispatch({
            type: LOAD_EXPLORE_TWEET_SUCCESS,
            payload: data
        });
    })
    .catch(err => {
        dispatch({
            type: LOAD_EXPLORE_TWEET_FAIL,
        });
    })
}

export const loadMoreExploreTweets = (next) => async dispatch => {
    axios.get(next, { })
    .then(response => {
        const data = response.data;
        dispatch({
            type: LOAD_EXPLORE_TWEET_MORE_SUCCESS,
            payload: data
        });
    })
    .catch(err => {
        dispatch({
            type: LOAD_EXPLORE_TWEET_MORE_FAIL
        })
    })
}


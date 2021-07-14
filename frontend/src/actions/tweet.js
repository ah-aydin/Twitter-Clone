import axios from 'axios'
import {
    TWEET_GET_FOLLOWING_SUCCESS,
    TWEET_GET_FOLLOWING_FAIL
} from './types'

const WEBSITE_API_URL = "http://localhost:8000/";

export const get_following_tweets = () => async dispatch => {
    console.log("I AM IN");
    const config = { 
        headers: {
            'Authorization': `JWT ${localStorage.getItem('access')}`,
        }
    };
    console.log("I AM STILL IN");

    try {
        const response = await axios.get(`${WEBSITE_API_URL}api/account/following/tweets/`, config);
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

export const MEH = () => async dispatch => {
    console.log("MEHHHHHHHHHHH");
}

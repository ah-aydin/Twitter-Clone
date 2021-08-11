import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { loadUserTweets, loadMoreUserTweets } from '../actions/tweet';

import Tweet from "../components/Tweet";

const MyTweets = ({ loadUserTweets, loadMoreUserTweets, user, tweets, isAuthenticated }) => {
    useEffect(() => {
        if (user) {
            loadUserTweets(user.id);
        }
    }, []);

    return (
        <div className="tweet-container">
                {tweets.results.map((tweet) => (
                    <Tweet id={`tweet_id_${tweet.id}`} tweet={tweet} owner_username={tweet.owner_username} owner_id={tweet.owner_id}/>
                ))}
                {tweets.next ? 
                    <div className="form-group row justify-content-md-center mt-3 mb-1 px-1">
                    <button onClick={(e) => loadMoreUserTweets(tweets.next)} className="btn btn-primary col-sm-10">
                        Load More
                    </button>
                </div>
                :
                <div/>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    tweets: state.tweet.tweets,
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loadUserTweets, loadMoreUserTweets })(MyTweets);
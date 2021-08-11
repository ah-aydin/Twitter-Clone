import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Tweet from '../components/Tweet';

import { loadExploreTweets, loadMoreExploreTweets } from '../actions/tweet';

import './style/tweet_container.css';

const Explore = ({ tweets, loadExploreTweets, loadMoreExploreTweets }) => {

    useEffect(() => {
        loadExploreTweets();
    }, []);

    return (
        <div className="tweet-container">
                {tweets.results.map((tweet) => (
                    <Tweet id={`tweet_id_${tweet.id}`} tweet={tweet} owner_username={tweet.owner_username} owner_id={tweet.owner_id}/>
                ))}
                {tweets.next ? 
                    <div className="form-group row justify-content-md-center mt-3 mb-1 px-1">
                    <button onClick={(e) => loadMoreExploreTweets(tweets.next)} className="btn btn-primary col-sm-10">
                        Load More
                    </button>
                </div>
                :
                <div/>}
        </div>
    )
};

const mapStateToProps = (state) => ({
    tweets: state.tweet.explore_tweets
});

export default connect(mapStateToProps, { loadExploreTweets, loadMoreExploreTweets })(Explore);
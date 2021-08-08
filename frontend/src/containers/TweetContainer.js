import React from 'react';
import { connect } from 'react-redux';

import Tweet from '../components/Tweet';

import './style/tweet_container.css'

const TweetContainer = ({ tweets }) => {
    return (
        <div className="tweet-container">
                {tweets.results.map((tweet) => (
                    <Tweet id={`tweet_id_${tweet.id}`} tweet={tweet} owner_username={tweet.owner_username} owner_id={tweet.owner_id}/>
                ))}
        </div>
    )
};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { })(TweetContainer);
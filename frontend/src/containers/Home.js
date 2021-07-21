import React from 'react';
import { connect } from 'react-redux';

import Tweet from '../components/Tweet';    

const Home = ({ tweets }) => {
    return (
        <div style={{marginTop:70}}>
            {tweets.results.map((tweet) => (
                <Tweet id={`tweet_id_${tweet.id}`} tweet={tweet} owner_username={tweet.owner_username} owner_id={tweet.owner_id}/>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => ({
    tweets: state.tweet.following_tweets
});

export default connect(mapStateToProps, { })(Home);
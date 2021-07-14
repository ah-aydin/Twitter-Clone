import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux';

import Tweet from '../components/Tweet';    

const Home = ({ tweets }) => {
    return (
        <div style={{marginTop:70}}>
            {tweets.results.map((tweet) => (
                <Tweet content={tweet.content} owner_username={tweet.owner_username } owner_url={tweet.owner_url}/>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => ({
    tweets: state.tweet.tweets
});

export default connect(mapStateToProps, { })(Home);
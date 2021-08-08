import React from 'react';
import { connect } from 'react-redux';

import TweetContainer from './TweetContainer';

const Home = ({ tweets }) => {
    return (
        <TweetContainer tweets={tweets} />
    )
};

const mapStateToProps = (state) => ({
    tweets: state.tweet.following_tweets
});

export default connect(mapStateToProps, { })(Home);
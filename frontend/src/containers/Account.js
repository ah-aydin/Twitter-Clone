import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { loadUserTweets, loadMoreUserTweets } from "../actions/tweet";
import { follow } from "../actions/auth";

import Tweet from "../components/Tweet";

const Account = ({ loadUserTweets, follow, loadMoreUserTweets, match, tweets, isAuthenticated }) => {
    const [accountDetails, setAccountDetails] = useState({
        name: '',
        last_name: '',
        email: '',
        username: '',
        id: match.params.id
    });
    const [following, setFollowing] = useState(false);

    const getAccount = () => {
        axios.get(`${process.env.REACT_APP_API_URL}api/account/${accountDetails.id}/`, null)
        .then(response => {
            const data = response.data;
            setAccountDetails({
                ...accountDetails,
                name: data.name,
                last_name: data.last_name,
                email: data.email,
                username: data.username
            })
        });
    }
    useEffect(() => {
        getAccount();
        loadUserTweets(match.params.id);

        // See if the user is following this account, if there is one
        if (isAuthenticated) {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access')}`
                }
            };
            axios.get(
                `${process.env.REACT_APP_API_URL}api/account/follow/${accountDetails.id}/`,
                config
            )
            .then(response => {
                if (response.data == true) {
                    setFollowing(true);
                } else {
                    setFollowing(false);
                }
            })
            .catch(err => {
                setFollowing(false);
            });
        }
    }, []);

    const { name, last_name, email, username, id } = accountDetails;

    const buttonFollowClick = () => {
        if (isAuthenticated) {
            follow(id);
            setFollowing(!following);
        }
    }

    return (
        <div style={{marginTop:70}} className="px-3">
            <h1>{username}</h1>
            <div className="form-group row justify-content-md-center mt-3 mb-1 px-1">
                <button onClick={buttonFollowClick} className="btn btn-primary col-sm-12">
                    { following ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            {tweets.results.map((tweet) => (
                <Tweet id={`tweet_id_${tweet.id}`} tweet={tweet} owner_username={tweet.owner_username} owner_id={tweet.owner_id}/>
            ))}
            {tweets.next ? 
                <div className="form-group row justify-content-md-center mt-3 mb-1 px-1">
                <button onClick={(e) => loadMoreUserTweets(tweets.next)} className="btn btn-primary col-sm-12">
                    Load More
                </button>
            </div>
            :
            <div/>}
        </div>
    )
};

const mapStateToProps = (state) => ({
    tweets: state.tweet.tweets,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loadUserTweets, follow, loadMoreUserTweets })(Account);
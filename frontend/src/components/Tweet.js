import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { like_tweet, post_tweet } from '../actions/tweet';

const Tweet = ({ tweet, owner_id, owner_username, id, isAuthenticated }) => {
    const [liked, setLiked] = useState(false);
    const [retweeting, setRetweeting] = useState(false);
    const [retweetContent, setRetweetContent] = useState("");

    const onChange = (e) => setRetweetContent(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();

        post_tweet(retweetContent, tweet.id);
        setRetweeting(false);
        setRetweetContent("");
    }

    const likeTweet = (e) => {
        e.preventDefault();
        setLiked(!liked);
        like_tweet(tweet.id);
    };

    const userLikedTweet = () => {
        const config = {
            headers: {
                "Authorization": `JWT ${localStorage.getItem("access")}`
            }
        };

        axios.get(`${process.env.REACT_APP_API_URL}api/tweet/likes/${tweet.id}/`, config)
        .then(response => {
            if (response.data == true) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        })
        .catch(err => {
            setLiked(false);
        });
    }

    const onRetweetClick = () => {
        setRetweeting(!retweeting)
    }

    const getRetweetArea = () => {
        if (retweeting) {
            return (
                <div className="row mx-1 mb-2">
                    <form className="col-lg-12" onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group mb-3">
                            <textarea
                                className="form-control" 
                                id="content" name="content" 
                                placeholder="Write your tweet here" 
                                rows="4" cols="150"
                                value={retweetContent}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Post</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div/>
            )
        }
    }

    useEffect(() => {
        if (isAuthenticated) {
            userLikedTweet();
        }
    }, []);
    
    return(
        <div className="container py-0 px-1" id={id}>
            <div className="row justify-content-md-center p-0">
                <div className="card col col-lg-6 text-white bg-primary mb-3 p-0">

                    <div className="card-header">
                        <Link to={`/account/${owner_id}`} className="text-white">{owner_username}</Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{tweet.content}</h5>
                    </div>
                    
                    <div className="row mx-1 mb-2">
                        <div className="col-lg-5">
                            <button 
                                type="button" 
                                className={`btn ${liked ? 'btn-success': 'btn-secondary'}`}
                                id={`${id}_like_button`}
                                style={{marginRight: 4}} 
                                onClick={likeTweet}>
                                    L
                            </button>
                            <button type="button" className="btn btn-danger" onClick={onRetweetClick}>R</button>
                        </div>
                    </div>
                    {getRetweetArea()}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { })(Tweet);
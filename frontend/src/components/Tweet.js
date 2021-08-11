import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { like_tweet, post_tweet } from '../actions/tweet';

import './style/tweet.css';

const Tweet = ({ tweet, owner_id, owner_username, id, isAuthenticated }) => {
    const [liked, setLiked] = useState(false);
    const [retweeting, setRetweeting] = useState(false);
    const [likeCount, setLikeCount] = useState(tweet.like_count);
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
        if (!isAuthenticated) return;

        setLiked(!liked);
        if (liked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        like_tweet(tweet.id);
    };

    const userLikedTweet = () => {
        if (!isAuthenticated) return;
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
        if (!isAuthenticated) return;
        setRetweeting(!retweeting)
    }

    const getRetweetArea = () => {
        if (retweeting) {
            return (
                <div className="row mx-1 mb-2" style={{marginBottom: 5}}>
                    <hr style={{marginBottom: 3}} />
                    <form className="col-lg-12" onSubmit={(e) => onSubmit(e)} style={{marginBottom: 4}}>
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
        <div className="tweet" id={id}>
            <div className="properties">
                <div className="owner-info">
                    <div className="username">
                        <Link to={`/account/${owner_id}`} className="text-white">{owner_username}</Link>
                    </div>
                </div>
                <div className="date-created">
                    {tweet.date_created.substring(0, 10)}
                </div>
            </div>
            <hr />
            <div className="content">
                {tweet.content}
            </div>
            <hr style={{marginBottom: 3}} />
            <ul className="actions">
                <Link className="button" to={`/tweet/${tweet.id}`}>
                    Replies
                </Link>
                <li className="button" onClick={onRetweetClick}>
                    <i className='bx bx-reply'></i>
                </li>
                <li className="button" onClick={likeTweet}>
                    <div className="value">{likeCount}</div>
                    {liked ? <i class='bx bxs-like'></i> : <i className="bx bx-like"></i>}
                </li>
            </ul>
            { getRetweetArea() }
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { })(Tweet);
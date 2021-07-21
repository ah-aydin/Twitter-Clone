import React , { useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { post_tweet } from '../actions/tweet';

const CreateTweet = ({ isAuthenticated }) => {
    const [content, setContent] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const onChange = (e) => setContent(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();

        post_tweet(content);
        setSubmitted(true);
    }
    
    if (!isAuthenticated || submitted) {
        return <Redirect to="/" />
    }

    return (
        <div style={{marginTop:70}} className="px-4">
            <form onSubmit={(e) => onSubmit(e)}>
                <h1>Create Tweet</h1>
                <div className="form-group mb-3">
                    <textarea
                        className="form-control" 
                        id="content" name="content" 
                        placeholder="Write your tweet here" 
                        rows="7" cols="50"
                        value={content}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { })(CreateTweet);
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { getFollowingTweets, MEH } from '../actions/tweet';

import ErrorMessages from '../components/ErrorMessages';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;
    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = (e) => {
        e.preventDefault();
        
        login(email, password);
    }
    
    if (isAuthenticated) {
        MEH();
        console.log("1")
        console.log("2")
        return <Redirect to="/"/>
    }
    
    return (
        <div className="container align-middle mt-5">
            <form onSubmit={(e) => onSubmit(e)}>
                <h1>Login</h1>
                <p>Login to your account</p>
                <div className="form-group mt-4">
                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" name="email" 
                        aria-describedby="emailHelp" placeholder="Enter email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        className="form-control" 
                        id="password" name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="mt-3">Don't have an account? <Link to="/signup">Sign Up</Link></p>
            <p className="mt-3">Forgot your password? <Link to="/reset-password">Reset Password</Link></p>
            <ErrorMessages/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
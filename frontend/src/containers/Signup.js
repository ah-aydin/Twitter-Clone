import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { signup } from '../actions/auth'

import ErrorMessages from '../components/ErrorMessages';
import SuccessMessages from '../components/SuccessMessages';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [signupData, setSignupData] = useState({
        email: "",
        username: "",
        name: "",
        last_name: "",
        password: "",
        re_password: ""
    });
    
    const { email, username, name, last_name, password, re_password } = signupData;
    const onChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        
        if (password === re_password) {
            signup(email, username, name, last_name, password, re_password);
            setSignupData({
                email: "",
                username: "",
                name: "",
                last_name: "",
                password: "",
                re_password: ""}
            )
        }
    }

    if (accountCreated || isAuthenticated) {
        return <Redirect to="/"/>
    }

    return (
        <div className="container align-middle mt-5">
            <form onSubmit={(e) => onSubmit(e)}>
                <h1>Signup</h1>
                <p>Create an account</p>
                <div className="form-group mt-4">
                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" name="email" 
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" name="username" 
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" name="name" 
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="last_name" name="last_name" 
                        placeholder="Enter last name"
                        value={last_name}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
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
                <div className="form-group mb-3">
                    <label htmlFor="re_password">Retype password</label>
                    <input 
                        type="password"
                        className="form-control" 
                        id="re_password" name="re_password" 
                        placeholder="Password" 
                        value={re_password}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
            <p className="mt-3">Have an account? <Link to="/login">Login</Link></p>
            <SuccessMessages/>
            <ErrorMessages/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
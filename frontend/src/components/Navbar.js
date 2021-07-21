import React, { Fragment } from 'react';
import { Link } from'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';

const Navbar = ({ isAuthenticated, logout }) => {
    
    const guestLinks = () => {
        return (
            <Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
            </Fragment>
        )
    };

    const authLinks = () => {
        return (
            <Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/account">Account</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create_tweet">Tweet</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={logout}>Logout</Link>
                </li>
            </Fragment>
        )
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ps-4 fixed-top">
            <Link className="navbar-brand" to="/">Tweety</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                { isAuthenticated ? authLinks() : guestLinks() }
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar);
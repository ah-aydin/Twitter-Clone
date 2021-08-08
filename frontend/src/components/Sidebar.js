import React, { Fragment } from 'react';
import { Link } from'react-router-dom';
import styles from 'styled-components';

import { connect } from 'react-redux';
import { logout } from '../actions/auth';

import './style/sidebar.css';

const Navbar = ({ isAuthenticated, logout }) => {

    const guestLinks = () => {
        return (
            <Fragment>
                <Link className="nav_list_item" to="/users">
                    <i className="bx bx-user"></i>
                    <span className="links_name">Users</span>
                </Link>
                <Link className="nav_list_item" to="/hashtags">
                    <i className="bx bx-hash"></i>
                    <span className="links_name">Hastags</span>
                </Link>
                <Link className="nav_list_item" to="/login" id="btn-log-in">
                    <i className="bx bx-log-in" ></i>
                    <span className="links_name">Login</span>
                </Link>
                <Link className="nav_list_item" to="/signup" id="btn-sign-up">
                    <i class='bx bx-user-plus' ></i>
                    <span className="links_name">Signup</span>
                </Link>
            </Fragment>
        )
    };

    const authLinks = () => {
        return (
            <Fragment>
                <Link className="nav_list_item" to="/">
                    <i className="bx bx-grid-alt"></i>
                    <span className="links_name">Feed</span>
                </Link>
                <Link className="nav_list_item" to="/my_tweets">
                    <i className="bx bx-archive"></i>
                    <span className="links_name">You're tweets</span>
                </Link>
                <Link className="nav_list_item" to="/users">
                    <i className="bx bx-user"></i>
                    <span className="links_name">Users</span>
                </Link>
                <Link className="nav_list_item" to="/hashtags">
                    <i className="bx bx-hash"></i>
                    <span className="links_name">Hastags</span>
                </Link>
                <Link className="nav_list_item" to="preferences">
                    <i className="bx bxs-cog" id="btn-settings"></i>
                    <span className="links_name">Preferences</span>
                </Link>
                <Link className="nav_list_item" to="/" onClick={logout}>
                    <i className="bx bx-log-out" id="btn-log-out"></i>
                    <span className="links_name">Logout</span>
                </Link>
            </Fragment>
        )
    };
    
    return (
        <div className="sidebar">
            <div className="logo_content">
                <div className="logo">
                    <i className='bx bxl-sketch'></i>
                    <div className="logo_name">Tweety</div>
                </div>
            </div>
            <ul className="nav_list">
                { isAuthenticated ? authLinks() : guestLinks() }
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <div className="profile_username">
                        Insert username here
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar);
import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import './style/layout.css';

const Layout = (props) => {
    return (
        <div className="main-view">
            <Sidebar />
            { props.children }
        </div>
    );
};

export default Layout;
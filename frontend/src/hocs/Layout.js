import React from 'react';
import Sidebar from '../components/Sidebar';
import './style/layout.css';

const Layout = (props) => {
    return (
        <div className="main-view row justify-content-center">
            <div className="col-md-10">
                <Sidebar />
                { props.children }
            </div>
        </div>
    );
};

export default Layout;
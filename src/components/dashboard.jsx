import React, { Component } from 'react';
import Navbar from "./navbar";
import SideMenu from './sideMenu';
import "../styles/dashboard.css";

class Dashboard extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Navbar dashboard={true} />

                <div className="dashboard"><div className="navbar"></div></div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
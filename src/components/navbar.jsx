import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../svgs/logo.svg";
import user from "../svgs/user.svg";
import search from "../svgs/search.svg";
import bar from "../svgs/bar.svg";
import "../styles/navbar.css";
import SideMenu from './sideMenu';

class Navbar extends Component {
    state = { sideMenu: "" }
    handleToggle = () => {
        let sideMenu = this.state.sideMenu;
        sideMenu === "" ? sideMenu = "closed" : sideMenu = "";
        this.setState({ sideMenu });
    }
    render() {
        return (<React.Fragment>
            <nav className="navbar col-xs-12">
                <div className="navaside col-xs-5 col-m-3">
                    <img alt="" src={bar} className="nav-icon hidden" onClick={this.handleToggle}></img>
                    <img alt="" src={search} className="nav-icon"></img>
                    <Link to="/dashboard">
                        <img alt="" src={user} className="nav-icon"></img>
                        <span>پنل شخصی</span>
                    </Link>
                </div>

                <ul className="col-xs-3 col-m-7 col-l-8">


                    <li>
                        <a href="/#">حساب بین المللی</a>
                    </li>
                    <li>
                        <a href="/#">پرداخت آنلاین</a>
                    </li>
                    <li>
                        <a href="/#">احراز هویت</a>
                    </li>
                    <li>
                        <a href="/#">خدمات</a>
                    </li>
                </ul>
                <Link to="/" className="logo col-xs-4 col-m-2 col-l-1">
                    پیدود
                <img alt="" src={logo}></img>
                </Link>

            </nav>
            <SideMenu closed={this.state.right} />
        </React.Fragment>
        );
    }
}

export default Navbar;
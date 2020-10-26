import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../svgs/logo.svg";
import "../styles/sideMenu.css";

class SideMenu extends Component {
    state = {};

    render() {
        return (
            <div className={`side-menu ${this.props.closed}`} >
                <Link to="/" className="logo">
                    پیدود
					<img alt="" src={logo}></img>
                </Link>
                <ul>
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
            </div >
        );
    }
}

export default SideMenu;

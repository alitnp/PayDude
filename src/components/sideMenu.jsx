import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../svgs/logo.svg";
import "../styles/sideMenu.css";
import xlogo from "../svgs/x.svg";

class SideMenu extends Component {
    state = {
        toggled: true
    };
    componentDidMount() {
        const toggled = this.props.toggled;;
        this.setState({ toggled });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            let toggled = this.props.toggled;
            this.setState({ toggled });
        }
    }
    handleToggle = () => {
        const isToggled = this.state.toggled;
        this.setState({ toggled: !isToggled });
    }
    render() {
        return (
            <div className={`side-menu ${this.state.toggled && "hidden-side-menu"}`} >
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
                <div className={"close-btn"} onClick={this.props.onChange}><img src={xlogo} alt="" /></div>
            </div >
        );
    }
}

export default SideMenu;

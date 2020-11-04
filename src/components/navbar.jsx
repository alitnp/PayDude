import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../svgs/logo.svg";
import user from "../svgs/user.svg";
import search from "../svgs/search.svg";
import bar from "../svgs/bar.svg";
import "../styles/navbar.css";
import SideMenu from "./sideMenu";

class Navbar extends Component {
	state = {
		toggled: true,
		serviceDropdown: false,
		cardsDropdown: false,
	};
	handleToggle = () => {
		const isToggled = this.state.toggled;
		this.setState({ toggled: !isToggled });
	};
	componentDidMount() {
		this.setState({ toggled: true });
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props !== prevProps) {
			this.setState({ toggled: true });
		}
	}
	render() {
		return (
			<React.Fragment>
				<nav className="navbar col-xs-12">
					<div className="navaside col-xs-5 col-m-3">
						<img
							alt=""
							src={bar}
							className="nav-icon hidden"
							onClick={this.handleToggle}
						/>
						<img
							style={{ display: "none" }}
							alt=""
							src={search}
							className="nav-icon"
						/>
						<Link to="/dashboard">
							<img alt="" src={user} className="nav-icon" />
							<span>پنل شخصی</span>
						</Link>
					</div>

					<ul className="col-xs-3 col-m-7 col-l-8">
						<li
							onMouseOver={() => {
								this.setState({ cardsDropdown: true });
							}}
							onMouseLeave={() => {
								this.setState({ cardsDropdown: false });
							}}>
							<Link to="/cards">حساب بین المللی</Link>
							<div
								className={this.state.cardsDropdown ? "hovered":""}
								style={{ left: "-20px" }}>
								<span>
									<Link to="/cards/Visa">ویزا کارت</Link>
								</span>
								<span>
									<Link to="/cards/Master">مستر کارت</Link>
								</span>
							</div>
						</li>
						<li>
							<Link to="/onlinepay">پرداخت آنلاین</Link>
						</li>
						{/* <li>
							احراز هویت
						</li> */}
						<li
							onMouseOver={() => {
								this.setState({ serviceDropdown: true });
							}}
							onMouseLeave={() => {
								this.setState({ serviceDropdown: false });
							}}>
							خدمات
							<div
								className={this.state.serviceDropdown ? "hovered":""}
								style={{ left: "-50px" }}>
								<span>
									<Link to="/drivinglicense">گواهینامه</Link>
								</span>
								<span>قبض و آدرس</span>
							</div>
						</li>
					</ul>
					<Link to="/" className="logo col-xs-4 col-m-2 col-l-1">
						پیدود
						<img alt="" src={logo}></img>
					</Link>
				</nav>
				<SideMenu
					toggled={this.state.toggled}
					dashboard={this.state.dashboard}
					onChange={this.handleToggle}
				/>
			</React.Fragment>
		);
	}
}
Navbar.defaultProps = {
	toggled: true,
};
export default Navbar;

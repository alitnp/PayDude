import React, { Component } from "react";
import Navbar from "./navbar";
import user from "../user.json";
import profile from "../images/profile.png";
import editIcon from "../svgs/edit.svg";
import ProfileEditor from "./dashboardProfileEditor";
import table from "./dashboardTable";
import "../styles/dashboard.css";

class Dashboard extends Component {
	state = { selected: "dashboard" };

	selectedHandler = () => {
		switch (this.state.selected) {
			case "dashboard":
				return (
					<div className="dashboard-content">
						{this.profileCard(user)}
						{table(user.orders, "لیست سفارش ها")}
					</div>
				);
			case "profile":
				return (
					<div className="dashboard-content">
						<ProfileEditor user={user} />
					</div>
				);
			default:
				break;
		}
	};
	profileCard = (user) => {
		return (
			<div className=" card profile-card">
				<img
					className="edit-icon"
					src={editIcon}
					alt=""
					onClick={() => {
						this.setState({ selected: "profile" });
					}}
				/>
				<small>کاربر</small>
				<div className="pic">
					<img src={profile} alt="" />
				</div>
				<div className="info">
					<span>نام: {user.usernameFa}</span>
					<span>نام انگلیسی: {user.usernameEn}</span>
					<span>ایمیل: {user.email}</span>
					<span>شماره موبایل: {user.phonenumber}</span>
				</div>
			</div>
		);
	};
	render() {
		return (
			<React.Fragment>
				<Navbar toggled={true} />
				<div className="dashboard">
					<div className="navbar"></div>
					<div className="main-wrapper">
						<div className="sidebar">
							<ul>
								<li
									className={
										this.state.selected === "dashboard" &&
										"selected"
									}
									onClick={() =>
										this.setState({ selected: "dashboard" })
									}>
									داشبورد
								</li>
								<li
									className={
										this.state.selected === "profile" &&
										"selected"
									}
									onClick={() =>
										this.setState({ selected: "profile" })
									}>
									پروفایل
								</li>
								<li
									style={{ display: "none" }}
									className={
										this.state.selected === "products" &&
										"selected"
									}
									onClick={() =>
										this.setState({ selected: "products" })
									}>
									لیست خدمات
								</li>
							</ul>
						</div>
						<div className="main">{this.selectedHandler()}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Dashboard;

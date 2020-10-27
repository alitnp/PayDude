import React, { Component } from "react";
import Navbar from "./navbar";
import user from "../user.json";
import profileCard from "./profileCard";
import table from "./dashboardTable";
import "../styles/dashboard.css";

class Dashboard extends Component {
	state = { selected: "dashboard" };

	selectedHandler = () => {
		switch (this.state.selected) {
			case "dashboard":
				return (
					<div className="dashboard-content">
						{profileCard(user)}
						{table(user.orders, "لیست سفارش ها")}
					</div>
				);
			default:
				break;
		}
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

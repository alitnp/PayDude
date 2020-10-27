import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/mainPage.jsx";
import CreditCards from "./components/creditCards.jsx";
import OnlinePay from "./components/onlinePay.jsx";
import DrivingLicense from "./components/drivingLicense.jsx";
import BillAddress from "./components/billAddress";
import Dashboard from "./components/dashboard.jsx";
import Navbar from "./components/navbar.jsx";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				
				<Switch>
					<Route path="/" exact component={MainPage} />
					<Route path="/cards" component={CreditCards} />
					<Route path="/onlinepay" component={OnlinePay} />
					<Route path="/drivinglicense" component={DrivingLicense} />
					<Route path="/billaddress" component={BillAddress} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;

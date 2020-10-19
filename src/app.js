import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header.jsx";
import MainPage from "./components/mainPage.jsx";
import Footer from "./components/footer.jsx";
import Cards from "./components/creditCards.jsx";
import OnlinePay from "./components/onlinePay.jsx";
import DrivingLicense from "./components/drivingLicense.jsx";

class App extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Header />

				<Switch>
					<Route path="/" exact component={MainPage} />
					<Route path="/cards" component={Cards} />
					<Route path="/onlinepay" component={OnlinePay} />
					<Route path="/drivinglicense" component={DrivingLicense} />
				</Switch>

				<Footer />
			</React.Fragment>
		);
	}
}

export default App;

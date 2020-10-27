import React, { Component } from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import MainTitle from "./mainTitle";
import OnlinePayForm from "./onlinePayForm.jsx";
import ClientOrder from "./clientOrder";
import data from "../data.json";
import currencyList from "../rates.json";
import { texts } from "../data.json";
import "../styles/onlinePay.css";

class OnlinePay extends Component {
	state = { orderDetail: data.products.OnlinePay };

	componentDidMount() {
		window.scrollTo(0, 0);
		this.interval = setInterval(
			() => { this.setState({ time: Date.now() }); },
			5000
		);

	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	handleChange = (formOrderDetail) => {
		const orderDetail = this.state.orderDetail;
		orderDetail.model = formOrderDetail;
		const usdRate = (orderDetail.model.amount / currencyList.rates[orderDetail.model.currency]).toFixed(2);
		orderDetail.model.price = usdRate;
		this.setState({ orderDetail });
		console.log(this.state);

	}
	logoLoader = () => {

		const logos = [
			<img src={require("../svgs/logos/airbnb.svg")} key="0" alt="" />,
			<img src={require("../svgs/logos/apple.svg")} key="1" alt="" />,
			<img src={require("../svgs/logos/booking.svg")} key="2" alt="" />,
			<img src={require("../svgs/logos/netflix.svg")} key="3" alt="" />,
			<img src={require("../svgs/logos/paypal.svg")} key="4" alt="" />,
			<img src={require("../svgs/logos/playstation.svg")} key="5" alt="" />,
			<img src={require("../svgs/logos/wow.svg")} key="6" alt="" />,
			<img src={require("../svgs/logos/spotify.svg")} key="7" alt="" />,
			<img src={require("../svgs/logos/xbox.svg")} key="8" alt="" />,
		];

		const chosenset = new Set();
		while (chosenset.size < 6) {
			chosenset.add(Math.floor(Math.random() * 9));
		}

		return (
			<div className="logos">
				{logos[Array.from(chosenset)[0]]}
				{logos[Array.from(chosenset)[1]]}
				{logos[Array.from(chosenset)[2]]}
				{logos[Array.from(chosenset)[3]]}
				{logos[Array.from(chosenset)[4]]}
				{logos[Array.from(chosenset)[5]]}
			</div>
		);
	};

	render() {

		return (
			<React.Fragment>
				<Navbar toggled={true} />
				<Header />
				<div className="online-pay">
					<MainTitle text={texts.onlinePay} />

					<div className="description">
						<p>{texts.onlinePay.desc}</p>
						<div className="list">
							<ul>
								<p>سایر سرویس های پرداخت ارزی:</p>
								{texts.onlinePay.list.map((list) => {
									return <li key={list}>{list}</li>;
								})}
							</ul>
						</div>
						{this.logoLoader()}
					</div>
					<hr />
					<OnlinePayForm onChange={this.handleChange} />
					<ClientOrder product={this.state.orderDetail} />
				</div>
				<Footer />
			</React.Fragment>

		);
	}
}

export default OnlinePay;

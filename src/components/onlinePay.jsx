import React, { Component } from "react";
import MainTitle from "./mainTitle";
import { texts } from "../data.json";
import "../styles/onlinePay.css";
import OnlinePayForm from "./onlinePayForm.jsx";
import ClientOrder from "./clientOrder";
import data from "../data.json";

class OnlinePay extends Component {
	state = { product: data.products.OnlinePay };

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState({ time: Date.now() }),
			5000
		);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	logoLoader = () => {
		const logos = [
			<img src={require("../svgs/logos/airbnb.svg")} alt="" />,
			<img src={require("../svgs/logos/apple.svg")} alt="" />,
			<img src={require("../svgs/logos/booking.svg")} alt="" />,
			<img src={require("../svgs/logos/netflix.svg")} alt="" />,
			<img src={require("../svgs/logos/paypal.svg")} alt="" />,
			<img src={require("../svgs/logos/playstation.svg")} alt="" />,
			<img src={require("../svgs/logos/wow.svg")} alt="" />,
			<img src={require("../svgs/logos/spotify.svg")} alt="" />,
			<img src={require("../svgs/logos/xbox.svg")} alt="" />,
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
		const { id, nameEn, nameFa, model } = this.state.product;
		return (
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
				<OnlinePayForm />
				<ClientOrder product={{ id, nameFa, nameEn, model }} />
			</div>
		);
	}
}

export default OnlinePay;

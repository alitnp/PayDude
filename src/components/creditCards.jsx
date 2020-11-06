import React, { Component } from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import ClientOrder from "./clientOrder.jsx";
import visacard from "../svgs/visa-colored.svg";
import mastercard from "../svgs/master-colored.svg";
import visagrey from "../svgs/visa-grey.svg";
import mastergrey from "../svgs/master-grey.svg";
import abilit1 from "../svgs/card-ability-1.svg";
import abilit2 from "../svgs/card-ability-2.svg";
import abilit3 from "../svgs/card-ability-3.svg";
import abilit4 from "../svgs/card-ability-4.svg";
import "../styles/creditCards.css";
import data from "../data.json";

class CreditCards extends Component {
	state = { product: data.products.Visa, expanded: false };
	componentDidMount() {
		window.scrollTo(0, 0);
		const selectedCard = this.props.location.pathname.slice(7);
		(selectedCard !== "") & (selectedCard !== undefined) &&
			this.handleCardChange(selectedCard);
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			const selectedCard = this.props.location.pathname.slice(7);
			(selectedCard !== "") & (selectedCard !== undefined) &&
				this.handleCardChange(selectedCard);
		}
		return;
	}
	handleCardChange = (cardName = "Visa", cardModel = 1) => {
		const selectedCard = data.products[cardName];
		if ((selectedCard !== "") & (selectedCard !== undefined)) {
			selectedCard.model = selectedCard.cardModels[cardModel];
			this.setState({ product: selectedCard, expanded: false });
		}
		return;
	};
	render() {
		const { nameEn, nameFa, model, specs, description } = this.state.product;
		const { expanded } = this.state;
		return (
			<React.Fragment>
				<Navbar toggled={true} />
				<Header />
				<div className="credit-cards col-xs-12">
					<div className="cards col-xs-12">
						<span>انتخاب کارت :</span>
						<div
							className={`card-choice ${nameEn === "Visa" && "selected"}`}
							onClick={() => {
								this.handleCardChange("Visa");
							}}>
							<span>ویزاکارت</span>
							<img src={visacard} alt="" />
						</div>
						<div
							className={`card-choice ${nameEn === "Master" && "selected"}`}
							onClick={() => {
								this.handleCardChange("Master");
							}}>
							<span>مسترکارت</span>
							<img src={mastercard} alt="" />
						</div>
					</div>
					<div className="card-desc">
						<div className="title">
							<h1>
								<img src={nameEn === "Visa" ? visagrey : mastergrey} alt="" />
								{nameFa}
								<hr />
							</h1>
							<p>{description}</p>
							<div className="table">
								<table>
									<thead>
										<tr>
											<th>انتخاب نوع کارت :</th>
											<th>
												<button
													className={model.level === 1 && "active"}
													onClick={() => {
														this.handleCardChange(nameEn, 1);
													}}>
													نقره ای
												</button>
											</th>
											<th>
												<button
													className={model.level === 2 ? "active" : ""}
													onClick={() => {
														this.handleCardChange(nameEn, 2);
													}}>
													طلایی
												</button>
											</th>
											<th>
												<button
													className={model.level === 3 ? "active" : ""}
													onClick={() => {
														this.handleCardChange(nameEn, 3);
													}}>
													پلاتینیومی
												</button>
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>محدودیت برداشت نقدی </td>
											<td>&#10004;</td>
											<td>&#10004;</td>
											<td>X</td>
										</tr>
										<tr>
											<td>محدودیت برداشت از POS</td>
											<td>&#10004;</td>
											<td>&#10004;</td>
											<td>X</td>
										</tr>
										<tr>
											<td>سرویس های VIP ویزا</td>
											<td>&#10004;</td>
											<td>&#10004;</td>
											<td>X</td>
										</tr>
										<tr>
											<td>میزان وجه بلوکه شده زمان تحویل)</td>
											<td>&#10004;</td>
											<td>&#10004;</td>
											<td>X</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className={"specs " + (expanded && "expanded")}>
							<h3>
								مشخصات
								<hr />
							</h3>
							<ul>
								{specs.map((list) => {
									return <li key={list}>{list}</li>;
								})}
							</ul>
							<div
								className="expander"
								onClick={() => {
									this.setState({ expanded: !expanded });
								}}>
								{expanded ? "بستن" : "بیشتر"}
							</div>
						</div>
					</div>
					<div className="ability-board">
						<div className="ability">
							<img src={abilit1} alt="" />
							<span>
								خرید اپلیکیشن ها و بازی های موبایل و پرداخت های درون برنامه ای
							</span>
						</div>
						<div className="ability">
							<img src={abilit2} alt="" />
							<span>
								پرداخت آنلاین به کلیه سایت هایی که از درگاه ویزا پشتیبانی می
								کنند و برداشت پول نقد از دستگاه های خود پرداز در سراسر دنیا
							</span>
						</div>
						<div className="ability">
							<img src={abilit3} alt="" />
							<span>
								احراز هویت و اتصال به حساب های پی پال، سکریل، پیزا، اوکی پی و
								غیره
							</span>
						</div>
						<div className="ability">
							<img src={abilit4} alt="" />
							<span>
								خرید بلیط کلیه پروازهای خارجی، قطارها و رزرو آنلاین هتل، کنسرت و
								همایش ها
							</span>
						</div>
					</div>
					<ClientOrder product={{ model }} />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default CreditCards;

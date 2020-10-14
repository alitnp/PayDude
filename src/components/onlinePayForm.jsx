import React, { Component } from "react";
import "../styles/onlinePayForm.css";
import currencyList from "../rates.json";
import data from "../data.json"

class OnlinePayForm extends Component {
	state = { OrderDetail: data.products.OnlinePay.model };

	handleChange = async (e) => {
		const OrderDetail = { ...this.state.OrderDetail };
		OrderDetail[e.target.name] = e.target.value;
		await this.setState({ OrderDetail });
		this.props.onChange(this.state.OrderDetail);

	};

	render() {
		const { OrderDetail } = this.state;
		return (
			<div className="Online-pay-form">
				<h4>ثبت سفارش</h4>
				<p>آدرس سایتی که در آن باید پرداخت صورت بگیرد را به همراه مبلغ درخواستی وارد نمایید.</p>
				<form action="">
					<div className="form-div">
						<div>
							<label
								className={
									OrderDetail.orderLink === ""
										? ""
										: "valued"
								}
								htmlFor="orderLink">
								آدرس سایت مقصد *
							</label>
							<input
								type="text"
								id="orderLink"
								name="orderLink"
								value={OrderDetail.orderLink}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<label
								className={
									OrderDetail.amount === "" ? "" : "valued"
								}
								htmlFor="amount">
								مبلغ درخواستی *
							</label>
							<input
								type="number"
								id="amount"
								name="amount"
								value={OrderDetail.amount}
								onChange={this.handleChange}
							/>
						</div>
						<div className="currency">
							<span htmlFor="currency">واحد پولی</span>
							<select name="currency" id="currency" defaultValue={OrderDetail.currency}
								onChange={this.handleChange}>
								{Object.entries(currencyList.currencies).map(
									([key, value]) => {
										return (
											<option key={key} value={key}>
												{key}
												{" - "}
												{value}
											</option>
										);
									}
								)}
							</select>
						</div>
						<div>
							<span
								className="desc-lable"
								htmlFor="orderDescription">
								توضیحات
							</span>
							<br />
							<small>
								در صورت نیاز به لاگین اطلاعات لازم را در توضیحات
								بنویسید.
							</small>
							<textarea
								type="text"
								id="orderDescription"
								name="orderDescription"
								value={OrderDetail.orderDescription}
								onChange={this.handleChange}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default OnlinePayForm;

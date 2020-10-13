import React, { Component } from "react";
import "../styles/onlinePayForm.css";
import { currencies } from "../rates.json";

class OnlinePayForm extends Component {
	state = { OrderDetail: { webAddress: "", nameEn: "", email: "" } };

	handleChange = (e) => {
		const OrderDetail = { ...this.state.OrderDetail };
		OrderDetail[e.target.name] = e.target.value;
		this.setState({ OrderDetail });
	};
	render() {
		const { OrderDetail } = this.state;
		return (
			<div className="Online-pay-form">
				<h4>ثبت سفارش</h4>
				<form action="">
					<div className="form-div">
						<div>
							<label
								className={
									OrderDetail.webAddress === ""
										? ""
										: "valued"
								}
								htmlFor="webAddress">
								آدرس سایت مقصد *
							</label>
							<input
								type="text"
								id="webAddress"
								name="webAddress"
								value={OrderDetail.webAddress}
								onChange={this.handleChange}
							/>
						</div>
						<div>
							<label
								className={
									OrderDetail.nameEn === "" ? "" : "valued"
								}
								htmlFor="nameEn">
								مبلغ درخواستی *
							</label>
							<input
								type="number"
								id="nameEn"
								name="nameEn"
								value={OrderDetail.nameEn}
								onChange={this.handleChange}
							/>
						</div>
						<div className="currency">
							<span htmlFor="currencies">واحد پولی</span>
							<select name="currencies" id="currencies">
								{Object.entries(currencies).map(
									([key, value]) => {
										return (
											<option value={key}>
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

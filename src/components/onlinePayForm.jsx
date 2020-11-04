import React, { Component } from "react";
import "../styles/onlinePayForm.css";
import currencyList from "../rates.json";
import data from "../data.json";

class OnlinePayForm extends Component {
	state = { OrderDetail: data.products.OnlinePay.model };

	handleChange = async (e) => {
		const OrderDetail = { ...this.state.OrderDetail };
		OrderDetail[e.target.name] = e.target.value;
		await this.setState({ OrderDetail });
		this.props.onChange(this.state.OrderDetail);
		const url = OrderDetail.orderLink.startsWith("http")
			? OrderDetail.orderLink
			: "https://" + OrderDetail.orderLink;
		if (this.regex.test(url)) {
		}
	};
	regex = RegExp(
		/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
	);
	re_weburl = RegExp(
		"^" +
			"(?:(?:(?:https?|ftp):)?\\/\\/)" +
			"(?:\\S+(?::\\S*)?@)?" +
			"(?:" +
			"(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
			"(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
			"(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
			"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
			"(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
			"(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
			"|" +
			"(?:" +
			"(?:" +
			"[a-z0-9\\u00a1-\\uffff]" +
			"[a-z0-9\\u00a1-\\uffff_-]{0,62}" +
			")?" +
			"[a-z0-9\\u00a1-\\uffff]\\." +
			")+" +
			"(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" +
			")" +
			"(?::\\d{2,5})?" +
			"(?:[/?#]\\S*)?" +
			"$",
		"i"
	);
	render() {
		const { OrderDetail } = this.state;
		return (
			<div className="Online-pay-form">
				<h4>ثبت سفارش</h4>
				<p>
					آدرس سایتی که در آن باید پرداخت صورت بگیرد را به همراه مبلغ درخواستی
					وارد نمایید.
				</p>
				<form action="">
					<div className="form-div">
						<div>
							<label
								className={OrderDetail.orderLink === "" ? "" : "valued"}
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
								className={OrderDetail.amount === "" ? "" : "valued"}
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
							<select
								name="currency"
								id="currency"
								defaultValue={OrderDetail.currency}
								onChange={this.handleChange}>
								{Object.entries(currencyList.currencies).map(([key, value]) => {
									return (
										<option key={key} value={key}>
											{key}
											{" - "}
											{value}
										</option>
									);
								})}
							</select>
						</div>
						<div>
							<span className="desc-lable" htmlFor="orderDescription">
								توضیحات
							</span>
							<br />
							<small>
								در صورت نیاز به لاگین اطلاعات لازم را در توضیحات بنویسید.
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

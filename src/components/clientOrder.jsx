import React, { Component } from "react";
import "../styles/clientOrder.css";

class clientOrder extends Component {
	state = { account: { nameFa: "", nameEn: "", email: "" } };

	handleChange = (e) => {
		const account = { ...this.state.account };
		account[e.target.name] = e.target.value;
		this.setState({ account });
	};
	render() {
		const { account } = this.state;
		const { nameFa, model } = this.props.product;
		return (
			<div className="client-order">
				<form action="">
					<input
						type="text"
						id="nameFa"
						name="nameFa"
						value={account.nameFa}
						onChange={this.handleChange}
					/>
					<label
						className={account.nameFa === "" ? "" : "valued"}
						htmlFor="nameFa">
						نام و نام خانوادگی (فارسی)
					</label>
					<input
						type="text"
						id="nameEn"
						name="nameEn"
						value={account.nameEn}
						onChange={this.handleChange}
					/>
					<label
						className={account.nameEn === "" ? "" : "valued"}
						htmlFor="nameEn">
						نام و نام خانوادگی (انگلیسی)
					</label>
					<input
						type="text"
						id="email"
						name="email"
						value={account.email}
						onChange={this.handleChange}
					/>
					<label
						className={account.email === "" ? "" : "valued"}
						htmlFor="email">
						ایمیل
					</label>
				</form>
				<div className="desc">
					<h3>{`${nameFa} ${model.nameFa}`}</h3>
				</div>
			</div>
		);
	}
}

export default clientOrder;

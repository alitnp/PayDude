import React, { Component } from "react";
import profile from "../images/profile.png";
import editIcon from "../svgs/edit.svg";

class ProfileEditor extends Component {
	state = {};
	componentDidMount() {
		this.setState({ ...this.props.user });
	}
	handleChange = (e) => {
		const user = { ...this.state };
		user[e.target.name] = e.target.value;
		this.setState({ ...user });
	};
	render() {
		const { usernameFa, usernameEn, email, phonenumber } = this.state;
		console.log(this.state);
		return (
			<form action="">
				<img src={profile} alt="" />
				<div>
					<label htmlFor="usernameFa" className={usernameFa && "valued"}>
						نام و نام خانوادگی فارسی
					</label>
					<input
						type="text"
						id="usernameFa"
						name="usernameFa"
						value={usernameFa}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="usernameEn" className={usernameEn && "valued"}>
						نام و نام خانوادگی انگلیسی
					</label>
					<input
						type="text"
						id="usernameEn"
						name="usernameEn"
						value={usernameEn}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email" className={email && "valued"}>
						آدرس ایمیل
					</label>
					<input
						type="text"
						id="email"
						name="email"
						value={email}
						onChange={this.handleChange}
					/>
				</div>
				<div>
					<label htmlFor="phonenumber" className={phonenumber && "valued"}>
						تلفن تماس
					</label>
					<input
						type="text"
						id="phonenumber"
						name="phonenumber"
						value={phonenumber}
						onChange={this.handleChange}
					/>
				</div>
			</form>
		);
	}
}

export default ProfileEditor;

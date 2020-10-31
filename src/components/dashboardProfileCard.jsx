import React from "react";
import profile from "../images/profile.png";
import editIcon from "../svgs/edit.svg";

const profileCard = (user) => {
	return (
		<div className=" card profile-card">
			<img
				className="edit-icon"
				src={editIcon}
				alt=""
				onClick={() => {
					this.setState({ selected: "profile" });
				}}
			/>
			<small>کاربر</small>
			<div className="pic">
				<img src={profile} alt="" />
			</div>
			<div className="info">
				<span>نام: {user.usernameFa}</span>
				<span>نام: {user.usernameEn}</span>
				<span>ایمیل: {user.email}</span>
				<span>شماره موبایل: {user.phonenumber}</span>
			</div>
		</div>
	);
};
export default profileCard;

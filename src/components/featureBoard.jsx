import React from "react";
import cardlogo1 from "../svgs/card-logo-1.svg";
import cardlogo2 from "../svgs/card-logo-2.svg";
import cardlogo3 from "../svgs/card-logo-3.svg";
import cardlogo4 from "../svgs/card-logo-4.svg";
import "../styles/featureBoard.css";
import { Link } from "react-router-dom";

const featureBoard = () => {
	return (
		<div className="feature-board">
			<Link className="feature-card" to="/cards">
				<div className="card-title ">
					<img src={cardlogo1} alt="" className=" " />
					<h3>حساب بین المللی</h3>
				</div>
				<div className="card-list ">
					<ul className="">
						<li className="">افتتاح حساب</li>
						<li className="">ویزا کارت</li>
						<li>مستر کارت</li>
						<li>حواله به حساب</li>
					</ul>
				</div>
			</Link>

			<Link className="feature-card " to="/onlinepay">
				<div className="card-title">
					<img src={cardlogo2} alt="" className=" " />
					<h3>پرداخت آنلاین</h3>
				</div>
				<div className="card-list">
					<ul className="">
						<li className="">افتتاح حساب</li>
						<li className="">ویزا کارت</li>
						<li>مستر کارت</li>
						<li>حواله به حساب</li>
					</ul>
				</div>
			</Link>
			{/* <div className="feature-card " style={{ display: "none" }}>
				<div className="card-title">
					<img src={cardlogo3} alt="" className=" " />
					<h3>انتقال وجه به سراسر دنیا</h3>
				</div>
				<div className="card-list">
					<ul className="">
						<li className="">افتتاح حساب</li>
						<li className="">ویزا کارت</li>
						<li>مستر کارت</li>
						<li>حواله به حساب</li>
					</ul>
					<ul className="">
						<li>ویزا کارت</li>
						<li>مستر کارت</li>
						<li>حواله به حساب</li>
						<li>ویزا کارت</li>
					</ul>
				</div>
			</div> */}
			<Link className="feature-card " to="/drivinglicense">
				<div className="card-title">
					<img src={cardlogo4} alt="" className=" " />
					<h3>گواهینامه بین المللی</h3>
				</div>
				<div className="card-list">
					<ul className="">
						<li className="">افتتاح حساب</li>
						<li className="">ویزا کارت</li>
						<li>مستر کارت</li>
						<li>حواله به حساب</li>
					</ul>
				</div>
			</Link>
		</div>
	);
};

export default featureBoard;

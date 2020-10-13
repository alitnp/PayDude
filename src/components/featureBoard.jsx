import React from "react";
import { Link } from "react-router-dom";
import cardlogo1 from "../svgs/card-logo-1.svg";
import cardlogo2 from "../svgs/card-logo-2.svg";
import cardlogo3 from "../svgs/card-logo-3.svg";
import cardlogo4 from "../svgs/card-logo-4.svg";
import "../styles/featureBoard.css";

const featureBoard = () => {
	return (
		<div className="feature-board">
			<div className="feature-card ">
				<div className="card-title ">
					<img src={cardlogo1} alt="" className=" " />
					<h3>حساب بین المللی</h3>
				</div>
				<div className="card-list ">
					<ul className="">
						<li className="">افتتاح حساب</li>
						<li className="">
							<Link to="/cards">ویزا کارت</Link>
						</li>
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
			</div>
			<div className="feature-card ">
				<div className="card-title">
					<img src={cardlogo2} alt="" className=" " />
					<h3>
						<Link to="/onlinepay">پرداخت آنلاین</Link>
					</h3>
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
					</ul>
				</div>
			</div>
			<div className="feature-card ">
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
			</div>
			<div className="feature-card ">
				<div className="card-title">
					<img src={cardlogo4} alt="" className=" " />
					<h3>احراز هویت بین المللی</h3>
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
			</div>
		</div>
	);
};

export default featureBoard;

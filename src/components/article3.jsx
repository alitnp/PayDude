import React from "react";
import { Link } from "react-router-dom";
import "../styles/article.css";
import arrow from "../svgs/arrow.svg";

const article3 = () => {
	return (
		<article className="article-2-2 col-xs-12">
			<div className="image col-xs-12 col-m-5 col-l-6"></div>
			<div className="detail col-xs-12 col-m-7 col-l-6">
				<div className="">
					<h2 className="">گواهینامه رانندگی بین المللی</h2>
					<p className="">
						{" "}
						این گواهینامه که زیر نظر سازمان بین المللی اتومبیل رانی قوانین مصوب
						سازمان ملل در مورد راه و ترافیک صادر می گردد، یک برگردان و ترجمه از
						گواهینامه رانندگی ملی شما بدون آزمون و تست رانندگی می باشد.
						گواهینامه بین المللی رانندگی نشان دهنده این است که شما در کشور
						خودتان یک گواهینامه رانندگی معتبر دارید. این گواهینامه به هشت زبان
						رایج بین المللی دنیا (شش زبان رسمی سازمان ملل متحد: انگلیسی،
						فرانسوی، اسپانیایی، روسی، عربی، چینی و همچنین دو زبان آلمانی و
						ژاپنی) ترجمه گردیده است و همچنین دارای دفترچه مجزا نیز می باشد.
					</p>
				</div>

				<div className="order-icons col-xs-12">
					<div className="order">
						<img src={arrow} alt="" />
						<Link to="/drivinglicense">
							<span>ثبت سفارش</span>
						</Link>
					</div>
					<div className="icons"></div>
				</div>
			</div>
		</article>
	);
};

export default article3;

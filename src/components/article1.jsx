import React from "react";
import "../styles/article.css";
import visacard from "../svgs/visa-colored.svg";
import mastercard from "../svgs/master-colored.svg";
import arrow from "../svgs/arrow.svg";
import data from "../data.json";

const article1 = () => {
	return (
		<article className="article-1 col-xs-12">
			<div className="image col-xs-12 col-m-5 col-l-6"></div>
			<div className="detail col-xs-12 col-m-7 col-l-6">
				<div className="">
					<h2 className="">{data.texts.article1.h2}</h2>
					<p className="">
						{data.texts.article1.p}
					</p>
				</div>

				<div className="order-icons col-xs-12">
					<div className="order">
						<img src={arrow} alt="" />
						<span>ثبت سفارش</span>
					</div>
					<div className="icons">
						<img src={visacard} alt="" />
						<img src={mastercard} alt="" />
					</div>
				</div>
			</div>
		</article>
	);
};

export default article1;

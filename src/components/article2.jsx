import React from "react";
import "../styles/article.css";
import arrow from "../svgs/arrow.svg";

const article2 = () => {
	return (
		<article className="article-2-1 col-xs-12">
			<div className="image col-xs-12 col-m-5 col-l-6"></div>
			<div className="detail col-xs-12 col-m-7 col-l-6">
				<div className="">
					<h2 className="">یک پرداخت بی دردسر</h2>
					<p className="">
						پرداخت هزینه آزمون های مختلف از جمله آزمون PTE و Toefl
						<br />
						پرداخت و خرید کالا و محصولات مجازی و غیر فیزیکی <br />
						پرداخت هزینه دانشگاه های خارجی <br />
						پرداخت هزینه سفارت های خارجی جهت اخذ ویزا، تایید مدارک
						و... <br />
						پرداخت هزینه خرید هاست و دامنه های خارجی <br />
						پرداخت و رزرو هتل در سراسر دنیا <br />
						پرداخت هزینه حق اشتراک سایت های مختلف <br />
						پرداخت هزینه همایش، کنفرانس و... <br />
					</p>
				</div>

				<div className="order-icons col-xs-12">
					<div className="order">
						<img src={arrow} alt="" />
						<span>ثبت سفارش</span>
					</div>
					<div className="icons"></div>
				</div>
			</div>
		</article>
	);
};

export default article2;

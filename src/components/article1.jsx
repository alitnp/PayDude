import React from 'react';
import "../styles/article.css";
import visacard from "../svgs/visa-colored.svg";
import mastercard from "../svgs/master-colored.svg";
import arrow from "../svgs/arrow.svg";

const article1 = () => {
	return (<article className="article-1 col-xs-12">
		<div className="image col-xs-12 col-m-5 col-l-6"></div>
		<div className="detail col-xs-12 col-m-7 col-l-6">
			<div className="">
				<h2 className="">یک حساب شخصی بین المللی</h2>
				<p className="">
					از مشکلات مسافران ایرانی عازم به خارج از کشور
					حمل پول نقد و نداشتن امکانی برای همراه بردن پول
					نقد بصورت کیف الکترونیکی باشد. از طرفی دیگر آن
					گروه از افرادی که در اینترنت و دنیای آنلاین به
					فعالیت می پردازند جهت انجام کلیه پرداخت ها و
					خریدهای خود از سایت های خارجی نیاز
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
	</article>);
}

export default article1;

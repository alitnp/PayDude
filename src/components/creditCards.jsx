import React, { Component } from "react";
import visacard from "../svgs/visa-colored.svg";
import mastercard from "../svgs/master-colored.svg";
import visagrey from "../svgs/visa-grey.svg";
import mastergrey from "../svgs/master-grey.svg";
import "../styles/creditCards.css";

class CreditCards extends Component {
	state = {
		selectedCard: "visa",
		expanded: false,
	};

	hanleCardChange = (card) => {
		this.setState({ selectedCard: card });
	};
	render() {
		const { selectedCard, expanded } = this.state;
		return (
			<div className="credit-cards col-xs-12">
				<div className="cards col-xs-12">
					<div
						className={`card-choice master ${
							selectedCard === "visa" && "selected"
						}`}
						onClick={() => {
							this.hanleCardChange("visa");
						}}>
						<span>ویزاکارت</span>
						<img src={visacard} alt="" />
					</div>
					<div
						className={`card-choice master ${
							selectedCard === "master" && "selected"
						}`}
						onClick={() => {
							this.hanleCardChange("master");
						}}>
						<span>مسترکارت</span>
						<img src={mastercard} alt="" />
					</div>
				</div>
				<div className="card-desc">
					<h1>
						ویزا کارت <img src={visagrey} alt="" />
						<hr />
					</h1>
					<p>
						از مشکلات مسافران ایرانی عازم به خارج از کشور حمل پول
						نقد و نداشتن امکانی برای همراه بردن پول نقد بصورت کیف
						الکترونیکی باشد. از طرفی دیگر آن گروه از افرادی که در
						اینترنت و دنیای آنلاین به فعالیت می پردازند جهت انجام
						کلیه پرداخت ها و خریدهای خود از سایت های خارجی نیاز به
						داشتن ویزا کارت و مسترکارت دارند تا بتوانند عملیات
						پرداخت آنلاین را بصورت مستقل انجام دهند. 
					</p>
					<div className={"specs " + (expanded && "expanded")}>
						<h3>
							مشخصات
							<hr />
						</h3>
						<ul>
							<li>بدون سقف موجودی</li>
							<li>قابلیت شارژ به دفعات نامحدود</li>
							<li>قابلیت اخذ Reference Letter از بانک</li>
							<li>قابلیت شارژ به هر میزان دلخواه در هر زمان </li>
							<li>
								دارای اینترنت بانک با قابلیت مشاهده مانده حساب
							</li>
							<li>
								قابلیت برداشت از ATM / POS / خرید آنلابن روزانه
							</li>
							<li>
								قابلیت اطلاع از مانده موجودی در تمام خودپرداز
								های Master
							</li>
							<li>حک شدن نام دارنده بر روی ویزا کارت</li>
							<li>مسترکارت بانکی قابل تمدید</li>
							<li>
								نوع ارز مستر کارت به دلار / یورو می باشد (به
								انتخاب شما)
							</li>
							<li>
								قابلیت استفاده در تمامی خودپردازهای (ATM) متصل
								به Master
							</li>
							<li>
								قابلیت اتصال و وریفای حساب های پی پال، اسکریل،
								اوکی پی و غیره
							</li>
							<li>
								قابلیت استفاده در تمامی پایانه های فروشگاهی
								(POS) خارج از کشور
							</li>
							<li>در چهار نوع، که در جدول زیر مقایسه شده.</li>
							<li>
								ارسال اس ام اس برای کلیه تراکنش ها به شماره
								موبایل ایران
							</li>
							<li>صدور کارت بدون نیاز به سپرده اولیه </li>
							<li>
								دارای حساب بانکی به نام دارنده کارت که صاحب کارت
								را مستقل از واسطه ها برای انتقال وجه می کند
							</li>
							<li>
								صدور و تحویل کارت در ایران طی مدت زمان دو الی سه
								هفته
							</li>
							<li>امکان کارت به کارت (بین کارتهای همان بانک)</li>
						</ul>
						<div
							className="expander"
							onClick={() => {
								this.setState({ expanded: !expanded });
							}}>
							{expanded ? "بستن" : "بیشتر"}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CreditCards;

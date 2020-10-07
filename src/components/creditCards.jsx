import React, { Component } from "react";
import visacard from "../svgs/visa-colored.svg";
import mastercard from "../svgs/master-colored.svg";
import visagrey from "../svgs/visa-grey.svg";
import mastergrey from "../svgs/master-grey.svg";
import "../styles/creditCards.css";

class CreditCards extends Component {
	state = {
		selectedCard: "visa",
	};

	hanleCardChange = (card) => {
		this.setState({ selectedCard: card });
	};
	render() {
		const { selectedCard } = this.state;
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
						پرداخت آنلاین را بصورت مستقل انجام دهند. ما انواع ویزا
						کارت فیزیکی با نام و متصل به حساب را معرفی کرده ایم که
						شما میتوانید اطلاعات هر کدام را مطالعه نموده و سپس با
						توجه به نیاز خود سفارش دهید
					</p>
					<div className="specs">
						<h3>
							مشخصات
							<hr />
						</h3>
						<p>
							بدون سقف موجودی - قابلیت شارژ به دفعات نامحدود -
							قابلیت اخذ Reference Letter از بانک - قابلیت شارژ به
							هر میزان دلخواه در هر زمان - دارای اینترنت بانک با
							قابلیت مشاهده مانده حساب - قابلیت برداشت از ATM /
							POS / خرید آنلابن روزانه - قابلیت اطلاع از مانده
							موجودی در تمام خودپرداز های Master - حک شدن نام
							دارنده بر روی ویزا کارت - مسترکارت بانکی قابل تمدید
							- نوع ارز مستر کارت به دلار / یورو می باشد (به
							انتخاب شما) - قابلیت استفاده در تمامی خودپردازهای
							(ATM) متصل به Master - قابلیت اتصال و وریفای حساب
							های پی پال، اسکریل، اوکی پی و غیره - قابلیت استفاده
							در تمامی پایانه های فروشگاهی (POS) خارج از کشور - در
							چهار نوع، که در جدول زیر مقایسه شده. - ارسال اس ام
							اس برای کلیه تراکنش ها به شماره موبایل ایران - صدور
							کارت بدون نیاز به سپرده اولیه - دارای حساب بانکی به
							نام دارنده کارت که صاحب کارت را مستقل از - واسطه ها
							برای انتقال وجه می کند صدور و تحویل کارت در ایران طی
							مدت زمان دو الی سه هفته - امکان کارت به کارت (بین
							کارتهای همان بانک) -
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default CreditCards;

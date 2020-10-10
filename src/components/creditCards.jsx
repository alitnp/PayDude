import React, { Component } from "react";
import visacard from "../svgs/visa-colored.svg";
import mastercard from "../svgs/master-colored.svg";
import visagrey from "../svgs/visa-grey.svg";
import mastergrey from "../svgs/master-grey.svg";
import cardAblitie1 from "../svgs/card-ability-1.svg";
import cardAblitie2 from "../svgs/card-ability-2.svg";
import cardAblitie3 from "../svgs/card-ability-3.svg";
import cardAblitie4 from "../svgs/card-ability-4.svg";
import paymentPic from "../images/payment-pic.jpg";
import "../styles/creditCards.css";

class CreditCards extends Component {
	state = {
		selectedCard: "visa",
		level: 1,
		expanded: false,
	};

	hanleCardChange = (card) => {
		this.setState({ selectedCard: card });
	};
	render() {
		const { selectedCard, expanded, level } = this.state;
		return (
			<div className="credit-cards col-xs-12">
				<div className="cards col-xs-12">
					<span>انتخاب کارت :</span>
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
					<div className="title">
						<h1>
							<img
								src={
									selectedCard === "visa"
										? visagrey
										: mastergrey
								}
								alt=""
							/>
							{selectedCard === "visa"
								? "ویزا کارت"
								: "مستر کارت"}
							<hr />
						</h1>
						<p>
							از مشکلات مسافران ایرانی عازم به خارج از کشور حمل
							پول نقد و نداشتن امکانی برای همراه بردن پول نقد
							بصورت کیف الکترونیکی باشد. از طرفی دیگر آن گروه از
							افرادی که در اینترنت و دنیای آنلاین به فعالیت می
							پردازند جهت انجام کلیه پرداخت ها و خریدهای خود از
							سایت های خارجی نیاز به داشتن ویزا کارت و مسترکارت
							دارند تا بتوانند عملیات پرداخت آنلاین را بصورت مستقل
							انجام دهند.
						</p>
						<div className="table">
							<table>
								<tr>
									<th>انتخاب نوع</th>
									<th>
										<button
											className={level === 1 && "active"}
											onClick={() => {
												this.setState({ level: 1 });
											}}>
											نقره ای
										</button>
									</th>
									<th>
										<button
											className={level === 2 && "active"}
											onClick={() => {
												this.setState({ level: 2 });
											}}>
											طلایی
										</button>
									</th>
									<th>
										<button
											className={level === 3 && "active"}
											onClick={() => {
												this.setState({ level: 3 });
											}}>
											پلاتینیومی
										</button>
									</th>
								</tr>
								<tr>
									<td>محدودیت برداشت نقدی </td>
									<td>&#10004;</td>
									<td>&#10004;</td>
									<td>X</td>
								</tr>
								<tr>
									<td>محدودیت برداشت از POS</td>
									<td>&#10004;</td>
									<td>&#10004;</td>
									<td>X</td>
								</tr>
								<tr>
									<td>سرویس های VIP ویزا</td>
									<td>&#10004;</td>
									<td>&#10004;</td>
									<td>X</td>
								</tr>
								<tr>
									<td>میزان وجه بلوکه شده زمان تحویل)</td>
									<td>&#10004;</td>
									<td>&#10004;</td>
									<td>X</td>
								</tr>
							</table>
						</div>
					</div>

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
				<div className="card-abilities">
					<div className="ability">
						<img src={cardAblitie1} alt="" />
						<span>خرید اپلیکیشن ها و بازی های موبایل </span>
					</div>
					<div className="ability">
						<img src={cardAblitie2} alt="" />
						<span>
							{`پرداخت آنلاین به کلیه سایت هایی که از درگاه ${
								selectedCard === "visa"
									? "ویزا کارت"
									: "مستر کارت"
							}
							پشتیبانی می کنند`}
						</span>
					</div>
					<div className="ability">
						<img src={cardAblitie3} alt="" />
						<span>
							احراز هویت و اتصال به حساب های پی پال، سکریل، پیزا،
							اوکی پی و غیره
						</span>
					</div>
					<div className="ability">
						<img src={cardAblitie4} alt="" />
						<span>
							خرید بلیط کلیه پروازهای خارجی ، قطارها و رزرو آنلاین
							هتل
						</span>
					</div>
				</div>
				<div className="payment"></div>
			</div>
		);
	}
}

export default CreditCards;

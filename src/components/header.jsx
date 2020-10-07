import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../svgs/logo.svg";
import user from "../svgs/user.svg";
import search from "../svgs/search.svg";
import bar from "../svgs/bar.svg";
import slideRight from "../svgs/chevron-right.svg";
import slideLeft from "../svgs/chevron-left.svg";
import visaIcon from "../svgs/visa.svg";
import cards from "../svgs/cards.png";

class Header extends Component {
	state = {
		xposition: 0,
		colors: ["var(--blue)", "rgb(226, 124, 76)", " var(--text-green)"],
		bgcolor: "var(--blue)",
	};
	constructor() {
		super();
		setInterval(() => {
			this.handleSlide(150);
		}, 8000);
	}
	handleSlide = (add) => {
		let x = this.state.xposition;
		x += add;
		if (x < -300) x = 0;
		if (x > 0) x = -300;
		this.setState({
			xposition: x,
			bgcolor: this.state.colors[(x / 150) * -1],
		});
	};
	render() {
		return (
			<header>
				<nav className="navbar col-xs-12">
					<div className="navaside col-xs-5 col-m-3">
						<img alt="" src={bar} className="nav-icon"></img>
						<img alt="" src={search} className="nav-icon"></img>
						<a href="/#">
							<img alt="" src={user} className="nav-icon"></img>
							<span>پنل شخصی</span>
						</a>
					</div>

					<ul className="col-xs-3 col-m-7 col-l-8">
						<li>
							<a href="/#">خانه</a>
						</li>

						<li>
							<a href="/#">حساب بین المللی</a>
						</li>
						<li>
							<a href="/#">پرداخت آنلاین</a>
						</li>
						<li>
							<a href="/#">احراز هویت</a>
						</li>
					</ul>
					<Link to="/" className="logo col-xs-4 col-m-2 col-l-1">
						پیدود
						<img alt="" src={logo}></img>
					</Link>
				</nav>
				<div
					className="slider col-xs-12"
					style={{ background: `${this.state.bgcolor}` }}>
					<div className="slider-fader"></div>
					<div
						className="slide-button col-xs-1"
						onClick={() => this.handleSlide(150)}>
						<img alt="" src={slideLeft} />
					</div>
					<div
						className="middle-container col-xs-10"
						style={{
							transform: `translateX(${this.state.xposition}%)`,
						}}>
						<div className="slide-middle">
							<div className="slider-info ">
								<div className="slider-title">
									<h1>ویزا کارت</h1>
									<img alt="" src={visaIcon} className="" />
								</div>

								<span className="slider-text">
									ویزا کارت با نام شما، دارای حساب بانکی
									مستقل، اینترنت بانک و امکان ارسال حواله
									بانکی
								</span>
							</div>
							<img alt="" src={cards} className="cards" />
						</div>
						<div className="slide-middle slider-second">
							<div className="slider-info">
								<div className="slider-title ">
									<h1>ویزا کارت</h1>
									<img alt="" src={visaIcon} className="" />
								</div>

								<span className="slider-text">
									ویزا کارت با نام شما، دارای حساب بانکی
									مستقل، اینترنت بانک و امکان ارسال حواله
									بانکی
								</span>
							</div>
							<img alt="" src={cards} className="cards" />
						</div>
						<div className="slide-middle slider-third">
							<div className="slider-info">
								<div className="slider-title">
									<h1>ویزا کارت</h1>
									<img alt="" src={visaIcon} className="" />
								</div>

								<span className="slider-text">
									ویزا کارت با نام شما، دارای حساب بانکی
									مستقل، اینترنت بانک و امکان ارسال حواله
									بانکی
								</span>
							</div>
							<img alt="" src={cards} className="cards" />
						</div>
					</div>
					<div
						className="slide-button col-xs-1"
						onClick={() => this.handleSlide(-150)}>
						<img alt="" src={slideRight} />
					</div>
				</div>
			</header>
		);
	}
}

export default Header;

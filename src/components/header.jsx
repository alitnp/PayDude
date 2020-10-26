import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
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

	interval;

	componentDidMount() {
		this.interval = setInterval(() => {
			this.handleSlide(150);
		}, 8000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	handleSlide = (add) => {
		clearInterval(this.interval);
		let x = this.state.xposition;
		x += add;
		(x < -300) && (x = 0);
		(x > 0) && (x = -300);
		this.setState({
			xposition: x,
			bgcolor: this.state.colors[(x / 150) * -1],
		});
		this.interval = setInterval(() => {
			this.handleSlide(150);
		}, 8000);
	};
	render() {
		return (
			<header className="header">
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

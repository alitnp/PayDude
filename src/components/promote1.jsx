import React from "react";
import "../styles/promote.css";
import binanceLogo from "../svgs/Binance_logo.svg";
const promote = (props) => {
    return (
        <a
            href="/#"
            style={{ textDecoration: "none", color: "#f3ba2f" }}>
            <div
                className="promote col-xs-12"
                style={{ backgroundColor: "var(--text-black)" }}>
                <img src={binanceLogo} alt="" />
                <div className="promote-title">
                    <h1>وریفای حساب بایننس</h1>
                    <span>احراز هویت با نام شما</span>
                </div>
            </div>
        </a>
    );
};

export default promote;

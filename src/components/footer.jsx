import React from "react";
import "../styles/footer.css";
import logo from "../svgs/logo.svg";
import facebook from "../svgs/facebook.svg";
import instagram from "../svgs/instagram.svg";
import telegram from "../svgs/telegram.svg";

const footer = () => {
    return (
        <div className="footer col-xs-12">
            <div className="logo-socials">
                <a href="/#" className="logo col-xs-4 col-m-2 col-l-1">
                    <span className="">پیدود</span>
                    <img className="" alt="" src={logo}></img>
                </a>
                <p>خدمات پرداخت ارزی و حساب های بین المللی</p>
                <div className="social-icons">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={telegram} alt="" />
                </div>
            </div>
            <div className="info">
                <p dir="rtl">تلفن تماس : 12345678 - 021</p>
                <p dir="rtl">ایمیل : Info@paydude.com</p>
                <p dir="rtl">درباره ما</p>
            </div>
            <div className="legals"></div>
            <div className="desc">
                <p>
                    خدمات ارائه شده در پیدود حاصل سال ها تجربه موفق در ایجاد راه
                    کارهای کامل و مناسب با شرایط خاص کشور عزیزمان ایران می باشد.
                    آشنا کردن کاربران و علاقمندان به تجارت های نوین با واقعیت
                    های دنیای مجازی اینترنت و روش کسب و کار صحیح در آن یکی از
                    اهداف عمده این مجموعه است. کليه فعاليت وب سايت طبق قوانين
                    جمهوری اسلامی ايران می باشد و منابع مالی و خدماتی هيچگونه
                    ارتباطی با منابع ارزی کشور نداشته و ارائه خدمات منوط به
                    موجودی خارجی گروه می باشد. همچنین از هر گونه نقل و انتقال
                    ارزی در داخل چه به صورت حواله و به صورت نقدی معذوريم.
                </p>
            </div>
        </div>
    );
};

export default footer;

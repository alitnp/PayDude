import React from "react";
import "../styles/promote.css";
import bill from "../svgs/bill.svg";
const promote = (props) => {
    return (
        <a
            href="/#"
            style={{ textDecoration: "none", color: "var(--blue)" }}>
            <div
                className="promote col-xs-12"
                style={{ backgroundColor: "#fff", flexDirection: "row-reverse", justifyContent: "center", alignItems: "center", padding: "0", marginBottom: "0" }}>
                <img className="" src={bill} alt="" style={{ width: "86px", height: "86px", padding: "0", marginLeft: "15px" }} />
                <div className="promote-title" style={{ padding: "0", margin: "0", whiteSpace: "wrap" }}>
                    <h1> ثبت آدرس رسمی به همراه قبض برق در اروپا و آمریکا</h1>

                </div>
            </div>
        </a>
    );
};

export default promote;
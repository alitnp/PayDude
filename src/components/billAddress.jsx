import React, { Component } from 'react';
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import MainTitle from "./mainTitle"
import data from "../data.json";
import "../styles/billAddress.css";

class BillAddress extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="bill-address">
                    <MainTitle text={data.texts.billAddress} />
                    <div className="description">
                        <p>{data.texts.billAddress.desc1}</p>
                        <p><span>موارد استفاده : </span>{data.texts.billAddress.desc2}</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default BillAddress;
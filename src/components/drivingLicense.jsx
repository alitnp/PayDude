import React, { Component } from 'react';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import MainTitle from './mainTitle.jsx';
import DocumentUploader from './documentUploader.jsx';
import ClientOrder from "./clientOrder";
import data from "../data.json";
import { texts } from "../data.json";
import calenderCheck from "../svgs/calendar-check-grey.svg";
import wallet from "../svgs/wallet-grey.svg";
import document from "../svgs/document-grey.svg";
import licenseImage from "../images/driving-licence.png";
import "../styles/drivingLicense.css";



class DrivingLicense extends Component {
    state = {}
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <React.Fragment>
                <Navbar toggled={true} />
                <Header />
                <div className="drivin-license">
                    <MainTitle text={texts.drivingLicense} />
                    <div className="description">
                        <p>{texts.drivingLicense.desc1}</p>
                        <p>{texts.drivingLicense.desc2}</p>
                        <div className="p-container">


                            <p>{texts.drivingLicense.desc3}</p>
                        </div>
                        <div className="img-container">
                            <img src={licenseImage} alt="" />
                            <img src={licenseImage} alt="" />
                        </div>
                    </div>
                    <div className="specs">
                        <div className="spec"><img src={calenderCheck} alt="" />

                            <p><span>زمان تحویل: </span>
                                {data.texts.drivingLicense.specs[0]}
                            </p>
                        </div>
                        <div className="spec"><img src={wallet} alt="" />
                            <p><span>هزینه صدور و ارسال:  </span>
                                {data.texts.drivingLicense.specs[1]}
                            </p>
                        </div>
                        <div className="spec"><img src={document} alt="" />
                            <p><span>مدارک لازم:  </span>
                                {data.texts.drivingLicense.specs[2]}
                            </p>
                        </div>
                    </div>
                    <DocumentUploader />
                    <ClientOrder className="client-order" product={data.products.DrivingLicense} />
                </div>
                <Footer />
            </React.Fragment>

        );
    }
}

export default DrivingLicense; 
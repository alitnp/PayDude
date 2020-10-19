import React, { Component } from 'react';
import MainTitle from './mainTitle';
import { texts } from "../data.json";

class DrivingLicense extends Component {
    state = {}
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (<div className="drivin-license">
            <MainTitle text={texts.drivingLicense} />
        </div>);
    }
}

export default DrivingLicense;
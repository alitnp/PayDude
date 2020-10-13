import React, { Component } from "react";
import "../styles/mainPage.css";
import MainTitle from "./mainTitle.jsx";
import FeatureBoard from "./featureBoard.jsx";
import Article1 from "./article1.jsx";
import Article2 from "./article2.jsx";
import Article3 from "./article3.jsx";
import Promote1 from "./promote1.jsx";
import Promote2 from "./promote2.jsx";
import Fade from "react-reveal/Fade";
import {texts} from "../data.json";

class MainPage extends Component {
	state = {};
	render() {
		return (
			<main className="main col-xs-12">
				<MainTitle text={texts.mainPage}
				/>
				<FeatureBoard />
				<Fade bottom>
					<Article1 />
					<Article2 />
				</Fade>
				<Promote1 />
				<Fade bottom>
					<Article3 />
				</Fade>
				<Promote2 />
			</main>
		);
	}
}

export default MainPage;

import React, { Component } from "react";
import "../styles/mainPage.css";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import MainTitle from "./mainTitle.jsx";
import FeatureBoard from "./featureBoard.jsx";
import Article1 from "./article1.jsx";
import Article2 from "./article2.jsx";
import Article3 from "./article3.jsx";
import Promote1 from "./promote1.jsx";
import Promote2 from "./promote2.jsx";
import Fade from "react-reveal/Fade";
import { texts } from "../data.json";
import { Link } from "react-router-dom";

class MainPage extends Component {
	state = {};
	render() {
		return (<React.Fragment>
			<Navbar toggled={true} />
			<Header />
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
				<Link to="/billaddress"><Promote2 /></Link>
			</main>
			<Footer />
		</React.Fragment>

		);
	}
}

export default MainPage;

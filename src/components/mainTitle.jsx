import React from "react";
import "../styles/mainTitle.css";


const mainTitle = ({ text }) => {
	return (
		<div className="main-title">
			<h1>{text.h1}</h1>
			<p>{text.p}</p>
		</div>
	);
};

export default mainTitle;

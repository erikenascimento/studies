import React, { Component } from "react";
import "./Banner.css";

class Banner extends Component {
	render() {
		return (
			<header className="banner">
				<img
					src="/img/banner.png"
					alt="O banner principal da página do Organo"
				/>
			</header>
		);
	}
}

export default Banner;

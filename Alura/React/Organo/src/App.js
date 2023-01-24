import React, { Component } from "react";
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Banner />
				<CampoTexto />
			</div>
		);
	}
}

export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./componentes/Banner/Banner";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Banner />
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Bem-vindo ao react</h2>
				</div>
				<p className="App-intro">
					Para começar, edite <code>src/App.js</code> e salve para recarregar.
				</p>
			</div>
		);
	}
}

export default App;

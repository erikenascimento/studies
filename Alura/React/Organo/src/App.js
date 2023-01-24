import React, { Component } from "react";
import Banner from "./componentes/Banner";
import CampoTexto from "./componentes/CampoTexto";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Banner />
				<CampoTexto label="Nome" placeholder="Digite seu nome" />
				<CampoTexto label="Cargo" placeholder="Digite seu cargo" />
				<CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
				<CampoTexto label="Time" />
			</div>
		);
	}
}

export default App;

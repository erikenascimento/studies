import React, { Component } from "react";
import "./CampoTexto.css";

class CampoTexto extends Component {
	render() {
		return (
			<div className="campo-texto">
				<label>Nome</label>
				<input placeholder="Digite o seu nome" />
			</div>
		);
	}
}

export default CampoTexto;

import React, { Component } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";

class Formulario extends Component {
	render() {
		return (
			<section className="formulario">
				<form>
					<h2>Preencha os dados para criar o card do colaborador</h2>
					<CampoTexto label="Nome" placeholder="Digite seu nome" />
					<CampoTexto label="Cargo" placeholder="Digite seu cargo" />
					<CampoTexto
						label="Imagem"
						placeholder="Digite o endereço da imagem"
					/>
					<CampoTexto label="Time" />
				</form>
			</section>
		);
	}
}

export default Formulario;

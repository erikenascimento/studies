import React, { Component } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";

class Formulario extends Component {
	render() {
		const times = [
			"Programação",
			"Front-End",
			"Mobile",
			"Data Science",
			"Devops",
			"UX e Design",
			"Inovação e Gestão",
		];
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
					<ListaSuspensa label="Time" itens={times} />
				</form>
			</section>
		);
	}
}

export default Formulario;

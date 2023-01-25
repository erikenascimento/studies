import React, { Component } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

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

		const aoSalvar = evento => {
			evento.preventDefault();
			console.log("Form foi submetido");
		};

		return (
			<section className="formulario">
				<form onSubmit={aoSalvar}>
					<h2>Preencha os dados para criar o card do colaborador</h2>
					<CampoTexto
						required={true}
						label="Nome"
						placeholder="Digite seu nome"
					/>
					<CampoTexto
						required={true}
						label="Cargo"
						placeholder="Digite seu cargo"
					/>
					<CampoTexto
						label="Imagem"
						placeholder="Digite o endereço da imagem"
					/>
					<ListaSuspensa required={true} label="Time" itens={times} />
					<Botao>Criar Card</Botao>
				</form>
			</section>
		);
	}
}

export default Formulario;

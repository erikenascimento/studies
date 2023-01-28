import React from "react";
import styles from "./Banner.module.scss";
import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.apresentacao}>
				<h1 className={styles.titulo}>Olá, Mundo!</h1>

				<p className={styles.paragrafo}>
					Boas vindas ao meu espaço pessoal! Eu sou Erike Nascimento, aluno de
					Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
					aprenda algo novo.
				</p>
			</div>
			<div className={styles.imagens}>
				<img
					src={circuloColorido}
					aria-hidden={true}
					className={styles.circuloColorido}
				/>
				<img
					src="https://github.com/erikenascimento.png"
					alt="Foto do Antônio Evaldo sorrindo"
					className={styles.minhaFoto}
				/>
			</div>
		</div>
	);
}

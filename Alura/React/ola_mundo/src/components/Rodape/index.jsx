import React from "react";
import styles from "./Rodape.module.scss";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

export default function Rodape() {
	return (
		<footer className={styles.rodape}>
			<MarcaRegistrada />
			<p>Desenvolvido por Erike Nascimento</p>
		</footer>
	);
}

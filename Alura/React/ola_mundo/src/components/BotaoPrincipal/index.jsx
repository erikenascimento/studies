import React from "react";
import styles from "./BotaoPrincipal.module.scss";

export default function BotaoPrincipal({ children, tamanho = "" }) {
	return (
		<button className={`${styles.botao} ${styles[tamanho]}`}>{children}</button>
	);
}

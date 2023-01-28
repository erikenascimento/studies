import React from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.scss";

export default function Menu() {
	return (
		<header>
			<nav className={styles.navegacao}>
				<Link to="/" className={styles.navegacao__link}>
					Início
				</Link>
				<Link to="/sobremim" className={styles.navegacao__link}>
					Sobre Mim
				</Link>
			</nav>
		</header>
	);
}

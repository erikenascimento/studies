import React from "react";
import MenuLink from "./MenuLink";
import styles from "./Menu.module.scss";

export default function Menu() {
	return (
		<header>
			<nav className={styles.navegacao}>
				<MenuLink to="/">Início</MenuLink>
				<MenuLink to="/sobremim">Sobre Mim</MenuLink>
				<MenuLink to="/post">Post</MenuLink>
			</nav>
		</header>
	);
}

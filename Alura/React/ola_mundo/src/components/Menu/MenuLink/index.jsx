import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.scss";

export default function MenuLink({ children, to }) {
	const localizacao = useLocation();

	return (
		<Link
			to={to}
			className={`${styles.navegacao__link} ${
				localizacao.pathname === to ? styles.navegacao__linkDestacado : ""
			}`}
		>
			{children}
		</Link>
	);
}

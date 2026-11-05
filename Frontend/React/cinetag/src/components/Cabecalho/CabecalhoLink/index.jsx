import React from "react";
import { Link } from "react-router-dom";
import styles from "./CabecalhoLink.module.scss";

export default function CabecalhoLink({ url, children }) {
	return (
		<Link to={url} className={styles.link}>
			{children}
		</Link>
	);
}

import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.scss";

export default function PostCard({ post }) {
	return (
		<Link to={`/posts/${post.id}`}>
			<div className={styles.post}>
				<img
					src={`/assets/posts/${post.id}/capa.png`}
					alt="Capa do post"
					className={styles.capa}
				/>

				<h2 className={styles.titulo}>{post.titulo}</h2>
				<button className={styles.botaoLer}>Ler</button>
			</div>
		</Link>
	);
}

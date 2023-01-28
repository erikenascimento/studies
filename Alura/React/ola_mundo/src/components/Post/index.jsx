import React from "react";
import styles from "./Post.module.scss";

export default function Post({ post }) {
	return (
		<div className={styles.post}>
			<img
				src={`/assets/posts/${post.id}/capa.png`}
				alt="Capa do post"
				className={styles.capa}
			/>

			<h2 className={styles.titulo}>{post.titulo}</h2>
			<button className={styles.botaoLer}>Ler</button>
		</div>
	);
}

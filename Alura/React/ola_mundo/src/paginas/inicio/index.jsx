import React from "react";
import styles from "./inicio.module.scss";
import posts from "json/posts.json";
import Post from "components/Post";

export default function Inicio() {
	return (
		<ul className={styles.posts}>
			{posts.map(post => (
				<li key={post.id}>
					<Post post={post} />
				</li>
			))}
		</ul>
	);
}

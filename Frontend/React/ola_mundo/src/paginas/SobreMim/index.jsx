import React from "react";
import styles from "./SobreMim.module.scss";
import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
	return (
		<PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
			<h3 className={styles.subtitulo}>Olá eu sou Erik.</h3>
			<img
				src="https://github.com/erikenascimento.png"
				alt="Rapaz branco, careca e usando óculos com semblante sério"
				className={styles.fotoSobreMim}
			/>
			<p className={styles.paragrafo}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
				voluptates soluta excepturi hic. Qui, asperiores? Laborum iure impedit
				quia, delectus repellendus unde harum alias adipisci odio ex totam
				quidem esse!
			</p>
			<p className={styles.paragrafo}>
				Libero et laborum minus, optio maxime deserunt illum? Sequi aliquam iure
				atque temporibus officia voluptatem minus vel accusantium laboriosam
				pariatur nam, vitae explicabo esse? Voluptas, libero? Et, libero. Ipsam,
				pariatur?
			</p>
			<p className={styles.paragrafo}>
				Consequatur cumque hic eius saepe sint? Minus a sunt quod assumenda
				quasi ipsum optio ducimus, magni praesentium ab non porro beatae
				repellendus, commodi exercitationem labore consequatur odio vero maiores
				eveniet.
			</p>
			<p className={styles.paragrafo}>
				Voluptatibus corrupti praesentium tenetur est qui eum sed? Doloremque
				enim numquam assumenda accusamus laborum omnis sapiente reiciendis
				dolorem animi in! Delectus reiciendis error nam nobis, quisquam ducimus
				velit rerum deleniti.
			</p>
			<p className={styles.paragrafo}>
				Reprehenderit consectetur, necessitatibus tempore repellat fugit quos
				assumenda tenetur. Rem culpa voluptatum libero corporis quia beatae odit
				repudiandae. Error labore expedita delectus ea odio quibusdam voluptates
				nihil amet rerum dicta.
			</p>
			<p className={styles.paragrafo}>
				Sed, delectus. Quam ducimus velit quidem cumque sunt aut quibusdam,
				nulla ratione maxime repellat, totam temporibus a omnis quaerat possimus
				sit vitae officiis in veritatis! Dolores odio facere obcaecati quod.
			</p>
		</PostModelo>
	);
}

import styles from "./Item.module.scss";

export default function Item() {
	return (
		<div className={styles.item}>
			<div className={styles.item__imagem}>
				<img src="" alt="imagem" />
			</div>
			<div className={styles.item__descricao}>
				<div className={styles.item__titulo}>
					<h2>Título</h2>
					<p>Descrição</p>
				</div>
				<div className={styles.item__tags}>
					<div className={styles.item__tipo}>Tag</div>
					<div className={styles.item__porcao}>XXXg</div>
					<div className={styles.item__qtdpessoas}>Serve x pessoas</div>
					<div className={styles.item__valor}>XX R$</div>
				</div>
			</div>
		</div>
	);
}

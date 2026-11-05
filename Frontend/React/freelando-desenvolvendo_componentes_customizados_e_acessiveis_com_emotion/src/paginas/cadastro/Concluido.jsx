import styled from "@emotion/styled";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";

import imgConcluido from "./assets/cliente-concluido.png";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { Col, Row } from "react-grid-system";

const ImagemEstilizada = styled.img`
	max-width: 100%;
	border-radius: 16px;
`;

const Concluido = () => {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<Tipografia variante="h1" componente="h1">
					Seu perfil está completo!
				</Tipografia>
				<Tipografia variante="body" componente="body">
					Agora é só começar a se conectar com os melhores freelancers do
					mercado!
				</Tipografia>
			</div>
			<figure>
				<ImagemEstilizada
					src={imgConcluido}
					alt="Mulher negra com cabelo cacheado e usando óculos sorrindo em frente a um notebook."
				/>
			</figure>
			<Row justify="center">
				<Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
					<Link to="/cadastro">
						<Botao variante="secundaria">Voltar para a home</Botao>
					</Link>
				</Col>
			</Row>
		</>
	);
};

export default Concluido;

import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";

import imgCliente from "./assets/cliente.png";
import imgFreela from "./assets/freela.png";

const SelecaoCliente = () => {
	return (
		<>
			<Tipografia variante="h1" componente="h1">
				Crie seu cadastro
			</Tipografia>
			<Tipografia variante="h3" componente="h2">
				Como podemos te ajudar?
			</Tipografia>
			<Row>
				<Col md={6} sm={12}>
					<img src={imgCliente} alt="" />
				</Col>
				<Col md={6} sm={12}>
					<img src={imgFreela} alt="" />
				</Col>
			</Row>
		</>
	);
};

export default SelecaoCliente;

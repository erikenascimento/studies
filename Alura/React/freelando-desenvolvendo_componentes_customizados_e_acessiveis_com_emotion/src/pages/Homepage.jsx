import "../App.css";
import { GlobalStyles } from "../components/GlobalStyles/Styles";
import { Card } from "../components/Card/Card";
import { ThemeProviderComp } from "../components/ThemeProvider/ThemeProvider";
import { Navbar } from "../components/Navbar/Navbar";
import { Typography } from "../components/Typography/Typography";
import { InputText } from "../components/InputText/InputText";
import { Footer } from "../components/Footer/Footer";
import { Col, Container, Row } from "react-grid-system";
import { Dropdown } from "../components/Dropdown/Dropdown";

const brazilianStates = [
	{ text: "Acre", value: "AC" },
	{ text: "Alagoas", value: "AL" },
	{ text: "Amapá", value: "AP" },
	{ text: "Amazonas", value: "AM" },
	{ text: "Bahia", value: "BA" },
	{ text: "Ceará", value: "CE" },
	{ text: "Distrito Federal", value: "DF" },
	{ text: "Espírito Santo", value: "ES" },
	{ text: "Goiás", value: "GO" },
	{ text: "Maranhão", value: "MA" },
	{ text: "Mato Grosso", value: "MT" },
	{ text: "Mato Grosso do Sul", value: "MS" },
	{ text: "Minas Gerais", value: "MG" },
	{ text: "Pará", value: "PA" },
	{ text: "Paraíba", value: "PB" },
	{ text: "Paraná", value: "PR" },
	{ text: "Pernambuco", value: "PE" },
	{ text: "Piauí", value: "PI" },
	{ text: "Rio de Janeiro", value: "RJ" },
	{ text: "Rio Grande do Norte", value: "RN" },
	{ text: "Rio Grande do Sul", value: "RS" },
	{ text: "Rondônia", value: "RO" },
	{ text: "Roraima", value: "RR" },
	{ text: "Santa Catarina", value: "SC" },
	{ text: "São Paulo", value: "SP" },
	{ text: "Sergipe", value: "SE" },
	{ text: "Tocantins", value: "TO" },
];

const Homepage = () => {
	return (
		<ThemeProviderComp className="App">
			<GlobalStyles />
			<Navbar />
			<Container style={{ margin: "80px 0" }}>
				<Row justify="center">
					<Col lg={6} md={8} sm={12}>
						<Card>
							<Typography variant="h1" component="h1">
								Crie seu cadastro.
							</Typography>
							<Typography variant="body" component="body">
								Crie seu perfil gratuitamente para começar a trabalhar com os
								melhores freelancers. Em seguida, você poderá dar mais detalhes
								sobre suas demandas e sobre sua forma de trabalho.
							</Typography>
							<Row>
								<Col>
									<InputText label="Nome Completo" />
								</Col>
							</Row>
							<Row>
								<Col lg={4} md={4} sm={4}>
									<Dropdown label="Estado" options={brazilianStates} />
								</Col>
								<Col lg={8} md={8} sm={8}>
									<InputText label="Cidade" />
								</Col>
							</Row>
							<Row>
								<Col>
									<InputText label="E-mail" />
								</Col>
							</Row>
							<Row>
								<Col lg={6} md={6} sm={6}>
									<InputText label="Senha" />
								</Col>
								<Col lg={6} md={6} sm={6}>
									<InputText label="Repita a Senha" />
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Container>
			<Footer />
		</ThemeProviderComp>
	);
};

export default Homepage;

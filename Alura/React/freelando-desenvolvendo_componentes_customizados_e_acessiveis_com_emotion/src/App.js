import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles/Styles";
import { Card } from "./components/Card/Card";
import { ThemeProviderComp } from "./components/ThemeProvider/ThemeProvider";
import { Navbar } from "./components/Navbar/Navbar";
import { Typography } from "./components/Typography/Typography";
import { InputText } from "./components/InputText/InputText";

function App() {
	return (
		<ThemeProviderComp className="App">
			<GlobalStyles />
			<Navbar />
			<Card>
				<Typography variant="h1" component="h1">
					Crie seu cadastro.
				</Typography>
				<Typography variant="body" component="body">
					Crie seu perfil gratuitamente para começar a trabalhar com os melhores
					freelancers. Em seguida, você poderá dar mais detalhes sobre suas
					demandas e sobre sua forma de trabalho.
				</Typography>
				<InputText label="Nome Completo" />
			</Card>
		</ThemeProviderComp>
	);
}

export default App;

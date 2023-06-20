import logo from "./logo.svg";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles/Styles";
import { Card } from "./components/Card/Card";
import { ThemeProviderComp } from "./components/ThemeProvider/ThemeProvider";

function App() {
	return (
		<ThemeProviderComp className="App">
			<GlobalStyles />
			<Card>
				<h1>Freelando</h1>
			</Card>
		</ThemeProviderComp>
	);
}

export default App;

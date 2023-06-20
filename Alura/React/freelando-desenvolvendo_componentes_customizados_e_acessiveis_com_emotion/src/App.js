import logo from "./logo.svg";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles/Styles";
import { Card } from "./components/Card/Card";
import { ThemeProviderComp } from "./components/ThemeProvider/ThemeProvider";
import { Navbar } from "./components/Navbar/Navbar";
import { NavMenu } from "./components/NavMenu/NavMenu";

function App() {
	return (
		<ThemeProviderComp className="App">
			<GlobalStyles />
			<Navbar />
			<Card>
				<h1>Freelando</h1>
			</Card>
		</ThemeProviderComp>
	);
}

export default App;

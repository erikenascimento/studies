import logo from "./logo.svg";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles/Styles";
import { Card } from "./components/Card/Card";

function App() {
	return (
		<div className="App">
			<GlobalStyles />
			<Card>
				<h1>Freelando</h1>
			</Card>
		</div>
	);
}

export default App;

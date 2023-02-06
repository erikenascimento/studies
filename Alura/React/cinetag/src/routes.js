import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Cabecalho />
			<Container>
				<Routes>
					<Route path="/" element={<Inicio />}></Route>
					<Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
				</Routes>
			</Container>
			<Rodape />
		</BrowserRouter>
	);
}

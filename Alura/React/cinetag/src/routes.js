import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import FavoritosProvider from "contexts";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Cabecalho />
			<Container>
				<FavoritosProvider>
					<Routes>
						<Route path="/" element={<Inicio />}></Route>
						<Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
					</Routes>
				</FavoritosProvider>
			</Container>
			<Rodape />
		</BrowserRouter>
	);
}

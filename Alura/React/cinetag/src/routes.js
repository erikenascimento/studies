import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import FavoritosProvider from "contexts/Favoritos";
import Player from "pages/Player";
import NaoEncontrada from "pages/NaoEncontrada";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Cabecalho />
			<Container>
				<FavoritosProvider>
					<Routes>
						<Route path="/" element={<Inicio />} />
						<Route path="/favoritos" element={<Favoritos />} />
						<Route path="/:id" element={<Player />} />
						<Route path="*" element={<NaoEncontrada />} />
					</Routes>
				</FavoritosProvider>
			</Container>
			<Rodape />
		</BrowserRouter>
	);
}

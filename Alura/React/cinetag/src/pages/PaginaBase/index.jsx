import React from "react";
import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import FavoritosProvider from "contexts/Favoritos";
import { Outlet } from "react-router-dom";
import Rodape from "components/Rodape";

export default function PaginaBase() {
	return (
		<main>
			<Cabecalho />
			<FavoritosProvider>
				<Container>
					<Outlet />
				</Container>
			</FavoritosProvider>
			<Rodape />
		</main>
	);
}

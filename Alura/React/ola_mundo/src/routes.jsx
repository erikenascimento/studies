import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<PaginaPadrao />}>
					<Route path="/" element={<Inicio />} />
					<Route path="/sobremim" element={<SobreMim />} />
				</Route>
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
			<Rodape />
		</BrowserRouter>
	);
}

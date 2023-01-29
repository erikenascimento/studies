import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import NaoEncontrada from "paginas/NaoEncontrada";
import Post from "paginas/Post";
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
					<Route index element={<Inicio />} />
					<Route path="sobremim" element={<SobreMim />} />
				</Route>
				<Route path="posts/:id" element={<Post />} />
				<Route path="*" element={<NaoEncontrada />} />
			</Routes>
			<Rodape />
		</BrowserRouter>
	);
}

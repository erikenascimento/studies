import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
// import PaginaInicial from "../paginas/PaginaInicial";

export const router = createBrowserRouter([
	{
		path: "/",
		// element: <PaginaInicial />,
		children: [
			{
				path: "cadastro",
				element: <LayoutBaseCadastro />,
				children: [
					{
						path: "",
						element: <SelecaoCliente />,
					},
					{
						path: "cliente",
						element: <h1>Interesses</h1>,
					},
					{
						path: "dados-pessoais",
						element: <h1>Dados pessoais</h1>,
					},
					{
						path: "concluido",
						element: <h1>Concluído</h1>,
					},
				],
			},
		],
	},
]);

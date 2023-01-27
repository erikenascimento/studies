import React, { Component } from "react";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/SobreMim";

export default class App extends Component {
	render() {
		const pagina = window.location.pathname === "/" ? <Inicio /> : <SobreMim />;
		return pagina;
	}
}

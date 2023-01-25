import React, { Component } from "react";
import "./CampoTexto.css";

class CampoTexto extends Component {
	render() {
		return (
			<div className="campo-texto">
				<label>{this.props.label}</label>
				<input
					required={this.props.required}
					placeholder={this.props.placeholder}
				/>
			</div>
		);
	}
}

export default CampoTexto;

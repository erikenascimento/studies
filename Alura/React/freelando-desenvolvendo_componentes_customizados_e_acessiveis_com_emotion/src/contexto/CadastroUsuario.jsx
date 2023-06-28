import { createContext, useState } from "react";

const usuarioInicial = {
	perfil: "",
	interesse: "",
	nomeCompleto: "",
	uf: "",
	cidade: "",
	email: "",
	senha: "",
	senhaConfirmada: "",
};

export const CadastroUsuarioContext = createContext({
	usuario: usuarioInicial,
	setPerfil: () => null,
	setInteresse: () => null,
	setNomeCompleto: () => null,
	setUf: () => null,
	setCidade: () => null,
	setEmail: () => null,
	setSenha: () => null,
	setSenhaConfirmada: () => null,
});

export const useCadastroUsuarioContext = () => {
	return useState(CadastroUsuarioContext);
};

export const CadastroUsuarioProvider = ({ children }) => {
	const [usuario, setUsuario] = useState(usuarioInicial);

	const setPerfil = perfil => {
		setUsuario(estadoAnterior => {
			return {
				...estadoAnterior,
				setPerfil,
			};
		});
	};
	const setInteresse = interesse => {
		setUsuario(estadoAnterior => {
			return {
				...estadoAnterior,
				setPerfil,
			};
		});
	};
	const setNomeCompleto = nomeCompleto => {
		setUsuario(estadoAnterior => {
			return {
				...estadoAnterior,
				setPerfil,
			};
		});
	};
	const setUf = uf => {
		setUsuario(estadoAnterior => {
			return {
				...estadoAnterior,
				setPerfil,
			};
		});
	};
	const setCidade = cidade => {
		setUsuario(estadoAnterior => {
			return {
				...estadoAnterior,
				setPerfil,
			};
		});
	};
	const setEmail = email => {
		setUsuario(estadoAnterior => {
			return {
				...estadoAnterior,
				setPerfil,
			};
		});
	};
	const setSenha = senha => {
		setUsuario(estadoAnterior => {
			return {
				...estadoAnterior,
				setPerfil,
			};
		});
	};
	const setSenhaConfirmada = senhaConfirmada => {
		setUsuario(estadoAnterior => {
			return {
				...estadoAnterior,
				setPerfil,
			};
		});
	};

	const contexto = {
		usuario,
		setPerfil,
		setInteresse,
		setNomeCompleto,
		setUf,
		setCidade,
		setEmail,
		setSenha,
		setSenhaConfirmada,
	};

	return (
		<CadastroUsuarioContext.Provider value={contexto}>
			{children}
		</CadastroUsuarioContext.Provider>
	);
};

import { createContext } from "react";

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
	setEstado: () => null,
	setEmail: () => null,
	setSenha: () => null,
	setSenhaConfirmada: () => null,
});

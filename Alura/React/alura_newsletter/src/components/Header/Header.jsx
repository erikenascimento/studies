import ToggleTheme from "../ToggleTheme/ToggleTheme";

export default function Cabecalho({ user }) {
	return (
		<div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5 sm:rounded-xl sm:m-5">
			<span className="text-zinc-100">Olá, {user?.name || "Usuário"}</span>
			<h1 className="text-zinc-200 text-xl sm:hover:text-2xl sm:cursor-pointer">
				The aliens are pleased!
			</h1>
			<ToggleTheme />
		</div>
	);
}

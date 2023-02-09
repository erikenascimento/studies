import { MoonIcon } from "@heroicons/react/24/solid";

export default function Cabecalho() {
	return (
		<div className="flex h-20 bg-zinc-700 justify-between items-center px-5 sm:rounded-xl sm:m-5">
			<span className="text-zinc-100">Ay, Lmao</span>
			<h1 className="text-zinc-200 text-xl">The aliens are pleased!</h1>
			<MoonIcon className="hidden sm:block h-8 text-zinc-100" />
		</div>
	);
}

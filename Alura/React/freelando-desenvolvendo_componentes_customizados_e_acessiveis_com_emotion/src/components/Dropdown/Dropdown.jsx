import { useState } from "react";

export const Dropdown = ({ label }) => {
	const [isOpen, toggleVisibility] = useState(false);
	return (
		<label>
			{label}
			<button onClick={() => toggleVisibility(!isOpen)}>
				Selecione<span>{isOpen ? "▲" : "▼"}</span>
			</button>
		</label>
	);
};

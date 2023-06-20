import { ThemeProvider } from "@emotion/react";

const theme = {
	colors: {
		white: "",
		warning: "",
		focus: "",
		primary: {
			a: "",
			b: "",
			c: "",
		},
		secondary: {
			a: "",
			b: "",
			c: "",
		},
		neutrals: {
			a: "",
			b: "",
			c: "",
			d: "",
		},
		dark: {
			a: "",
			b: "",
		},
	},
};

export const ThemeProviderComp = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

import { ThemeProvider } from "@emotion/react";

const theme = {
	colors: {
		white: "",
		warning: "",
		focus: "",
		primary: {
			a: "#5754ED",
			b: "",
			c: "",
		},
		secondary: {
			a: "#EBEAF9",
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
	spacing: {
		s: "16px",
		l: "32px",
	},
	fontFamily: "'Montserrat', sans-serif",
};

export const ThemeProviderComp = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

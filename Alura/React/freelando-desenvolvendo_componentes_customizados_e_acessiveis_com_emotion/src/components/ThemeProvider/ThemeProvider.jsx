import { ThemeProvider } from "@emotion/react";

const theme = {
	colors: {
		white: "#FFFFFF",
		warning: "",
		focus: "#B009FF",
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
		neutral: {
			a: "#373737",
			b: "",
			c: "#F5F5F5",
			d: "",
		},
		dark: {
			a: "",
			b: "",
		},
	},
	spacing: {
		xxs: "4px",
		xs: "8px",
		s: "16px",
		m: "24px",
		l: "32px",
		xl: "48px",
		xxl: "64px",
	},
	fontFamily: "'Montserrat', sans-serif",
};

export const ThemeProviderComp = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

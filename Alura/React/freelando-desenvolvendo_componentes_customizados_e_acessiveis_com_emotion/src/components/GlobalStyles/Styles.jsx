import { Global, css } from "@emotion/react";

const styles = css`
	* {
		font-family: "Montserrat", sans-serif;
	}
`;

export const GlobalStyles = () => {
	return <Global styles={styles} />;
};

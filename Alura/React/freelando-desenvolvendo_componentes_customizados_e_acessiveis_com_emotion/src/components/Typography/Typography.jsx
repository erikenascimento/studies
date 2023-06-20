import styled from "@emotion/styled";

const components = {
	h1: "h1",
	body: "p",
};

const styles = {
	h1: `
    line-height: 49px;
    font-size: 40px;
    font-weight: 600;
    `,
	body: `
    line-height: 24px;
    font-size: 20px;
    font-weight: 400;
    `,
};

export const Typography = ({ variant, component, children }) => {
	const tag = components[component];
	const UtilizedComponent = styled[tag]`
		${styles[variant]}
	`;
	return <UtilizedComponent>{children}</UtilizedComponent>;
};

import styled from "@emotion/styled";

const StyledNav = styled.nav`
	background: ${props => props.theme.colors.primary.a};
	height: 104px;
	padding: 24px, 120px;
	width: 100vw;
`;

export const Navbar = ({ children }) => {
	return <StyledNav>{children}</StyledNav>;
};

import styled from "@emotion/styled";

const StyledFooter = styled.footer`
	background-color: ${props => props.theme.colors.primary.a};

	align-items: center;
	box-sizing: border-box;
	display: flex;
	padding: 48px 120px;
	justify-content: space-between;
	width: 100vw;
`;

export const Footer = () => {
	return (
		<StyledFooter>
			<div>
				<h4>Freelando</h4>
				<p>Desenvolvido por Erike. Projeto fictício sem fins comerciais.</p>
			</div>
			<div>
				<p>Acesse nossas redes</p>
				<h5>WP TW IG TT</h5>
			</div>
		</StyledFooter>
	);
};

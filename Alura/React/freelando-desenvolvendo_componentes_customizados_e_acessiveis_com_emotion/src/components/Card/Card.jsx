import styled from "@emotion/styled";

const StyledDiv = styled.div`
	padding: 32px;
	background: #ebeaf9;
	border: 1px solid #5754ed;
	border-radius: 16px;
`;

export const Card = ({ children }) => {
	return <StyledDiv>{children}</StyledDiv>;
};

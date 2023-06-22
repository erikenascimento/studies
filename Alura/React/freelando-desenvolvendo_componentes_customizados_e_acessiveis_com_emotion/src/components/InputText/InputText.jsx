import styled from "@emotion/styled";

const StyledLabel = styled.label`
	box-sizing: border-box;
	display: block;
	width: 100%;

	font-size: 20px;
	font-weight: 400;
	line-height: 24px;
`;

const StyledInput = styled.input`
	box-sizing: border-box;
	display: block;
	height: 40px;
	margin-top: ${props => props.theme.spacing.xs};
	width: 100%;

	background: ${props => props.theme.colors.white};

	border: 1px solid;
	border-color: ${props => props.theme.colors.neutral.a};
	border-radius: ${props => props.theme.spacing.s};

	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
`;

export const InputText = ({ label }) => {
	return (
		<StyledLabel htmlFor="">
			{label}
			<StyledInput type="text" />
		</StyledLabel>
	);
};

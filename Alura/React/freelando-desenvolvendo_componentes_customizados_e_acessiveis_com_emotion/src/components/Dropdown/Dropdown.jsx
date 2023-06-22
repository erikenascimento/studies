import styled from "@emotion/styled";
import { useState } from "react";

const StyledLabel = styled.label`
	box-sizing: border-box;
	display: block;
	position: relative;

	width: 100%;

	font-weight: 400;
	font-size: 20px;
	line-height: 24px;
`;

const StyledButton = styled.button`
	box-sizing: border-box;
	height: 40px;
	width: 100%;

	align-items: center;
	display: flex;
	justify-content: space-between;

	font-size: 18px;
	font-weight: 400;

	border: 1px solid ${props => props.theme.colors.neutral.a};
	&:focus {
		border-color: ${props => props.theme.colors.focus};
	}
	border-radius: 18px;
	border-bottom-left-radius: ${props => (props.isOpen ? "0" : "18px")};
	border-bottom-right-radius: ${props => (props.isOpen ? "0" : "18px")};
	outline: none;

	background: ${props => props.theme.colors.white};
	cursor: pointer;

	margin-top: ${props => props.theme.spacing.xs};
	padding: ${props => props.theme.spacing.s};
`;

export const Dropdown = ({ label, options }) => {
	const [isOpen, toggleVisibility] = useState(false);

	return (
		<StyledLabel>
			{label}
			<StyledButton isOpen={isOpen} onClick={() => toggleVisibility(!isOpen)}>
				<div>Selecione</div>
				<div>
					<span>{isOpen ? "▲" : "▼"}</span>
				</div>
			</StyledButton>
		</StyledLabel>
	);
};

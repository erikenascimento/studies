import styled from "@emotion/styled";
import { useState } from "react";

const StyledDropdownItem = styled.li`
	cursor: pointer;

	padding: ${props => props.theme.spacing.xs} 0;

	text-align: center;

	border-bottom: 1px solid ${props => props.theme.colors.neutral.c};
	&:last-child {
		border: none;
	}
	&:hover {
		color: ${props => props.theme.colors.focus};
	}
`;

const StyledDropdown = styled.ul`
	left: 0;
	position: absolute;
	right: 0;
	top: 100%;
	z-index: 1;

	background-color: ${props => props.theme.colors.white};

	border: 1px solid ${props => props.theme.colors.neutral.a};
	border-bottom-left-radius: 18px;
	border-bottom-right-radius: 18px;
	border-top: none;

	margin: 0;
	padding: 0 ${props => props.theme.spacing.m};

	list-style: none;
`;
const StyledLabel = styled.label`
	display: block;
	box-sizing: border-box;

	font-weight: 400;
	font-size: 20px;
	line-height: 24px;

	position: relative;
	width: 100%;
`;

const StyledButton = styled.button`
	align-items: center;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;

	height: 40px;
	width: 100%;

	cursor: pointer;
	background: ${props => props.theme.colors.white};

	margin-top: ${props => props.theme.spacing.xs};
	padding: ${props => props.theme.spacing.s};

	font-size: 18px;
	font-weight: 400;

	border-radius: 18px;
	border-bottom-left-radius: ${props => (props.isOpen ? "0" : "18px")};
	border-bottom-right-radius: ${props => (props.isOpen ? "0" : "18px")};
	border: 1px solid ${props => props.theme.colors.neutral.a};
	&:focus {
		border-color: ${props => props.theme.colors.focus};
	}
	outline: none;
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
			{isOpen && (
				<StyledDropdown>
					{options.map(option => (
						<StyledDropdownItem key={option.value}>
							{option.text}
						</StyledDropdownItem>
					))}
				</StyledDropdown>
			)}
		</StyledLabel>
	);
};

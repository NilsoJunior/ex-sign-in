import styled from 'styled-components'
import theme from '../../styles/theme'

export const Input = styled.input`
	width: 100%;
	max-width: 355px;
	height: 40px;
	border: 1px solid ${theme.colors.secondary};
	border-radius: 5px;
	outline: none;
	font-size: ${theme.sizes.small};
	color: #a7a7a7;
	transition: all ease 400ms;
	background-color: #fff;
	padding: 0 5px;

	&:focus {
		box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 20%);
	}
`

export const Label = styled.label`
	font-size: ${theme.sizes.small};
	font-weight: 600;
	color: ${theme.colors.default};
	display: block;
	margin: 16px 0 5px 0;
`

export const ShowPassword = styled.div`
	position: absolute;
	top: 8px;
	right: 16px;

	button {
		background-color: transparent;
		padding: 4px 8px;
		border: none;
		outline: none;
		color: ${theme.colors.default};
		transition: all ease 0.4s;
		&:hover {
			background-color: #f4f4f4;
		}
	}
`

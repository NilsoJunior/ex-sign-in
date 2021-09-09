import styled from 'styled-components'
import theme from '../../../styles/theme'

interface IContainerProps {
	color: string
}

export const Container = styled.button.attrs<IContainerProps>({
	'aria-label': 'Sign in',
	type: 'submit',
})`
	width: 100%;
	max-width: 355px;
	height: 40px;
	border: none;
	border-radius: 5px;
	outline: none;
	font-size: ${theme.sizes.small};
	text-align: center;
	cursor: pointer;
	color: #fff;
	box-shadow: 0 10px 10px 4px rgba(0, 0, 0, 0.3);
	transition: all ease 400ms;
	background-color: ${props => props.color};
	margin-top: 36px;
	&:hover {
		filter: brightness(0.8);
		opacity: 0.9;
	}
`

import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 355px;
	height: 40px;
	border: none;
	border-radius: 5px;
	outline: none;
	font-size: ${theme.sizes.small};
	color: ${theme.colors.default};
	cursor: pointer;
	background-color: #fff;
	margin: 36px 0;
	transition: all ease 400ms;
	&:hover {
		box-shadow: 0 10px 10px 4px rgba(0, 0, 0, 0.3);
	}

	span {
		margin-left: 15px;
	}
`

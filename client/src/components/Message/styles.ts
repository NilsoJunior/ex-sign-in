import styled from 'styled-components'
import theme from '../../styles/theme'

interface IContainerProps {
	color: string
}

export const Container = styled.div<IContainerProps>`
	width: 100%;
	max-width: 355px;
	height: auto;
	display: flex;
	position: absolute;
	top: 16px;
	right: 16px;
	z-index: 1001;
	border-radius: 5px;
	transition: all ease 400ms;
	background-color: ${props => props.color};
	padding: 16px;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 20%);

	@media (max-width: 768px) {
		width: 100%;
		max-width: 90vw;
		position: fixed;
		left: 8px;
	}

	p {
		font-size: ${theme.sizes.normal};
		line-height: 24px;
		max-width: 300px;
		color: #fff;
	}

	button {
		width: 20px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		border: none;
		outline: none;
		position: absolute;
		right: 8px;
		top: 8px;
		font-size: 0.75rem;
		color: #fff;
		border-radius: 50%;
		background-color: ${props => props.color};
		cursor: pointer;
		transition: all ease 0.4s;

		&:hover {
			box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 20%);
		}
	}
`

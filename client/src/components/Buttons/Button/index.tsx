import React from 'react'
import { Container } from './styles'

interface IButtonProps {
	children: React.ReactNode
	color: string
	onClick: () => void
}

const Button: React.FC<IButtonProps> = ({ children, color, onClick }) => (
	<Container onClick={onClick} color={color}>
		{children}
	</Container>
)

export default Button

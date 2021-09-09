import React from 'react'
import { Container } from './styles'

interface IMessageProps {
	close: () => void
	open: boolean
	text: string
	color: string
}

const Message: React.FC<IMessageProps> = ({ close, open, text, color }) => {
	if (open) {
		return (
			<Container color={color}>
				<p>{text}</p>

				<button
					type="button"
					onClick={close}
					aria-label="Close message"
				>
					X
				</button>
			</Container>
		)
	}

	return null
}

export default Message

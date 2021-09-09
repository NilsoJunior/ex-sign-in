import React from 'react'
import { Container } from './styles'
import iconGoogle from '../../../assets/google.png'

const Google: React.FC = () => (
	<Container>
		<img src={iconGoogle} alt="Icon Google" width="30" height="30" />
		<span>Continue with Google</span>
	</Container>
)

export default Google

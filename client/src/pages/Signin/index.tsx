import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Button from '../../components/Buttons/Button'
import Google from '../../components/Buttons/Google'
import Textfield from '../../components/Textfield'
import HGroup from '../../components/Typography'
import Message from '../../components/Message'
import GlobalStyle from '../../styles/global'
import theme from '../../styles/theme'
import {
	GridContainer,
	GridItem,
	Login,
	IllustrationBox,
	IllustrationImg,
	Logo,
} from './styles'

interface IMessage {
	close: () => void
	open: boolean
	text: string
	color: string
}

interface IValues {
	email: string
	password: string
	showpassword: boolean
}

const Signin: React.FC = () => {
	const [values, setValues] = useState<IValues>({
		email: '',
		password: '',
		showpassword: false,
	})

	const [message, setMessage] = useState<IMessage>({
		close: () => {},
		open: false,
		text: '',
		color: '',
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value })
	}

	const handleClickShowPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
		setValues({ ...values, showpassword: !values.showpassword })
	}

	const handleClickLogin = () => {
		if (values.email === '' || values.password === '') {
			setMessage({
				...message,
				text: 'Fill all fields',
				open: true,
				color: '#eb3b5a',
			})
		} else {
			if (values?.email !== '') {
				const lastAtPos = values?.email.lastIndexOf('@')
				const lastDotPos = values?.email.lastIndexOf('.')

				if (
					!(
						lastAtPos < lastDotPos &&
						lastAtPos > 0 &&
						values?.email.indexOf('@@') === -1 &&
						lastDotPos > 2 &&
						values?.email.length - lastDotPos > 2
					)
				) {
					setMessage({
						...message,
						text: 'Email is not invalid',
						open: true,
						color: '#eb3b5a',
					})
				} else {
					setMessage({
						...message,
						text: 'Login success! Ps. Faltou tempo para finalizar o back :(',
						open: true,
						color: '#20bf6b',
					})
				}
			}
		}
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />

			<Message
				text={message.text}
				color={message.color}
				open={message.open}
				close={() => setMessage({ ...message, open: !open })}
			/>

			<GridContainer>
				<GridItem>
					<IllustrationBox>
						<Logo />
						<IllustrationImg />
					</IllustrationBox>
				</GridItem>

				<GridItem>
					<Login>
						<hgroup>
							<HGroup
								hgroup={1}
								color="default"
								size="large"
								fontWeight={700}
							>
								Sign in.
							</HGroup>
							<HGroup
								hgroup={2}
								color="default"
								size="xlarge"
								fontWeight={700}
							>
								Welcome!
							</HGroup>
						</hgroup>
						<form aria-label="Form sign in">
							<Textfield
								id="email"
								label="E-mail"
								name="email"
								onChange={handleChange}
								placeholder="typeit@email.com"
								type="email"
								value={values?.email}
							/>

							<Textfield
								id="password"
								label="Password"
								name="password"
								onChange={handleChange}
								placeholder="***********"
								type={
									values?.showpassword ? 'text' : 'password'
								}
								value={values?.password}
							>
								<button
									type="button"
									onClick={handleClickShowPassword}
								>
									{values?.showpassword ? 'Hide' : 'Show'}
								</button>
							</Textfield>

							<a
								href="#"
								style={{
									fontSize: 12,
									marginTop: '5px',
									color: '#2d98da',
								}}
							>
								Reset password
							</a>
						</form>

						<Button onClick={handleClickLogin} color="#000">
							Sign In
						</Button>

						<Google />

						<span>
							Don`t have an account? <b>Create now</b>
						</span>
					</Login>
				</GridItem>
			</GridContainer>
		</ThemeProvider>
	)
}

export default Signin

import React from 'react'
import { Label, Input, ShowPassword } from './styles'

interface ITextfieldProps {
	children?: React.ReactNode
	id: string
	label: string
	name: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	placeholder: string
	type: string
	value: string
}

const Textfield: React.FC<ITextfieldProps> = ({
	children,
	id,
	label,
	name,
	onChange,
	placeholder,
	type,
	value,
}) => (
	<>
		<Label htmlFor={id}>{label}</Label>

		<div style={{ position: 'relative' }}>
			<Input
				autoComplete="on"
				id={id}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				type={type}
				value={value}
			/>
			<ShowPassword>{id === 'password' ? children : null}</ShowPassword>
		</div>
	</>
)

export default Textfield

import React from 'react'
import { HGroup } from './styles'
import theme from '../../styles/theme'

interface IHeadingProps {
	color?: keyof typeof theme.colors
	children?: React.ReactNode
	fontWeight?: 100 | 400 | 700
	hgroup?: 1 | 2 | 3 | 4 | 5 | 6
	size?: keyof typeof theme.sizes
}

const Heading: React.FC<IHeadingProps> = ({
	children,
	hgroup,
	color,
	size,
	fontWeight,
}) => (
	<HGroup hgroup={hgroup} color={color} size={size} fontWeight={fontWeight}>
		{children}
	</HGroup>
)

export default Heading

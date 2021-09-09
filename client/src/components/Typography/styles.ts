import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export type HGroupProps = {
	color?: keyof typeof theme.colors
	size?: keyof typeof theme.sizes
	fontWeight?: 100 | 400 | 700
	hgroup?: 1 | 2 | 3 | 4 | 5 | 6
}

export const HGroup = styled('h1').attrs<HGroupProps>(({ hgroup }) => ({
	as: `h${hgroup}`,
}))<HGroupProps>`
	${({ color = 'default', size = 'normal', fontWeight = 700 }) =>
		css`
			font-size: ${theme.sizes[size]};
			font-weight: ${fontWeight};
			color: ${theme.colors[color]};
			margin: 5px 0;
		`}
`

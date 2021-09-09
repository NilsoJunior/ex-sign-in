import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string
		colors: {
			default: string
			primary: string
			secondary: string
			black: string
		}
		sizes: {
			small: string
			normal: string
			large: string
			xlarge: string
		}
	}
}

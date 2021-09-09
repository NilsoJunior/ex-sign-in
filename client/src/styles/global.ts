import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${props => props.theme.colors.secondary};
		font-family: sans-serif;
		font-size: ${props => props.theme.sizes.normal};
		color: ${props => props.theme.colors.default};
	}
`

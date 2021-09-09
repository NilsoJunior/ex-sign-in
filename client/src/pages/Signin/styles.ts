import styled from 'styled-components'
import theme from '../../styles/theme'
import imgLogo from '../../assets/logo.png'
import imgIllustrationSmall from '../../assets/320.png'
import imgIllustrationMedium from '../../assets/768.png'
import imgIllustrationLarge from '../../assets/1280.png'

export const GridContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`

export const GridItem = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	justify-content: center;

	@media (max-width: 768px) {
		flex-direction: row;
		width: 100%;
		flex: none;
		justify-content: center;
	}
`

export const Login = styled.div`
	width: 100%;
	max-width: 355px;
	display: block;
	margin: auto;

	span {
		text-align: center;
	}

	@media (max-width: 768px) {
		padding: 16px;
	}
`

export const Logo = styled.img.attrs({
	src: imgLogo,
	alt: 'Logo',
})`
	margin: 15px 50px;
	width: 55px;
	height: 55px;
`

export const IllustrationBox = styled.div`
	background-color: ${theme.colors.primary};
	position: relative;
	height: 100vh;

	@media (max-width: 768px) {
		width: 100%;
		height: auto;
	}
`

export const IllustrationImg = styled.img.attrs({
	src: imgIllustrationMedium,
	srcSet: `${imgIllustrationSmall} 320w, ${imgIllustrationMedium} 768w, ${imgIllustrationLarge} 1280w`,
	alt: 'Illustration by Olha Khomich',
})`
	width: 85%;
	height: auto;
	position: absolute;
	top: 50px;
	right: -75px;

	@media (max-width: 998px) {
		top: 100px;
		right: -35px;
	}

	@media (max-width: 768px) {
		position: relative;
		top: 0;
		right: 0;
	}
`

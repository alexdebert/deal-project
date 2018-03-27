/**
 * @overview Header.
 */

//Core
import React from 'react'


//Images
import heroImage from '../../../public/img/heroImage.jpg'

//Styles
import './HeroImage.scss'

const HeroImage = () => (
	<div id="hero-image-wrapper">
		<img className="heroImage" src={heroImage} />
	</div>
)

export default HeroImage
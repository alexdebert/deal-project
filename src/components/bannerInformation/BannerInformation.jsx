/**
 * @overview Banner information.
 */

//Core
import React from 'react'

//Components
import RatingSection from '../../containers/ratingSections/RatingSections'
import NewsSection from '../newsSection/NewsSection'

//Styles
import './BannerInformation.scss'

const BannerInformation = () => (
	<div id="banner-information-wrapper">
		<RatingSection/>
		<NewsSection/>
	</div>
)

export default BannerInformation
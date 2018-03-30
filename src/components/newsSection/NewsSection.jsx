/**
 * @overview News Section.
 */

//Core
import React from 'react'

//Image
import newsLogo from '../../../public/img/news-logos.png'
import arrowLogo from '../../../public/img/grey-link-arrow.png'

//Styles
import './NewsSection.scss'

const NewsSection = () => (
	<div id="news-section-wrapper">
		<div className="news-logo-container" >
			<img src={newsLogo} />
		</div>
		<div className="news-arrow-container">
			<img src={arrowLogo}/>
		</div>
	</div>
)

export default NewsSection
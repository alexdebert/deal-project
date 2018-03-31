/**
 * @overview Rating Section.
 */

//Core
import React from 'react'

//Components
import RatingInformation from '../../containers/ratingInformation/RatingInformation'
import StarList from '../starList/StarList'

//Styles
import './RatingSections.scss'

const RatingSection = () => (
	<div id="rating-sections-wrapper">
		<RatingInformation />
		<StarList length={5} className="star-green"/>
		<div>
			<span>See our reviews</span>
		</div>
	</div>
)

export default RatingSection
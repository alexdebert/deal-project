/**
 * @overview Rating Section.
 */

//Core
import React from 'react'

//Components
import RatingInformation from '../../containers/ratingInformation/RatingInformation'


const RatingSection = () => (
	<div id="rating-sections-wrapper">
		<RatingInformation />
		<div>
			<span>Icons go here</span>
		</div>
		<div>
			<span>See our reviews</span>
		</div>
	</div>
)

export default RatingSection
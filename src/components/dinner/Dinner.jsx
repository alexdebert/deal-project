/**
 * @overview Dinner.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

//Image
import restaurantImage from '../../../public/img/restaurant.jpg'

const NeedToKnow = () => {
	const title = constants.DINNER_TITLE
	const firstParagraph = constants.DINNER_FIRST_PARAGRAPH
	const captionPhoto = constants.DINNER_FIRST_CAPTION

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
			<figure>
				<img src={restaurantImage} />
				<figcaption>{captionPhoto}</figcaption>
			</figure>
		</div>
	)
}

export default NeedToKnow
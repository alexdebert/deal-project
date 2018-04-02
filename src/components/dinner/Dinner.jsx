/**
 * @overview Dinner.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

const NeedToKnow = () => {
	const title = constants.DINNER_TITLE
	const firstParagraph = constants.DINNER_FIRST_PARAGRAPH

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
		</div>
	)
}

export default NeedToKnow
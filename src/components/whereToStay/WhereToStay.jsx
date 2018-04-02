/**
 * @overview What you need to know.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

const WhereToStay = () => {
	const title = constants.STAY_TITLE
	const firstParagraph = constants.STAY_FIRST_PARAGRAPH
	const secondParagraph = constants.STAY_SECOND_PARAGRAPH

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
			<p>{secondParagraph}</p>
		</div>
	)
}

export default WhereToStay
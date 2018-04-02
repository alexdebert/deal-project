/**
 * @overview What else should I do.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

const WhatElse = () => {
	const title = constants.WHAT_ELSE_TITLE
	const firstParagraph = constants.WHAT_ELSE_FIRST_PARAGRAPH
	const secondParagraph = constants.WHAT_ELSE_SECOND_PARAGRAPH
	const thirdParagraph = constants.WHAT_ELSE_THIRD_PARAGRAPH
	const fourthParagraph = constants.WHAT_ELSE_FOURTH_PARAGRAPH

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
			<p>{secondParagraph}</p>
			<p>{thirdParagraph}</p>
			<p>{fourthParagraph}</p>
		</div>
	)
}

export default WhatElse
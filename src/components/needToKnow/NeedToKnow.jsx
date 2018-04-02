/**
 * @overview What you need to know.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

const NeedToKnow = () => {
	const title = constants.NEED_TO_KNOW_TITLE
	const firstParagraph = constants.NEED_TO_KNOW_FIRST_PARAGRAPH
	const secondParagraph = constants.NEED_TO_KNOW_SECOND_PARAGRAPH
	const thirdParagraph = constants.NEED_TO_KNOW_THIRD_PARAGRAPH

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
			<p>{secondParagraph}</p>
			<p>{thirdParagraph}</p>
		</div>
	)
}

export default NeedToKnow
/**
 * @overview Get around vegas.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

const GetAround = () => {
	const title = constants.GET_AROUND_TITLE
	const firstParagraph = constants.GET_AROUND_FIRST_PARAGRAPH
	const secondParagraph = constants.GET_AROUND_SECOND_PARAGRAPH

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
			<p>{secondParagraph}</p>
		</div>
	)
}

export default GetAround
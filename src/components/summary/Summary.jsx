/**
 * @overview Summary.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

const Summary = () => {
	const title = constants.SUMMARY_TITLE
	const firstParagraph = constants.SUMMARY_FIRST_PARAGRAPH
	const secondParagraph = constants.SUMMARY_SECOND_PARAGRAPH
	const readMore = constants.READ_MORE

	return (
		<div className="summary-wrapper">
			<h1>{title}</h1>
			<p>{firstParagraph}</p>
			<span>{secondParagraph}</span> <a>{readMore}</a>
		</div>
	)
}

export default Summary
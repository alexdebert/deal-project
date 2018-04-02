/**
 * @overview What you need to know.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

//Images
import suiteImage from '../../../public/img/las-vegas-suite.jpg'

const WhereToStay = () => {
	const title = constants.STAY_TITLE
	const firstParagraph = constants.STAY_FIRST_PARAGRAPH
	const secondParagraph = constants.STAY_SECOND_PARAGRAPH
	const captionSuitePhoto = constants.STAY_SECOND_CAPTION

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
			<p>{secondParagraph}</p>
			<figure>
				<img src={suiteImage} />
				<figcaption>{captionSuitePhoto}</figcaption>
			</figure>
		</div>
	)
}

export default WhereToStay
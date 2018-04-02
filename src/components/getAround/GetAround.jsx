/**
 * @overview Get around vegas.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

//Image
import transportationImage from '../../../public/img/Las-Vegas-local-transportation.jpg'

const GetAround = () => {
	const title = constants.GET_AROUND_TITLE
	const firstParagraph = constants.GET_AROUND_FIRST_PARAGRAPH
	const secondParagraph = constants.GET_AROUND_SECOND_PARAGRAPH
	const captionPhoto = constants.GET_AROUND_CAPTION

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
			<figure>
				<img src={transportationImage} />
				<figcaption>{captionPhoto}</figcaption>
			</figure>
			<p>{secondParagraph}</p>
		</div>
	)
}

export default GetAround
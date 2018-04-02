/**
 * @overview What else should I do.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

//Images
import helicopterImage from '../../../public/img/night-flight.png'
import casinoImage from '../../../public/img/casino.jpg'
import atvImage from '../../../public/img/ATV.jpg'

const WhatElse = () => {
	const title = constants.WHAT_ELSE_TITLE
	const firstParagraph = constants.WHAT_ELSE_FIRST_PARAGRAPH
	const secondParagraph = constants.WHAT_ELSE_SECOND_PARAGRAPH
	const thirdParagraph = constants.WHAT_ELSE_THIRD_PARAGRAPH
	const fourthParagraph = constants.WHAT_ELSE_FOURTH_PARAGRAPH
	const captionHelicopter = constants.WHAT_ELSE_CAPTION_HELICOPTER
	const captionCasino = constants.WHAT_ELSE_CAPTION_CASINO
	const captionAtv = constants.WHAT_ELSE_CAPTION_ATV

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<p>{firstParagraph}</p>
			<figure>
				<img src={helicopterImage} />
				<figcaption>{captionHelicopter}</figcaption>
			</figure>
			<p>{secondParagraph}</p>
			<figure>
				<img src={casinoImage} />
				<figcaption>{captionCasino}</figcaption>
			</figure>
			<p>{thirdParagraph}</p>
			<figure>
				<img src={atvImage} />
				<figcaption>{captionAtv}</figcaption>
			</figure>
			<p>{fourthParagraph}</p>
		</div>
	)
}

export default WhatElse
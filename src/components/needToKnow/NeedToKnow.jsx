/**
 * @overview What you need to know.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

//Images
import welcomeImage from '../../../public/img/welcome-las-vegas.jpg'
import vegasView from '../../../public/img/las-vegas-view.jpg'

const NeedToKnow = () => {
	const title = constants.NEED_TO_KNOW_TITLE
	const firstParagraph = constants.NEED_TO_KNOW_FIRST_PARAGRAPH
	const secondParagraph = constants.NEED_TO_KNOW_SECOND_PARAGRAPH
	const thirdParagraph = constants.NEED_TO_KNOW_THIRD_PARAGRAPH
	const captionWelcomePhoto = constants.NEED_TO_KNOW_CAPTION_WELCOME
	const captionViewPhoto = constants.NEED_TO_KNOW_CAPTION_VIEW

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<figure>
				<img src={welcomeImage} />
				<figcaption>{captionWelcomePhoto}</figcaption>
			</figure>
			<p>{firstParagraph}</p>
			<p>{secondParagraph}</p>
			<figure>
				<img src={vegasView} />
				<figcaption>{captionViewPhoto}</figcaption>
			</figure>
			<p>{thirdParagraph}</p>
		</div>
	)
}

export default NeedToKnow
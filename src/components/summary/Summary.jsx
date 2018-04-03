/**
 * @overview Summary.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

//Components
import ButtonCustom from '../buttonCustom/ButtonCustom'

//Styles
import './Summary.scss'

const Summary = () => {
	const title = constants.SUMMARY_TITLE
	const firstParagraph = constants.SUMMARY_FIRST_PARAGRAPH
	const secondParagraph = constants.SUMMARY_SECOND_PARAGRAPH
	const readMore = constants.READ_MORE
	const buttonText = constants.PLAN_MY_TRIP

	return (
		<div className="summary-wrapper">
			<h1>{title}</h1>
			<p className="summary-paragraph">{firstParagraph}</p>
			<span className="summary-paragraph">{secondParagraph}</span> <a>{readMore}</a>
			<div className="summary-button">
				<ButtonCustom className="request-arrow-button" text={buttonText}/>
			</div>
		</div>
	)
}

export default Summary
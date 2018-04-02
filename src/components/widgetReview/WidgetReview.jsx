/**
 * @overview Widget Review.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Styles
import './WidgetReview.scss'

//Components
import StarList from '../starList/StarList'
import ReviewList from '../reviewList/ReviewList'

const WidgetReview = (props) => {
	const reviews = props.reviews
	return (
		<div id="widget-review-wrapper">
			<div className="close-button" onClick={props.hideWidget}></div>
			<h1>Excellent!</h1>
			<StarList length={5} className="star-green"/>
			<div className="review-list">
				<ReviewList reviews={reviews}
					reviewWrapperClassName={"review-wrapper-widget"}
					starClassName="star-green"/>
			</div>
		</div>
	)
}

WidgetReview.propTypes = {
	reviews: PropTypes.array.isRequired,
	hideWidget: PropTypes.func.isRequired
}

export default WidgetReview
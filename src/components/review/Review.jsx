/**
 * @overview Review component.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Components
import StarList from '../starList/StarList'

//Styles
import './Review.scss'

const Review = props => {
	return (
		<div className={props.reviewWrapperClassName}>
			<div>
				<p className="review-author">{props.author}</p>
			</div>
			<div className="star-list-review">
				<StarList length={props.star} className={props.starClassName}/>
			</div>
			<div>
				<p className="review-date">{props.publish_date}</p>
			</div>
			<div>
				<p className="review-title">{props.title}</p>
			</div>
			<div>
				<p className="review-content">{props.content}</p>
			</div>


		</div>
	)
}

Review.propTypes = {
	author: PropTypes.string.isRequired,
	star: PropTypes.number.isRequired,
	starClassName: PropTypes.string.isRequired,
	reviewWrapperClassName: PropTypes.string.isRequired,
	publish_date: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
}

export default Review
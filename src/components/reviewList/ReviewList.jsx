/**
 * @overview Review List.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Component
import Review from '../review/Review'

//Styles
import './ReviewList.scss'

const ReviewList = props => {
	const reviews = props.reviews
	return (
		<div className="review-list-wrapper">
			{reviews.map(review =>
				<Review key={review.id}
					author={review.author}
					star={review.star}
					starClassName={props.starClassName}
					reviewWrapperClassName={props.reviewWrapperClassName}
					publish_date={review.publish_date}
					title={review.title}
					content={review.content} />
			)}
		</div>
	)
}

ReviewList.propTypes = {
	reviews: PropTypes.array.isRequired,
	starClassName: PropTypes.string.isRequired,
	reviewWrapperClassName: PropTypes.string.isRequired
}

export default ReviewList
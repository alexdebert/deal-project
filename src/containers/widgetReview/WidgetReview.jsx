/**
 * @overview Widget Review.
 */

//Core
import React, {Component} from 'react'
import PropTypes from 'prop-types'

//Styles
import './WidgetReview.scss'

//Components
import StarList from '../../components/starList/StarList'
import ReviewList from '../../components/reviewList/ReviewList'

//Api
import {fetchReviews} from '../../api/reviewService'

class WidgetReview extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reviews: []
		}
	}

	componentDidMount() {
		fetchReviews()
			.then(response => {
				this.setState({
					reviews: response.data.reviews
				})
			})
			.catch(error => console.error(error.response))
	}

	render() {
		let reviews = this.state.reviews
		return (
			<div id="widget-review-wrapper">
				<div className="close-button" onClick={this.props.hideWidget}></div>
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
}

WidgetReview.propTypes = {
	hideWidget: PropTypes.func.isRequired
}

export default WidgetReview
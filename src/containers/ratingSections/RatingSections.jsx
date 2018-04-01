/**
 * @overview Rating Section.
 */

//Core
import React, {Component} from 'react'

//Components
import RatingInformation from '../ratingInformation/RatingInformation'
import StarList from '../../components/starList/StarList'
import WidgetReview from '../widgetReview/WidgetReview'

//Constants
import * as constants from '../../constants/content'

//Styles
import './RatingSections.scss'

class RatingSection extends Component{
	constructor() {
		super()
		this.state = {
			isWidgetVisible: false
		}

		this.showWidget = this.showWidget.bind(this)
		this.hideWidget = this.hideWidget.bind(this)
	}

	showWidget() {
		this.setState({
			isWidgetVisible: true
		})
	}

	hideWidget() {
		this.setState({
			isWidgetVisible: false
		})
	}

	render() {
		const seeReviews = constants.SEE_REVIEW
		return (
			<div id="rating-sections-wrapper">
				<RatingInformation />
				<div className="widget-review-action" onClick={this.showWidget}>
					<StarList length={5} className="star-green"/>
					<div>
						<span>{seeReviews}</span>
					</div>
				</div>
				{ this.state.isWidgetVisible ? <WidgetReview hideWidget={this.hideWidget} /> : null }
			</div>
		)
	}
}

export default RatingSection
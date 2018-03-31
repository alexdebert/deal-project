/**
 * @overview Rating Information.
 */

//Core
import React, {Component} from 'react'

//Components
import Tooltip from '../../components/tooltip/Tooltip'

// Render static HTML:
import html from './ratingInformationTooltip.html'

//Styles
import './RatingInformation.scss'

class RatingInformation extends Component {
	constructor() {
		super()
		this.state = {
			isTooltipVisible: false
		}

		this.showTooltip = this.showTooltip.bind(this)
		this.hideTooltip = this.hideTooltip.bind(this)
	}

	showTooltip() {
		this.setState({
			isTooltipVisible: true
		})
	}

	hideTooltip() {
		this.setState({
			isTooltipVisible: false
		})
	}

	render () {
		return (
			<div id="rating-sections-wrapper" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip} >
				<span>{"Ratings of Deal's services"}</span>
				{ this.state.isTooltipVisible ? <Tooltip html={html}/> : null }
			</div>
		)
	}
}

export default RatingInformation
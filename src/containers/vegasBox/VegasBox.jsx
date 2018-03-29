/**
 * @overview Vegas Trip Box.
 */

//Core
import React, {Component} from 'react'

//Styles
import './VegasBox.scss'

class VegasBox extends Component {
	constructor() {
		super()
		this.state = {
			isDisplayed: true
		}
	}

	toggleList() {
		this.setState(prevState => ({
			isDisplayed: !prevState.isDisplayed
		}))
	}

	render () {
		let hiddenClass = this.state.isDisplayed ? '' : 'hidden',
			classBox = `vegas-box-list-wrapper ${hiddenClass}`

		return (
			<div id="vegas-box-wrapper">
				<div onClick={() => this.toggleList()} className="vegas-box-headline">
					<h2>Handcrafted Vegas Get Away</h2>
				</div>
				<div className={classBox}>
					<ol>
						<li>Describe your dream weekend</li>
						<li>We match you with 1-2 top Vegas specialists who are the best fit. They work together to plan your custom itinerary.</li>
						<li>{"Book the itinerary when you're satisfied"}</li>
					</ol>
					<button>
						Get Started Now
					</button>
				</div>
			</div>
		)
	}
}

export default VegasBox
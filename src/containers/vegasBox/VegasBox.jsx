/**
 * @overview Vegas Trip Box.
 */

//Core
import React, {Component} from 'react'

//Styles
import './VegasBox.scss'

//Constants
import * as constants from '../../constants/content'

class VegasBox extends Component {
	constructor() {
		super()
		this.state = {
			isVisible: true
		}
	}

	toggleList() {
		this.setState(prevState => ({
			isVisible: !prevState.isVisible
		}))
	}

	render () {
		let hidden = this.state.isVisible ? '' : 'hidden'
		const title = constants.VEGAS_BOX_TITLE
		const item1 = constants.VEGAS_BOXLIST_ITEM_1
		const item2 = constants.VEGAS_BOXLIST_ITEM_2
		const item3 = constants.VEGAS_BOXLIST_ITEM_3
		const buttonText = constants.VEGAS_BOXLIST_BUTTON_TEXT

		return (
			<div id="vegas-box-wrapper">
				<div onClick={() => this.toggleList()} className="vegas-box-headline">
					<h2>{title}</h2>
				</div>
				<div className={`vegas-box-list ${hidden}`}>
					<ol>
						<li>{item1}</li>
						<li>{item2}</li>
						<li>{item3}</li>
					</ol>
					<button className="vegas-box-button">
						{buttonText}
					</button>
				</div>
			</div>
		)
	}
}

export default VegasBox
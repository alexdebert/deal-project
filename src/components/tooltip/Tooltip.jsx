/**
 * @overview Tooltip Section.
 */

//Core
import React, {Component} from 'react'
import PropTypes from 'prop-types'

//Styles
import './Tooltip.scss'

class Tooltip extends Component {
	constructor(props) {
		super(props)
		this.createMarkup = this.createMarkup.bind(this)
	}

	createMarkup(html) {
		return {__html: html}
	}

	render() {
		return (
			<div className="tooltip" dangerouslySetInnerHTML={this.createMarkup(this.props.html)}/>
		)
	}
}

Tooltip.propTypes = {
	html: PropTypes.string
}

export default Tooltip
/**
 * @overview Button Custom.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Styles
import './ButtonCustom.scss'

const ButtonCustom = (props) => (
	<button className={props.className}>
		{props.text}
	</button>
)

ButtonCustom.propTypes = {
	className: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
}

export default ButtonCustom
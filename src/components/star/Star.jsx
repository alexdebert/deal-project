/**
 * @overview Star component.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Image
import starImage from '../../../public/img/sprite_star.png'

//Styles
import './Star.scss'

const Star = props => (
	<div className={props.className}>
		<img className="heroImage" src={starImage} />
	</div>
)

Star.propTypes = {
	className: PropTypes.string.isRequired
}

export default Star
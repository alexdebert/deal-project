/**
 * @overview Star List.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Component
import Star from '../star/Star'

//Styles
import './StarList.scss'

const StarList = props => {
	return (
		<div className="star-list-wrapper">
			{[...Array(props.length)].map((star, index) =>
				<Star key={index} className={props.className} />
			)}
		</div>
	)
}

StarList.propTypes = {
	length: PropTypes.number.isRequired,
	className: PropTypes.string.isRequired
}

export default StarList
/**
 * @overview Photo component.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Styles
import './Photo.scss'

const Photo = props => (
	<div className="photo-home-wrapper">
		<img className="heroImage" src={props.imageUrl} />
		<div>
			<h2>{props.title}</h2>
		</div>
	</div>
)

Photo.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired
}

export default Photo
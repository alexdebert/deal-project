/**
 * @overview Photo overlay.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Constants
import * as constants from '../../constants/content'

//Styles
import './PhotoOverlay.scss'

const PhotoOverlay = props => {
	const photo = props.photo
	const linkText = `${constants.READ_MORE}...`

	return (
		<div className="home-photo-overlay">
			<div className="home-photo-overlay-content">
				<h2 className="overlay-header">{photo.title}</h2>
				<p>{photo.detail}</p>
				<a>{linkText}</a>
			</div>
		</div>
	)
}

PhotoOverlay.propTypes = {
	photo: PropTypes.object.isRequired
}

export default PhotoOverlay
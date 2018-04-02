/**
 * @overview Photo component.
 */

//Core
import React from 'react'
import PropTypes from 'prop-types'

//Styles
import './Photo.scss'

const Photo = props => {
	console.log(props)
	return (
		<div className="photo-home-wrapper" onMouseEnter>
			<img className="heroImage" src={props.imageUrl}
				onMouseEnter={(props) => props.showOverlay(props)}
				onMouseLeave={(props) => props.hideOverlay(props)}/>
			<div>
				<h2>{props.title}</h2>
			</div>
		</div>
	)
}

Photo.propTypes = {
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	showOverlay: PropTypes.func,
	hideOverlay: PropTypes.func
}

export default Photo
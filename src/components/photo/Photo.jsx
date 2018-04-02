/**
 * @overview Photo component.
 */

//Core
import React, {Component} from 'react'
import PropTypes from 'prop-types'

//Components
import ButtonCustom from '../buttonCustom/ButtonCustom'
import PhotoOverlay from '../photoOverlay/PhotoOverlay'

//Constants
import * as constants from '../../constants/content'

//Styles
import './Photo.scss'

class Photo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isHovered: false
		}

		this.showOverlay = this.showOverlay.bind(this)
		this.hideOverlay = this.hideOverlay.bind(this)
	}

	showOverlay() {
		this.setState({
			isHovered: true
		})
	}

	hideOverlay() {
		this.setState({
			isHovered: false
		})
	}

	render() {
		const photo = this.props
		const isHovered = this.state.isHovered
		const buttonText = constants.READ_MORE

		const footerImage = isHovered ? (
			<ButtonCustom className="read-more-button" text={buttonText}/>
		) : (
			<h2>{photo.title}</h2>
		)

		return (
			<div id={photo.id} className="photo-home-wrapper"
				onMouseEnter={this.showOverlay}
				onMouseLeave={this.hideOverlay}>
				<div className="photo-home-image">
					{ isHovered ? <PhotoOverlay photo={photo}/> : null }
					<img className="heroImage" src={photo.imageUrl} />
				</div>
				<div className="photo-home-footer">
					{footerImage}
				</div>
			</div>
		)
	}
}

Photo.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired
}

export default Photo
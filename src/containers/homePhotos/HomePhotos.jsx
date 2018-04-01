/**
 * @overview Home photos container.
 */

//Core
import React, {Component} from 'react'

//API
import {fetchHomePhotos} from '../../api/photoService'

//Component
import PhotosList from '../../components/photosList/PhotosList'

//Styles
import './HomePhotos.scss'

class HomePhotos extends Component {
	constructor() {
		super()
		this.state = {
			photos: []
		}
	}

	componentDidMount() {
		fetchHomePhotos()
			.then(response => {
				this.setState({
					photos: response.data.home
				})
			})
			.catch(error => console.error(error.response))
	}

	render() {
		const photos = this.state.photos
		return (
			<div className="home-photos-wrapper">
				<PhotosList photos={photos}/>
			</div>
		)
	}
}

export default HomePhotos
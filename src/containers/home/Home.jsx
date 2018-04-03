/**
 * @overview Home.
 */

//Core
import React, {Component} from 'react'

//Components
import HeroImage from '../../components/heroImage/HeroImage'
import RatingSection from '../ratingSections/RatingSections'
import NewsSection from '../../components/newsSection/NewsSection'
import VegasBox from '../vegasBox/VegasBox'
import Summary from '../../components/summary/Summary'
import PhotosList from '../../components/photosList/PhotosList'
import Sidebar from '../Sidebar/Sidebar'
import CityTour from '../../components/cityTour/CityTour'
import ReviewSection from '../reviewSection/ReviewSection'

//API
import {fetchHomePhotos} from '../../api/photoService'

//Styles
import './Home.scss'

class Home extends Component {
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
			<div className='home-container'>
				<HeroImage />
				<div className="home-banner-information-wrapper">
					<RatingSection/>
					<NewsSection/>
				</div>
				<VegasBox />
				<Summary />
				<div className="home-photos-wrapper">
					<PhotosList photos={photos} />
				</div>
				<Sidebar />
				<CityTour />
				<ReviewSection />
			</div>
		)
	}
}

export default Home
/**
 * @overview Home.
 */

//Core
import React from 'react'

//Components
import HeroImage from '../../components/heroImage/HeroImage'
import BannerInformation from '../../components/bannerInformation/BannerInformation'
import VegasBox from '../vegasBox/VegasBox'
import Summary from '../../components/summary/Summary'
import HomePhotos from '../homePhotos/HomePhotos'

//Styles
import './Home.scss'

const Home = () => (
	<div className='home-container'>
		<HeroImage />
		<BannerInformation />
		<VegasBox />
		<Summary />
		<HomePhotos />
	</div>
)

export default Home
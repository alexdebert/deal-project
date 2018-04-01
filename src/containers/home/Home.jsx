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

//Styles
import './Home.scss'

const Home = () => (
	<div className='home-container'>
		<HeroImage />
		<BannerInformation />
		<VegasBox />
		<Summary />
	</div>
)

export default Home
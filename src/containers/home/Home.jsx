/**
 * @overview Home.
 */

//Core
import React from 'react'

//Components
import HeroImage from '../../components/heroImage/HeroImage'
import VegasBox from '../../components/vegasBox/VegasBox'


const Home = () => (
	<div className='home-container'>
		<HeroImage />
		<VegasBox />
	</div>
)

export default Home
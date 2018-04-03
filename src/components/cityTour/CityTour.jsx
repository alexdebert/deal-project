/**
 * @overview City tour banner.
 */

//Core
import React from 'react'

//Component
import ButtonCustom from '../buttonCustom/ButtonCustom'

//Constants
import * as constants from '../../constants/content'

//Image
import cityTour from '../../../public/img/city-tour-las-vegas.jpg'

const CityTour = () => {
	const buttonText = constants.PLAN_MY_TRIP
	return (
		<div className="home-city-tour-wrapper">
			<img src={cityTour} />
			<div className="home-city-tour-button">
				<ButtonCustom className="request-arrow-button" text={buttonText}/>
			</div>
		</div>
	)
}

export default CityTour
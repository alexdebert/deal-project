/**
 * @overview Clubs and Pool parties.
 */

//Core
import React from 'react'

//Constants
import * as constants from '../../constants/content'

//Images
import poolPartyImage from '../../../public/img/pool-party.jpg'
import nightclubImage from '../../../public/img/nigthclub.jpg'

const NeedToKnow = () => {
	const title = constants.CLUB_POOL_TITLE
	const firstParagraph = constants.CLUB_POOL_FIRST_PARAGRAPH
	const tips = constants.CLUB_POOL_TIPS
	const item1 = constants.CLUB_POOL_ITEM_1
	const item2 = constants.CLUB_POOL_ITEM_2
	const item3 = constants.CLUB_POOL_ITEM_3
	const item4 = constants.CLUB_POOL_ITEM_4
	const lastParagraph = constants.CLUB_POOL_LAST_PARAGRAPH
	const captionPoolPhoto = constants.CLUB_POOL_CAPTION_POOL
	const captionNightclubPhoto = constants.CLUB_POOL_CAPTION_NIGHCLUB

	return (
		<div id="sidebar-item-wrapper">
			<h2>{title}</h2>
			<figure>
				<img src={poolPartyImage} />
				<figcaption>{captionPoolPhoto}</figcaption>
			</figure>
			<p>{firstParagraph}</p>
			<p>{tips}</p>
			<ul>
				<li>{item1}</li>
				<li>{item2}</li>
				<li>{item3}</li>
				<li>{item4}</li>
			</ul>
			<figure>
				<img src={nightclubImage} />
				<figcaption>{captionNightclubPhoto}</figcaption>
			</figure>
			<p>{lastParagraph}</p>
		</div>
	)
}

export default NeedToKnow
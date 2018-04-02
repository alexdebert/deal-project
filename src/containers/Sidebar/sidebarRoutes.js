import NeedToKnow from '../../components/needToKnow/NeedToKnow'
import WhereToStay from '../../components/whereToStay/WhereToStay'
import ClubsAndPool from '../../components/clubsAndPool/ClubsAndPool'
import GetAround from '../../components/getAround/GetAround'
import Dinner from '../../components/dinner/Dinner'
import WhatElse from '../../components/whatElse/WhatElse'

const routes = [
	{
		path: "/",
		exact: true,
		component: NeedToKnow
	},
	{
		path: "/where-to-stay",
		component: WhereToStay
	},
	{
		path: "/clubs-and-pool-parties",
		component: ClubsAndPool
	},
	{
		path: "/get-around",
		component: GetAround
	},
	{
		path: "/dinner",
		component: Dinner
	},
	{
		path: "/what-else",
		component: WhatElse
	}
]

export default routes

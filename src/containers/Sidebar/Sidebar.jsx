/**
 * @overview Sidebar.
 */

import React, {Component} from "react"
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"

//Routes
import routes from './sidebarRoutes'

//API
import {fetchSidebarItems} from '../../api/sidebarService'

//Constants
import * as constants from '../../constants/content'

//Styles
import './Sidebar.scss'

class Sidebar extends Component {
	constructor() {
		super()
		this.state = {
			items: []
		}
	}

	componentDidMount() {
		fetchSidebarItems()
			.then(response => {
				this.setState({
					items: response.data.items
				})
			})
			.catch(error => console.error(error.response))
	}

	render() {
		const items = this.state.items
		const title = constants.SIDEBAR_TITLE
		return (
			<Router>
				<div className="home-sidebar-wrapper">
					<div className="home-sidebar-title">
						<h2>{title}</h2>
					</div>
					<div className="home-sidebar-list">
						<ul>
							{items.map(item =>
								<li key={item.id} >
									<NavLink activeClassName="active" to={item.path}>{item.title}</NavLink>
								</li>
							)}
						</ul>

						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.sidebar}/>
						))}
					</div>
					<div className="home-sidebar-items-wrapper">
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}/>
						))}
					</div>
				</div>
			</Router>
		)
	}
}

export default Sidebar
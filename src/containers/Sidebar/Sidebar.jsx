/**
 * @overview Sidebar.
 */

import React, {Component} from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

//Routes
import routes from './sidebarRoutes'

//API
import {fetchSidebarItems} from '../../api/sidebarService'

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
		return (
			<Router>
				<div>
					<div className="home-sidebar">
						<ul>
							{items.map(item =>
								<li key={item.id} >
									<Link to={item.path}>{item.title}</Link>
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
					<div className="home-sidebar-item">
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
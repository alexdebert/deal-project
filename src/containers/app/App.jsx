
/**
 * @overview Application.
 */


//Core
import React, {Component} from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

// Global application styles
import './App.scss'

//Routes
import routes from '../../routes'

//Components
import Header from '../../components/header/Header'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<div id="application-wrapper">
						<main id="main" role="main">
							<Switch>
								{routes.map((route, index) => (
									<Route
										key={index}
										path={route.path}
										exact={route.exact}
										component={route.component}
									/>
								))}
							</Switch>
						</main>
					</div>
				</div>
			</Router>
		)
	}
}

export default App

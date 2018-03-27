/**
 * @overview Header.
 */

//Core
import React from 'react'


//Images
import headerLogo from '../../../public/img/logo.png'

//Styles
import './Header.scss'

const Header = () => (
	<div id="header-wrapper">
		<header>
			<div className="header-logo-wrapper">
				<img src={headerLogo} />
			</div>
		</header>
	</div>
)

export default Header
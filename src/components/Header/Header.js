import React from 'react';
import './Header.css';
import { Navigation, HeroBanner } from '../../index';

const Header = () => {
	return (
		<div className="header">
			<div className="items">
				<ul>
					<li>
						<a href="/#">C21 GLOBAL</a>
					</li>

					<li>
						<a href="/#">LOGIN</a>
					</li>

					<li>
						<a href="/#">FRANCHISE</a>
					</li>

					<li>
						<a href="/#">COMPANY</a>
					</li>
				</ul>
			</div>
			<Navigation />
			<HeroBanner />
		</div>
	);
};

export default Header;

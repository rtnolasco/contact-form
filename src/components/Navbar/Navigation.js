import React, { useState } from 'react';
import './Navigation.css';
import logo from '../../assets/Gold-Center_Brand-WordMark_-Cyprus-01.png';

const Navigation = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<nav>
			<div className="wrapper">
				<a href="/#">
					<img src={logo} alt=""></img>
				</a>

				<button className="hamburger" onClick={toggleMenu}>
					&#9776;
				</button>

				<ul className={showMenu ? 'show-menu' : ''}>
					<li>
						<a href="/#">FIND A HOME</a>
					</li>
					<li>
						<a href="/#">SELL A HOME</a>
					</li>
					<li>
						<a href="/#">JOIN C21</a>
					</li>
					<li>
						<a href="/#">BLOG</a>
					</li>
					<li>
						<a href="/#">CONTACT</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;

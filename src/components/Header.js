import { useState } from 'react';
import './Header.css';

//Header
// -logan
// -nav items
//  -search
//  -log in
//  -sign up
const Header = () => {
	const [btnName, setBtnName] = useState('Log In');

	return (
		<div className="headerContainer">
			<div className="logoImageDiv">
				<img
					className="logoImage"
					alt="logo"
					src="https://aartisto.com/wp-content/uploads/2020/11/swiggy-logo.png"
				/>
			</div>

			<div className="navItems">
				<ul>
					<li className="headerButton">Log In</li>
					<li>Sign Up</li>
				</ul>
			</div>
			
		</div>
	);
};

export default Header;

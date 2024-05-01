import './Footer.css';

//Footer
// -all the links
// -social links
// -contact us
// -copyright
const Footer = () => (
	<div className="footerContainer">
		<div className="footerSubContainer">
			<div className="footerSubContainer">
				<img
					className="footerImg"
					src="https://i.pinimg.com/736x/ae/f6/d0/aef6d084d09af1779ae1fb640d39a970.jpg"
					alt=""
				/>
				<h1>Swiggy</h1>
			</div>
			<div className="footerSubContainerDiv">
				<h3>Company</h3>
				<ul>
					<li>About</li>
					<li>Careers</li>
					<li>Team</li>
					<li>Swiggy One</li>
					<li>Swiggy Instamart</li>
					<li>Swiggy Genie</li>
				</ul>
			</div>

			<div className="footerSubContainerDiv">
				<h3>Contact us</h3>
				<ul>
					<li>Help & Support</li>
					<li>Partner with us</li>
					<li>Ride with us</li>
				</ul>
			</div>

			<div className="footerSubContainerDiv">
				<h3>Legal</h3>
				<ul>
					<li>Terms & Conditions</li>
					<li>Cookie Policy</li>
					<li>Privacy Policy</li>
					<li>Investor Relations</li>
				</ul>
			</div>
			<div className="footerSubContainerDiv">
				<h3>We deliver to:</h3>
				<ul>
					<li>Bangalore</li>
					<li>Gurgaon</li>
					<li>Hyderabad</li>
					<li>Delhi</li>
					<li>Mumbai</li>
					<li>Pune</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Footer;

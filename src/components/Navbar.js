import './Navbar.css';

//navebar2 with delivery+dining out+Nightlife
const Navbar = () => (
	<div className="NavbarContainer">
		<div className="navbarSubContainer">
			<p>Delivery</p>
			<img
				src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
				alt="deliveryIcon"
			/>
		</div>
		<div className="navbarSubContainer">
			<p>Dining</p>
			<img
				src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp"
				alt="diningIcon"
			/>
		</div>
		<div className="navbarSubContainer">
			<p>Nightlife</p>
			<img
				src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp"
				alt="NightlifeIcon"
			/>
		</div>
	</div>
);

export default Navbar;

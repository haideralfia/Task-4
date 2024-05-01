import './ResCard.css';

//rest-card
//  -image
//  -name + deals/off
//  -cusines
//  -rating
//  -delivery time
const ResCard = (props) => {
	const { resData } = props;
	const { name, averageRating, cuisines, averageTime, url } = resData?.data;
	return (
		<div className="resCardContainer">
			<img src={url} alt="restarunt Card Image" />
			<div className="resCardSubContainer">
				<div className="resCardDiv">
					<h2 className="resCardTitle">{name}</h2>
					<h3 className="resCardRating">{averageRating} Star</h3>
				</div>
				<div className="resCardDiv">
					<h3 className="resCardFood">{cuisines.join(', ')}</h3>

					<h3 className="resCardTime">{averageTime} min</h3>
				</div>
			</div>
		</div>
	);
};

export default ResCard;

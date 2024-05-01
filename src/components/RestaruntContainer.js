import ResCard from './ResCard';
import './RestaruntContainer.css';
import { restaruntList } from '../utiles/mockData';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

//rest-container
const RestaruntContainer = () => {
	const [resList, setResList] = useState(restaruntList);
	const [filteredRestarunt, setFilteredRestarunt] = useState(restaruntList);
	const [searchText, setSearchText] = useState('');

	

	return resList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="resContainer">
			<h1>Delivery Restaurants</h1>

			<div className="search">
				<div>
					<input
						type="text"
						className="searchInput"
						placeholder="Search"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							const filteredSearchList = resList.filter((res) =>
								res.data.cuisines.includes(
									searchText.toLocaleLowerCase()
								)
							);
							setFilteredRestarunt(filteredSearchList);
						}}
						className="searchButton"
					>
						Search
					</button>
				</div>

				<button
					className="filterButton"
					onClick={() => {
						const fiteredResList = resList.filter(
							(res) => res.data.averageRating > 4
						);
						setFilteredRestarunt(fiteredResList);
					}}
				>
					Filter rating 4+
				</button>
			</div>
			<div className="resSubContainer">
				{filteredRestarunt.map((restarunt) => (
					<ResCard key={restarunt.data.id} resData={restarunt} />
				))}
			</div>
		</div>
	);
};

export default RestaruntContainer;

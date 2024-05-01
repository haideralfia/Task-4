import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import RestaruntContainer from './components/RestaruntContainer';
import Footer from './components/Footer';

function App() {
	return (
		<div className="container">
			<Header />
			<Navbar />
			<RestaruntContainer />
			<Footer />
		</div>
	);
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import ImageSlideShow from './components/ImageSlideShow';
// import Footer from './components/Footer';
// import Facilities from './components/Facilities';
// import Testimonials from './components/Testimonials'
// import Contacts from './components/Contacts';
// import Mapcontainer from './components/Mapcontainer';
// import Overview from './components/Overview';
// import Rooms from './components/Rooms';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div style={{minWidth: "1400px"}}>
			<Router>
				<Header />
			</Router>
		</div>
	);
}

export default App;

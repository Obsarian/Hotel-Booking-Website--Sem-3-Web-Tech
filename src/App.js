import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import ImageSlideShow from './components/ImageSlideShow';
import DatePicker from 'sassy-datepicker';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import Facil from './components/Facilities';
import {image_links} from './components/ImageSlideShow';

function App() {
	return (
		<div style={{minWidth: "1400px"}}>
			<Header />
			<ImageSlideShow />
			<Facilities />
			<Footer />
		</div>
	);
}

export default App;

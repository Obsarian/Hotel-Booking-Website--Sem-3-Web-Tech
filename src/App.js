import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import ImageSlideShow from './components/ImageSlideShow';
import DatePicker from 'sassy-datepicker';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import Facil from './components/Facilities';
import Testimonials from './components/Testimonials'
import Contacts from './components/Contacts';
import {image_links} from './components/ImageSlideShow';

function App() {
	return (
		<div style={{minWidth: "1400px"}}>
			<Header />
			<ImageSlideShow />
			<Facilities />
			<Testimonials />
			<Contacts />
			<Footer />
		</div>
	);
}

export default App;

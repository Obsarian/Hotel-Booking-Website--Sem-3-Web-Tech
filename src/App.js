import './App.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";

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

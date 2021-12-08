import React from 'react';
import axios from 'axios';

class Bookingform extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			check_in: "0000-00-0",
			check_out: "0000-00-0",
			adults: "0",
			children: "0"
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	dateSelected = (n) => {
		if(n==="in"){
			document.getElementById("checkinhead").style.display = "none";
		}
		else if(n==="out"){
			document.getElementById("checkouthead").style.display = "none";
		}
	}

	setCheckIn = (event) => {
		this.dateSelected("in");
		this.setState({check_in: event.target.value});
	}
	setCheckOut = (event) => {
		this.dateSelected("out");
		this.setState({check_out: event.target.value});
	}
	setAdults = (event) => {
		this.setState({adults: String(event.target.value)});
	}
	setChildren = (event) => {
		this.setState({children: String(event.target.value)});
	}

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.adults === "0" && this.state.children === "0") {
			window.history.back();
		}
		else {
			let nme = prompt("Enter your name: ", "");
			var newBooking = { 
				"name": nme,
				"check_in": this.state.check_in, 
				"check_out": this.state.check_out, 
				"adults": this.state.adults, 
				"children": this.state.children 
			};
			axios.post('http://localhost:5000/new_booking', newBooking);
			
			alert("Booking Succesfull!");
		}
	}

	render() {

		const bookingBarStyle = {
            position: "absolute",
            bottom: "5px",
            left: "13.5%",
            textAlign: "center",
            backgroundColor: "rgb(230, 230, 230)",
            padding: "30px 40px 30px 40px",
            height: "70px",
            width: "68%",
            zIndex: "1020",
			borderRadius: "2px"
        }
		
        const bookingDivStyle = {
			position: "relative",
            display: "inline-block",
            margin: "0 7px 0 7px",
            height: "100%",
            width: "18%",
			color: "rgb(53, 53, 53)",
			borderRadius: "2px",
        }

        const bookingInputStyle = {
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(215, 215, 215)",
            fontFamily: ["M-PLUS-2", "sans-serif"],
            fontSize: "18px",
            textAlign: "center",
            border: "0",
			cursor: "pointer",
			borderRadius: "2px"
        };

		const hthreeStyle = {
			position: "absolute",
			display: "block",
			backgroundColor: "rgb(215, 215, 215)",
			width: "70%",
			top: "4%",
			left: "2%",
			fontFamily: ["Open Sans", "sans-serif"]
		};

		return (
			<form style={bookingBarStyle} onSubmit={this.handleSubmit}>
				<div style={bookingDivStyle}>
					<h3 id="checkinhead" style={hthreeStyle}>Check In</h3>
					<input style={bookingInputStyle} onInput={this.setCheckIn} type="date" id="check_in" required/>
				</div>
				<div style={bookingDivStyle}>
					<h3 id="checkouthead" style={hthreeStyle}>Check Out</h3>
					<input style={bookingInputStyle} onInput={this.setCheckOut} type="date" id="check_out" required/>
				</div>
				<div style={bookingDivStyle}>
					<select id="adults" onInput={this.setAdults} style={bookingInputStyle} required>
						<option selected disabled value="">Adults</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div style={bookingDivStyle}>
					<select id="children" onInput={this.setChildren} style={bookingInputStyle} required>
						<option selected disabled value="">Children</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div style={{...bookingDivStyle, width: "20%"}}>
					<input style={{...bookingInputStyle, backgroundColor: "rgb(187, 121, 91)", color: "white"}} type="submit" value="Book"/>
				</div>
			</form>
		);
	}
}

export default Bookingform;
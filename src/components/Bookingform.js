import React from 'react';
const FileSystem = require("fs");

class Bookingform extends React.Component {

	dateSelected = (n) => {
		if(n=="in"){
			document.getElementById("checkinhead").style.display = "none";
		}
		else if(n=="out"){
			document.getElementById("checkouthead").style.display = "none";
		}
	}

	handleSubmit = () => {
		var checkin = document.getElementById("check_in").value;
		var checkout = document.getElementById("check_out").value;
		var ad = document.getElementById("adults").value;
		var chi = document.getElementById("children").value;
		if(ad == "0" && chi == "0") {
			window.history.back();
		}
		else {
			var booking_det = {
				"check_in_date" : checkin,
				"check_out_date" : checkout,
				"no_of_adults" : ad,
				"no_of_children" : chi
			}
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
					<input style={bookingInputStyle} onInput={() => this.dateSelected("in")} type="date" id="check_in" required/>
				</div>
				<div style={bookingDivStyle}>
					<h3 id="checkouthead" style={hthreeStyle}>Check Out</h3>
					<input style={bookingInputStyle} onInput={() => this.dateSelected("out")} type="date" id="check_out" required/>
				</div>
				<div style={bookingDivStyle}>
					<select id="adults" style={bookingInputStyle} required>
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
					<select id="children" style={bookingInputStyle} required>
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
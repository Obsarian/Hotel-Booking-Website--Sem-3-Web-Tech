import React from 'react';

class Bookingform extends React.Component {
	render() {

		const bookingBarStyle = {
            position: "absolute",
            bottom: "10px",
            left: "13.5%",
            textAlign: "center",
            backgroundColor: "rgb(230, 230, 230)",
            padding: "30px 40px 30px 40px",
            height: "70px",
            width: "68%",
            zIndex: "1020"
        }
        const bookingDivStyle = {
            display: "inline-block",
            margin: "0 7px 0 7px",
            height: "100%",
            width: "18%"
        }

        const bookingInputStyle = {
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(215, 215, 215)",
            fontFamily: ["M-PLUS-2", "sans-serif"],
            fontSize: "18px",
            textAlign: "center",
            border: "0"
        };

		return (
			<div class="booking-dropdown" style={bookingBarStyle}>
				<div style={bookingDivStyle}>
					<input style={bookingInputStyle} type="date" class="book-input" id="check-in" required/>
				</div>
				<div style={bookingDivStyle}>
					<input style={bookingInputStyle} type="date" class="book-input" id="check-out" required/>
				</div>
				<div style={bookingDivStyle}>
					<select style={bookingInputStyle}>
						<option value="0">Adults</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<div style={bookingDivStyle}>
					<select style={bookingInputStyle}>
						<option value="0">Children</option>
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
			</div>
		);
	}
}

export default Bookingform;
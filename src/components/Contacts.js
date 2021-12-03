import React from 'react';

class Contacts extends React.Component {
	render() {
		
		const sayHelloStyle = {
			textAlign: "center",
			fontFamily: ["Open Sans", "sans-serif"],
			margin: "50px 0 50px 0",
			color: "rgb(53, 53, 53)"
		};

		const messageFormStyle = {
			textAlign: "center",
			width: "80%",
			margin: "50px 10% 50px 10%"
		};

		const messageInputStyle = {
			backgroundColor: "rgb(230, 230, 230)",
			margin: "15px",
			width: "35%",
			height: "60px",
			border: "0px solid black",
			padding: "0 20px 0 20px",
			borderRadius: "2px"
		};

		const messageSubmitStyle = {
			backgroundColor: "rgb(175, 109, 78)",
			color: "white",
			fontSize: "20px",
			margin: "15px",
			width: "35%",
			height: "60px",
			border: "0px solid black",
			fontFamily: ["Open Sans", "sans-serif"],
			cursor: "pointer"
		};

		return (
			<>
				<div style={sayHelloStyle}>
					<h1 style={{fontSize: "43px"}}>Say Hello</h1>
					<p style={{fontSize: "23px"}}>If you need some help or want to know something about RRS Bonvoy, send us a message.</p>
				</div>
				<form style={messageFormStyle}>
					<input style={messageInputStyle} type="text" placeHolder="Your Name"/>
					<input style={messageInputStyle} type="text" placeHolder="Your E-mail"/><br/>
					<input style={{...messageInputStyle, width: "76%"}} type="text" placeHolder="Subject"/><br/>
					<textarea style={{...messageInputStyle, width: "76%", height: "200px", padding: "20px"}} placeHolder="Message"></textarea><br/>
					<input style={messageSubmitStyle} type="submit" value="SEND MESSAGE"/>
				</form>
			</>
		);
	}
}

export default Contacts;
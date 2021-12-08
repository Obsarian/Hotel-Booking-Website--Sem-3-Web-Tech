import React from 'react';
import axios from 'axios';

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			name: "-",
			email: "-",
			subject: "-",
			message: "-"
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	setName = (event) => {
		this.setState({name: event.target.value});
	}
	setEmail = (event) => {
		this.setState({email: event.target.value});
	}
	setSubject = (event) => {
		this.setState({subject: event.target.value});
	}
	setMessage = (event) => {
		this.setState({message: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		var newMessage = { 
			"name": this.state.name, 
			"email": this.state.email, 
			"subject": this.state.subject, 
			"message": this.state.message 
		};
		axios.post('http://localhost:5000/new_message', newMessage);
		alert("Message has been posted.");
	}

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
				<form onSubmit={this.handleSubmit} style={messageFormStyle}>
					<input id="name" onInput={this.setName} style={messageInputStyle} type="text" placeHolder="Your Name"/>
					<input id="email" onInput={this.setEmail} style={messageInputStyle} type="text" placeHolder="Your E-mail"/><br/>
					<input id="subject" onInput={this.setSubject} style={{...messageInputStyle, width: "76%"}} type="text" placeHolder="Subject"/><br/>
					<textarea id="message" onInput={this.setMessage} style={{...messageInputStyle, width: "76%", height: "200px", padding: "20px"}} placeHolder="Message"></textarea><br/>
					<input style={messageSubmitStyle} type="submit" value="SEND MESSAGE"/>
				</form>
			</>
		);
	}
}

export default Contacts;
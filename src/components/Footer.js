import React from 'react';
import logo from './images/logo.jpg';

class Footer extends React.Component {
    render() {

        const footerStyle = {
            position: "relative",
            backgroundColor: "rgb(28, 28, 28)",
            fontFamily: ["M-PLUS-2", "sans-serif"],
            textAlign: "center",
            margin: "0",
            width: "100%",
            height: "450px",
            borderTop: "3px solid sienna"
        };

        const contactDivStyle = {
            display: "inline-block",
            margin: "5px 3% 5px 3%",
            width: "200px",
            color: "white",
            padding: "10px",
            fontSize: "15px"
        };

        return (
            <div class="footer" style={footerStyle}>
                <img src={logo} style={{width:"200px", marginTop: "30px"}}/>
                <div class="contact" style={{margin:"10px 0 30px 0"}}>
                    <div style={contactDivStyle}>
                        <p>Phone:</p>
                        <p>+91 99016 99433</p>
                    </div>
                    <div style={contactDivStyle}>
                        <p>Address:</p>
                        <p>Church Street</p>
                    </div>
                    <div style={contactDivStyle}>
                        <p>Mail:</p>
                        <p>rrsbonvoy@gmail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
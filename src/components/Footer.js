import React from 'react';
import logo from './images/logo.jpg';

class Footer extends React.Component {
    render() {

        const footerStyle = {
            position: "relative",
            bottom: "0",
            backgroundColor: "rgb(28, 28, 28)",
            fontFamily: ["Open-Sans", "sans-serif"],
            textAlign: "center",
            margin: "0",
            width: "100%",
            height: "780px",
            borderTop: "3px solid sienna"
        };

        const contactDivStyle = {
            display: "inline-block",
            margin: "5px 3% 5px 3%",
            width: "200px",
            color: "white",
            padding: "10px",
            fontSize: "17px"
        };

        const socialIconStyle = {
            display: "inline-block",
            color: "white",
            padding: "10px",
            margin: "0 10px 0 10px",
            fontSize: "27px"
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
                        <p>Krambitan, Bali</p>
                    </div>
                    <div style={contactDivStyle}>
                        <p>Mail:</p>
                        <p>rrsbonvoy@gmail.com</p>
                    </div>
                </div>
                <div class="social_media" style={contactDivStyle}>
                    <p>Follow us on:</p>
                    <i style={socialIconStyle} class="fa fa-facebook-official" aria-hidden="true"></i>
                    <i style={socialIconStyle} class="fa fa-twitter" aria-hidden="true"></i>
                    <i style={socialIconStyle} class="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div>
                    <h2 style={{color: "rgb(230, 230, 230)", margin: "60px auto 30px auto"}}>Project by:</h2>
                    <div style={{...contactDivStyle, backgroundColor: "rgb(48, 48, 48)", borderRadius: "4px"}}>
                        <p>Robin Roy</p>
                        <p>PES2UG20CS279</p>
                    </div>
                    <div style={{...contactDivStyle, backgroundColor: "rgb(48, 48, 48)", borderRadius: "4px"}}>
                        <p>Ronit Bhathija</p>
                        <p>PES2UG20CS284</p>
                    </div>
                    <div style={{...contactDivStyle, backgroundColor: "rgb(48, 48, 48)", borderRadius: "4px"}}>
                        <p>Sachin Vishwamitra</p>
                        <p>PES2UG20CS291</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
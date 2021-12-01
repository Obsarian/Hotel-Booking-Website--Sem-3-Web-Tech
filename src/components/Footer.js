import React from 'react';

class Footer extends React.Component {
    render() {

        const footerStyle = {
            position: "relative",
            backgroundColor: "rgb(43, 43, 43)",
            fontFamily: ["M-PLUS-2", "sans-serif"],
            color: "rgb(43, 43, 43)",
            textAlign: "center",
            margin: "0",
            width: "100%",
            height: "120px",
            borderTop: "3px solid sienna"
        };

        const socialMediaStyle = {
            margin: "5px 20px 5px 20px",
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "10px",
            fontSize: "30px"
        };

        return (
            <div class="footer" style={footerStyle}>
                <h3 style={{color:"white"}}>Follow us on:</h3>
                <div class="social-media">
                    <i style={socialMediaStyle} class="fa fa-facebook-official"></i>
                    <i style={socialMediaStyle} class="fa fa-twitter"></i>
                    <i style={socialMediaStyle} class="fa fa-instagram"></i>
                </div>
            </div>
        );
    }
}

export default Footer;
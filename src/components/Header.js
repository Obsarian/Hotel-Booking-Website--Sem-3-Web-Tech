import React from 'react';
import logo from './images/logo.jpg';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hoverHome: "rgb(230, 230, 230)",
            hoverAboutUs: "rgb(230, 230, 230)",
            hoverRooms: "rgb(230, 230, 230)",
            hoverContacts: "rgb(230, 230, 230)"
        };
    }

    hoverFunc = (id, n) => {
        let str = "";
        if(n == 1) {
            str = "rgb(210, 210, 210)";
        }
        else {
            str = "rgb(230, 230, 230)";
        }

        switch(id) {
            case "home":
                this.setState({hoverHome: str}); break;
            case "about-us":
                this.setState({hoverAboutUs: str}); break;
            case "rooms":
                this.setState({hoverRooms: str}); break;
            case "contacts":
                this.setState({hoverContacts: str}); break;
            default: return;
        }
    }

    render() {

        const headerStyle = {
            backgroundColor: "rgb(230, 230, 230)",
            width: "100%",
            height: "250px",
            position: "relative",
            borderBottom: "3px solid sienna"
        };

        const logoStyle = {
            height: "100%",
            overflow: "hidden"
        };

        const logoImgStyle = {
            position: "absolute",
            left: "80px",
            height: "100%"
        };

        const headerMenuStyle = {
            position: "absolute",
            bottom: "0",
            fontFamily: ["Poiret One", "cursive"],
            fontSize: "28px",
            width: "60%",
            textAlign: "center",
            left: "330px",
            height: "74px",
            //backgroundColor: "blue"
        };

        const headerMenuItemStyle = {
            display: "inline-block",
            cursor: "pointer",
            margin: "auto",
            padding: "20px 0 20px 0",
            width: "24%",
            // backgroundColor: "red",
            height: "auto"
        };

        const bookButtonStyle = {
            position: "absolute",
            cursor: "pointer",
            backgroundColor: "rgb(187, 121, 91)",
            color: "white",
            padding: "1px 0 1px 0",
            // top: "70%",
            fontFamily: ["Poiret One", "cursive"],
            fontSize: "24px",
            width: "15%",
            height: "74px",
            textAlign: "center",
            right: "0",
            bottom: "0"
        };

        return (
            <header style={headerStyle}>
                <div class="logo" style={logoStyle}>
                    <img style={logoImgStyle} src={logo} alt="Marriott Bonvoy Logo" />
                </div>
                <div class="header-menu" style={headerMenuStyle}>
                    <a id="home" onMouseOver={() => this.hoverFunc("home", 1)} onMouseLeave={() => this.hoverFunc("home", -1)} class="header-menu-item" style={{...headerMenuItemStyle, backgroundColor:this.state.hoverHome}}>Home</a>
                    <a id="about-us" onMouseOver={() => this.hoverFunc("about-us", 1)} onMouseLeave={() => this.hoverFunc("about-us", -1)} class="header-menu-item" style={{...headerMenuItemStyle, backgroundColor:this.state.hoverAboutUs}}>About Us</a>
                    <a id="rooms" onMouseOver={() => this.hoverFunc("rooms", 1)} onMouseLeave={() => this.hoverFunc("rooms", -1)} class="header-menu-item" style={{...headerMenuItemStyle, backgroundColor:this.state.hoverRooms}}>Rooms</a>
                    <a id="contacts" onMouseOver={() => this.hoverFunc("contacts", 1)} onMouseLeave={() => this.hoverFunc("contacts", -1)} class="header-menu-item" style={{...headerMenuItemStyle, backgroundColor:this.state.hoverContacts}}>Contacts</a>
                </div>
                <div id="book-button-header" style={bookButtonStyle}>
                    <p>Book Now</p>
                </div>
            </header>
        );
    }
}

export default Header;
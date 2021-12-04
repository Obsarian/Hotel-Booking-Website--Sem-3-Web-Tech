import React from 'react';
import logos from './images/logo.jpg';
import styles from './styling/header.module.css';
import Homepage from './Homepage';
import Aboutuspage from './Aboutuspage';
import Contactspage from './Contactspage';
import Rooms from './Rooms';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Header extends React.Component {
    
    render() {
        return (
            <>
                <div className={styles.main_header}>
                    <div className={styles.logo}>
                        <img src={logos} alt="Marriott Bonvoy Logo" />
                    </div>
                    
                    <div className={styles.header_menu}>
                        <a><Link to="/" style={{textDecoration: "none", color: "rgb(53, 53, 53)"}}>Home</Link></a>
                        <a><Link to="/about-us" style={{textDecoration: "none", color: "rgb(53, 53, 53)"}}>About Us</Link></a>
                        <a><Link to="/rooms" style={{textDecoration: "none", color: "rgb(53, 53, 53)"}}>Rooms</Link></a>
                        <a><Link to="/contacts" style={{textDecoration: "none", color: "rgb(53, 53, 53)"}}>Contacts</Link></a>
                    </div>
                    <div style={{borderTop: "3px solid sienna"}}>
                        <Routes>
                            <Route exact path="/" element={<Homepage />}></Route>
                            <Route path="/about-us" element={<Aboutuspage />}></Route>
                            <Route path="/rooms" element={<Rooms />}></Route>
                            <Route path="/contacts" element={<Contactspage />}></Route>
                        </Routes>
                    </div>
                    <div className={styles.book_button}>
                        <p style={{margin: "22px"}}>Book Now</p>
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default Header;
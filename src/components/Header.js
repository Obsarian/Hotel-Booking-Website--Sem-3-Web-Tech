import React from 'react';
import logos from './images/logo.jpg';
import styles from './styling/header.module.css';

class Header extends React.Component {
    
    render() {
        return (
            <header className={styles.main_header}>
                <div className={styles.logo}>
                    <img src={logos} alt="Marriott Bonvoy Logo" />
                </div>
                <div className={styles.header_menu}>
                    <a>Home</a>
                    <a>About Us</a>
                    <a>Rooms</a>
                    <a>Contacts</a>
                </div>
                <div className={styles.book_button}>
                    <p style={{margin: "22px"}}>Book Now</p>
                </div>
            </header>
        );
    }
}

export default Header;
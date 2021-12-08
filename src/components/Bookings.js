import React, { useEffect, useState } from 'react';
import bookings_background from './images/bookings_background.jpg';

function Bookings() {

    const [bookings, setBookings] = useState([{
        check_in: "",
        check_out: "",
        adults: "",
        children: ""
    }])

    useEffect(() => {
        fetch("/view_booking").then((res) => {
            if(res.ok) {
                return res.json()
            }
        }).then((jsonRes) => {setBookings(jsonRes)});
    });

    const bookingStyle= {
        textAlign: "center",
        fontFamily: ["Open Sans", "sans-serif"],
        backgroundColor: "rgb(53, 53, 53)",
        color: "rgb(230, 230, 230)",
        width: "50%",
        margin: "20px auto 10px auto",
        padding: "10px",
        border: "1px solid sienna",
        borderRadius: "4px"
    };

    return (
        <div style={{backgroundImage: bookings_background}}>
        {bookings.map((booking) => {
            return (
                <>
                <div style={bookingStyle}>
                    <h1>Name: {booking.name}</h1>
                    <p>Check In: {booking.check_in}</p>
                    <p>Check Out: {booking.check_out}</p>
                    <p>No. of Adults: {booking.adults}</p>
                    <p>No. of Children: {booking.children}</p>
                </div>
                </>
            );
        })}
        </div>
    );
}

export default Bookings;
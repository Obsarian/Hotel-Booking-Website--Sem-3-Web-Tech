import React from 'react';
import Roomtype from './Roomtype';

class Rooms extends React.Component {
    render() {
        const roomsDivStyle = {
            backgroundColor: "rgb(43, 43, 43)",
            display: "grid",
            gridTemplateColumns: "auto auto",
            width: "100%",
            textAlign: "center"
        };
        return (
            <div style={roomsDivStyle}>
                <Roomtype imsrc="https://scdn.aro.ie/Sites/50/flemings_mayfair/uploads/images/roomimages44/roomslarge31/deluxe_single_4.jpg" type="Single" price="$100" />
                <Roomtype imsrc="https://img4556.weyesimg.com/uploads/gdsdyabo.com/images/15783638229213.jpg?imageView2/2/w/1920/q/100" type="Double" price="$140" />
                <Roomtype imsrc="https://5.imimg.com/data5/DH/OK/GLADMIN-46323579/deluxe-triple-room-rental-service-500x500.png" type="Triple" price="$180" />
                <Roomtype imsrc="https://cdn.traveltripper.io/site-assets/512_855_12327/media/2018-02-27-080006/large_ex-double-2.jpg" type="Quad" price="$220" />
            </div>
        );
    }
}

export default Rooms;
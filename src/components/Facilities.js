import React from 'react';
import Facil from './Facil';

class Facilities extends React.Component {
    render() {

        const facilityDivStyle = {
            color: "rgb(53, 53, 53)",
            borderTop: "3px solid sienna"
        };
        const facilityHeadingStyle = {
            textAlign: "center",
            fontFamily: ["Open Sans", "sans-serif"],
            fontSize: "20px",
            padding: "50px 0 50px 0",
            width: "100%"
        };

        const gridStyle = {
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            width: "100%",
            textAlign: "center"
        };

        const gridItemStyle = {
            fontFamily: ["Open Sans", "sans-serif"],
            padding: "0"
        };

        return (
            <div style={facilityDivStyle}>
                <div style={facilityHeadingStyle}>
                    <h1>What we Offer</h1>
                </div>
                <div style={gridStyle}>
                    <Facil style={gridItemStyle} indx="1" heading="Outdoor Pool" description="Lorem ipsum" imgsrc="https://s7d2.scene7.com/is/image/ritzcarlton/RCBANGA_00014_conversion?$XlargeViewport100pct$"/>
                    <Facil style={gridItemStyle} indx="2" heading="Indoor Pool" description="Lorem ipsum" imgsrc="https://media.architecturaldigest.com/photos/5a539132b886ab70f8b4b4af/master/w_1918,h_1280,c_limit/Four%20Seasons%20Hotel%20Pudong,%20Shanghai.jpg"/>
                    <Facil style={gridItemStyle} indx="3" heading="Restaurant" description="Lorem ipsum" imgsrc="https://media-cdn.tripadvisor.com/media/photo-s/18/5f/c7/4d/greenhouse-restaurant.jpg"/>
                    <Facil style={gridItemStyle} indx="4" heading="Arcade" description="Lorem ipsum" imgsrc="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2015/03/Underdoggs.jpg"/>
                    <Facil style={gridItemStyle} indx="5" heading="Spa Zone" description="Lorem ipsum" imgsrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/305065311.jpg?k=9d7b7336bc37510f2b02f46086236a96bf59aa7b9cb7eeab58ac0ce400508c22&o=&hp=1"/>
                    <Facil style={gridItemStyle} indx="6" heading="Sky Bar" description="Lorem ipsum" imgsrc="https://i0.wp.com/thepenangite.com/wp-content/uploads/2020/02/three-sixty-sky-bar-bayview-hotel-penang.jpg?fit=678%2C454"/>
                </div>
            </div>
        );
    }
}

export default Facilities;
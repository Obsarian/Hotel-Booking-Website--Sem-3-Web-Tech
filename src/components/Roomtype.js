import React from 'react';

class Roomtype extends React.Component {
    render() {
        const roomTypeGridStyle = {
            // border: "2px solid green",
            color: "rgb(230, 230, 230)",
            fontFamily: ["Open Sans", "sans-serif"],
        };
        const roomImageStyle = {
            width: "100%",
            height: "350px"
        };
        const inner_style = {
            backgroundColor: "rgb(33, 33, 33)", 
            margin: "auto", 
            width: "500px", 
            height: "510px",
            borderRight: "2px solid sienna",
            borderLeft: "2px solid sienna"
        };
        return (
            <div style={roomTypeGridStyle}>
                <div style={inner_style}>
                    <div>
                        <img src={this.props.imsrc} style={roomImageStyle}/>
                    </div>
                    <div style={{margin: "20px"}}>
                        <h1>Luxury {this.props.type} Suite</h1>
                    </div>
                    <div style={{margin: "20px"}}>
                        <h2>Price: {this.props.price}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Roomtype;
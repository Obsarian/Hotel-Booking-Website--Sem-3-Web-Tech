import React from 'react';

class Facil extends React.Component {
    
    render() {
        var rgb = (parseInt(this.props.indx)%2 === 1)?"rgb(53, 53, 53)":"rgb(250, 250, 250)";
        var fontcolor = (parseInt(this.props.indx)%2 === 1)?"white":"black";

        const facilImgStyle = {
            width: "100%",
            height: "70%"
        };

        return (
            <div style={{...this.props.style, backgroundColor: rgb, color: fontcolor, padding: "30px"}}>
                <img style={facilImgStyle} src={this.props.imgsrc}/>
                <h3>{this.props.heading}</h3>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Facil;
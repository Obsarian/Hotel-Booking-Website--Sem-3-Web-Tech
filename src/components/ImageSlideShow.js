import React from 'react';

const image_links = ["https://cache.marriott.com/marriottassets/marriott/BLRFB/blrfb-pool-0021-hor-feat.jpg",
                    "https://cache.marriott.com/marriottassets/marriott/BLRJW/blrjw-lobby-0041-hor-feat.jpg", 
                    "https://cache.marriott.com/marriottassets/marriott/BLRGT/blrgt-exterior-0011-hor-feat.jpg", 
                    "https://cache.marriott.com/marriottassets/marriott/BLRJW/blrjw-room-0042-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*"];


class ImageSlideShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 3,
            buttonOpacity: "rgba(0,0,0,0.0)"
        };
        this.plusSlides = this.plusSlides.bind(this);
    }

    componentDidMount() {
        this.t = setInterval(() => this.plusSlides(1), 3000);
    }

    plusSlides = (dir) => {
        this.setState((prevState) => ({ 
            slideIndex: (prevState.slideIndex + 4 + dir)%4
        }));
    }

    // hoverButtonFunc = () => {
    //     this.setState({buttonOpacity: "rgba(0,0,0,0.5)" });
    // }

    // exitButtonFunc = () => {
    //     this.setState({buttonOpacity: "rgba(0,0,0,0.0)"});
    // }

    render() {

        const imgSlideShowStyle = {
            width: "100%",
            position: "relative",
            margin: "0 0 -4px 0"
        };

        const pageTitleStyle = {
            position: "absolute",
            color: "white",
            textAlign: "center",
            fontFamily: "Abel",
            fontSize: "40px",
            zIndex: "1000",
            padding: "6% 0 10% 0",
            top: "0",
            width: "100%",
            height: "364px",
            background: "linear-gradient(360deg, rgba(0,0,0,0), rgb(0, 0, 0, 0.8))"
            //background: "red"
        };

        // const arrowStyle = {
        //     zIndex: "1010",
        //     cursor: "pointer",
        //     position: "absolute",
        //     top: "50%",
        //     width: "auto",
        //     marginTop: "-22px",
        //     padding: "16px",
        //     color: "white",
        //     fontWeight: "bold",
        //     fontSize: "18px",
        //     transition: "0.6s ease",
        //     borderRadius: "0 3px 3px 0",
        //     userSelect: "none",
        //     backgroundColor: this.state.buttonOpacity
        // };

        const bookingBarStyle = {
            position: "absolute",
            bottom: "10px",
            left: "13.5%",
            textAlign: "center",
            backgroundColor: "rgb(230, 230, 230)",
            padding: "30px 40px 30px 40px",
            height: "70px",
            width: "68%",
            zIndex: "1020"
        }
        const bookingDivStyle = {
            display: "inline-block",
            margin: "0 7px 0 7px",
            height: "100%",
            width: "18%"
        }

        const bookingInputStyle = {
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(215, 215, 215)",
            fontFamily: ["M-PLUS-2", "sans-serif"],
            fontSize: "18px",
            textAlign: "center",
            border: "0"
        };

        // const nextStyle = {right: "0", borderRadius: "3px 0 0 3px"};

        return (
            <div class="img-slide-show" style={imgSlideShowStyle}>
                <div class="page-title" style={pageTitleStyle}>
                    <h1>Book Your Stay</h1>
                    <p>Choose from our collection of luxurious rooms</p>
                </div>
                <div class="slides-fade" id="first-img">
                    <img style={{width: "100%"}} src={image_links[this.state.slideIndex]}/>
                </div>
                {/* <a onMouseEnter={this.hoverButtonFunc} onMouseLeave={this.exitButtonFunc} class="prev" onClick={() => this.plusSlides(-1)} style={arrowStyle}>&#10094;</a>
                <a onMouseEnter={this.hoverButtonFunc} onMouseLeave={this.exitButtonFunc} class="next" onClick={() => this.plusSlides(1)} style={{...arrowStyle, ...nextStyle}}>&#10095;</a> */}
                <div class="booking-dropdown" style={bookingBarStyle}>
                    <div style={bookingDivStyle}>
                        <input style={bookingInputStyle} type="date" class="book-input" id="check-in" required/>
                    </div>
                    <div style={bookingDivStyle}>
                        <input style={bookingInputStyle} type="date" class="book-input" id="check-out" required/>
                    </div>
                    <div style={bookingDivStyle}>
                        <select style={bookingInputStyle}>
                            <option value="0">Adults</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div style={bookingDivStyle}>
                        <select style={bookingInputStyle}>
                            <option value="0">Children</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div style={{...bookingDivStyle, width: "20%"}}>
                        <input style={{...bookingInputStyle, backgroundColor: "rgb(187, 121, 91)", color: "white"}} type="submit" value="Book"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageSlideShow
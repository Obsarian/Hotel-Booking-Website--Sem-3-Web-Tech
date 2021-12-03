import React from 'react';
import Bookingform from './Bookingform';
import slideshow_1 from './images/slideshow_1.jpg';
import slideshow_2 from './images/slideshow_2.jpg';
import slideshow_3 from './images/slideshow_3.jpg';
import slideshow_4 from './images/slideshow_4.jpg';
import slideshow_5 from './images/slideshow_5.jpg';

const image_links = [slideshow_1, slideshow_2,  slideshow_3,  slideshow_4, slideshow_5];
var len = image_links.length;

// https://cache.marriott.com/marriottassets/marriott/BLRFB/blrfb-pool-0021-hor-feat.jpg
// https://cache.marriott.com/marriottassets/marriott/BLRJW/blrjw-lobby-0041-hor-feat.jpg
// https://cache.marriott.com/marriottassets/marriott/BLRGT/blrgt-exterior-0011-hor-feat.jpg
// https://cache.marriott.com/marriottassets/marriott/BLRJW/blrjw-room-0042-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1180px:*

class ImageSlideShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            buttonOpacity: "rgba(0,0,0,0.0)"
        };
        this.plusSlides = this.plusSlides.bind(this);
    }

    componentDidMount() {
        this.t = setInterval(() => this.plusSlides(1), 3000);
    }

    plusSlides = (dir) => {
        this.setState((prevState) => ({ 
            slideIndex: (prevState.slideIndex + len + dir)%len
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
                <Bookingform />
            </div>
        );
    }
}

export default ImageSlideShow
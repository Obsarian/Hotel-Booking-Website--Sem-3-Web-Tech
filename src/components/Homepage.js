import React from 'react';
import Footer from './Footer';
import ImageSlideShow from './ImageSlideShow';
import Overview from './Overview';
import Testimonials from './Testimonials';

class Homepage extends React.Component {
    render() {
        return (
            <>
                <ImageSlideShow />
                <Overview />
                <Testimonials />
            </>
        );
    }
}

export default Homepage;
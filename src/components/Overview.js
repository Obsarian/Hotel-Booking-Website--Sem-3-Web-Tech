import React from 'react';

class Overview extends React.Component {
    render() {
        const overviewStyle = {
            position: "relative",
            textAlign: "center",
            backgroundColor: "rgb(53, 53, 53)",
            fontFamily: ["Open Sans", "sans-serif"],
            color: "rgb(230, 230, 230)",
            height: "480px",
            marginTop: "0px"
        };

        const overviewHeadingStyle = {
            height: "150px",
            padding: "50px 0 0 0",
            fontSize: "21px"
        };
        const overviewParaStyle = {
            width: "60%",
            margin: "0 20% 0 20%",
            fontSize: "19px",
            lineHeight: "1.6"
        };
        return (
            <div style={overviewStyle}>
                <div style={overviewHeadingStyle}>
                    <h1>Overview</h1>
                </div>
                <div style={overviewParaStyle}>
                    <p>If you are seeking superior hotels, our RRS Bonvoy 
                        is the perfect location to begin your search. Our 
                        luxury RRS Bonvoy blends current-day modernity with 
                        classic elegance. You’ll enjoy the convenience of 
                        newly redesigned rooms and suites, a full-service 
                        fitness center, swimming pool, large restaurant and 
                        some of best bars and lounges to celebrate and 
                        entertain in sophisticated style.</p>
                </div>
            </div>
        );
    }
}

export default Overview;
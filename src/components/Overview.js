import React from 'react';

class Overview extends React.Component {
    render() {
        const overviewStyle = {
            position: "relative",
            textAlign: "center",
            backgroundColor: "rgb(53, 53, 53)",
            fontFamily: ["Open Sans", "sans-serif"],
            color: "rgb(230, 230, 230)",
            height: "620px",
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
                    <p>At vero eos et accusamus et iusto odio dignissimos 
                        ducimus qui blanditiis praesentium voluptatum deleniti 
                        atque corrupti quos dolores et quas molestias excepturi 
                        sint occaecati cupiditate non provident, similique sunt 
                        in culpa qui officia deserunt mollitia animi, id est 
                        laborum et dolorum fuga. Et harum quidem rerum facilis 
                        est et expedita distinctio. Nam libero tempore, cum 
                        soluta nobis est eligendi optio cumque nihil impedit 
                        quo minus id quod maxime placeat facere possimus, omnis 
                        voluptas assumenda est, omnis dolor repellendus. 
                        Temporibus autem quibusdam et aut officiis debitis aut 
                        rerum necessitatibus saepe eveniet ut et voluptates 
                        repudiandae sint et molestiae non recusandae. Itaque 
                        earum rerum hic tenetur a sapiente delectus, ut aut 
                        reiciendis voluptatibus maiores alias consequatur aut 
                        perferendis doloribus asperiores repellat.</p>
                </div>
            </div>
        );
    }
}

export default Overview;
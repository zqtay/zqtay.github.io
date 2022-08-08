import React from 'react';
import Container from 'react-bootstrap/Container';
import HeaderImage from '../header.jpg';

import DataUtil from "../data/DataUtil";

class HomeHeader extends React.Component {
    render() {
        var home = DataUtil.getHome();
        return (
            <Container fluid style={{backgroundImage: `url(${HeaderImage})`}}>
                <div className="row align-items-center" style={{height: "40vh", backgroundColor:"#00000000"}}>
                    <div className="col-10 mx-auto text-center" style={{color:"white"}}>
                        <h2>{home.headerTitle}</h2>
                        <p className="lead">{home.headerSubtitle}</p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default HomeHeader;
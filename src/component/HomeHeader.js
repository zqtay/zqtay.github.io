import React from 'react';
import Container from 'react-bootstrap/Container';

import HeaderImage from '../user/header.jpg';
import DataUtil from "../user/DataUtil";

class HomeHeader extends React.Component {
    render() {
        var home = DataUtil.getHome();
        return (
            <Container fluid style={{backgroundImage: `url(${HeaderImage})`}}>
                <div className="row align-items-center" style={{height: "40vh", backgroundColor:"#00000000"}}>
                    <div className="col-10 mx-auto text-center" style={{color:"white"}}>
                        <div className="display-5">{home.headerTitle}</div>
                        <p className="lead">{home.headerSubtitle}</p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default HomeHeader;
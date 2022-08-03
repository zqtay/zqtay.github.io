import React from 'react';
import Container from 'react-bootstrap/Container';
import HeaderImage from '../header.jpg';

class HomeHeader extends React.Component {
    render() {
        return (
            <Container fluid style={{backgroundImage: `url(${HeaderImage})`}}>
                <div className="row align-items-center" style={{height: "50vh", backgroundColor:"#00000000"}}>
                    <div className="col-10 mx-auto text-center" style={{color:"#FFFFFFFF"}}>
                        <h2>Header title</h2>
                        <p className="lead">Header subtitle</p>
                    </div>
                </div>
            </Container>
        );
    }
}

export default HomeHeader;
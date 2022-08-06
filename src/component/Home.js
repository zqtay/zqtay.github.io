import React from 'react';
import Container from 'react-bootstrap/Container';

import HomeHeader from './HomeHeader';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <Container style={{transform:"translate(0px, -60px)", marginBottom:"-60px"}}>
                    <div className="shadow p-3 mb-5 bg-body rounded" 
                    style={{height: "100vh", backgroundColor:"white"}}>      
                        <div className='h2' align='left'>Home</div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
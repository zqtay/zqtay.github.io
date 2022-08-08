import React from 'react';
import Container from 'react-bootstrap/Container';

import HomeHeader from './HomeHeader';
import ProfileImage from '../profile.jpg';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <Container style={{marginTop:"-60px"}}>
                    <div className="shadow p-3 mb-5 bg-body rounded" style={{height:"100vh", backgroundColor:"white"}}>
                        <div className="mx-auto rounded-circle border border-4 border-white shadow-sm" style={{maxWidth:"45%", width:"200px"}}>
                            <div className="rounded-circle " 
                                style={{paddingTop:"100%", maxWidth:"100%",backgroundImage:`url(${ProfileImage})`}}>
                            </div>
                        </div>     
                        <div className='h2' align='left'>Home</div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
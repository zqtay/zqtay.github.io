import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Home extends React.Component {
    render() {
        return (
            <Container>
                <div class="shadow p-3 mb-5 bg-body rounded" 
                style={{height: "100vh", backgroundColor:"#FFFFFFFF", transform:"translate(0px, -8%)"}}>      
                    <div className='h2' align='left'>Home</div>
                </div>
            </Container>
        );
    }
}

export default Home;
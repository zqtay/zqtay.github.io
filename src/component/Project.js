import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Project extends React.Component {
    render() {
        return (
            <Container>
                <div class="shadow p-3 mb-5 bg-body rounded" 
                style={{height: "100vh", backgroundColor:"#FFFFFFFF"}}>      
                    <div className='h2' align='left'>Project</div>
                </div>
            </Container>
        );
    }
}

export default Project;
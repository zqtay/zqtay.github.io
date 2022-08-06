import React from 'react';
import Container from 'react-bootstrap/Container';

class Resume extends React.Component {
    render() {
        return (
            <Container>
                <div className="shadow p-3 mt-3 mb-5 bg-body rounded" 
                style={{height: "100vh", backgroundColor:"white"}}>      
                    <div className='h2' align='left'>Resume</div>
                </div>
            </Container>
        );
    }
}

export default Resume;
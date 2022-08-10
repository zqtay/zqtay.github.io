import React from 'react';
import Container from 'react-bootstrap/Container';

import DataUtil from "../user/DataUtil";

class Projects extends React.Component {
    render() {
        var projects = DataUtil.getProjects();
        return (
            <Container>
                <div id="content-panel" className="shadow p-3 mt-3 mb-5 bg-body rounded" style={{backgroundColor:"white"}}>      
                    <div className="display-5" align="center">Projects</div>
                    <hr />
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {projects.map((d) => <Project data={d} />)}
                    </div>
                </div>
            </Container>
        );
    }
}

function Project(props) {
    var image = null;
    if (props.data.imageLink === null || props.data.imageLink === "") {
        image = <PlaceholderImage width="100%" height="150px" />
    }
    else {
        image = <img src={props.data.imageLink} className="card-img-top" style={{width:"100%", height:"150px"}} />
    }
    return (
        <div className="col mb-3">
            <a href={props.data.link} className="card" width="100%">
                {image}
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.description}</p>
                </div>
            </a>
        </div>
    );
}

function PlaceholderImage(props) {
    return (
        <svg width={props.width} height={props.height}>
            <rect width="100%" height="100%" fill="#868e96" />
        </svg>
    );
}

export default Projects;
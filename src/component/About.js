import React from 'react';
import Container from 'react-bootstrap/Container';

import Resume from "./Resume";
import BannerImage from '../user/banner.jpg';
import ProfileImage from '../user/profile.jpg';
import DataUtil from "../user/DataUtil";

class About extends React.Component {
    render() {
        return (
            <div>
                <Banner data={DataUtil.getHome()} image={BannerImage}/>
                <Container style={{marginTop:"-80px"}}>
                    <div className="shadow p-3 mb-5 bg-body rounded" style={{backgroundColor:"white"}}>
                        <DownloadButton link={DataUtil.getLinks().resume} />
                        <Header data={DataUtil.getUser()} image={ProfileImage} />
                        <hr />
                        <Resume data={DataUtil.getResume()} />
                    </div>
                </Container>
            </div>
        );
    }
}

function Banner(props) {
    return (
        <Container fluid style={{backgroundImage: `url(${props.image})`}}>
            <div className="row align-items-center" style={{height: "40vh", backgroundColor:"#00000000", marginTop:"-80px"}}>
                <div className="col-10 mx-auto text-center" style={{color:"white"}}>
                    <div className="display-5">{props.data.headerTitle}</div>
                    <p className="lead">{props.data.headerSubtitle}</p>
                </div>
            </div>
        </Container>
    );
}

function Header(props) {
    return (
        <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center">
            <div className="col-lg px-0 rounded-circle border border-4 border-white shadow-sm" style={{width:"45%", minWidth:"120px", maxWidth:"180px"}}>
                <div className="rounded-circle" 
                style={{paddingTop:"100%", maxWidth:"100%",backgroundImage:`url(${props.image})`}}>
                </div>
            </div>     
            <div className="col col-lg-auto ms-lg-4">
                <div className="display-5 text-lg-start">{`${props.data.lastName}, ${props.data.firstName}`}</div>
                <div className="text-lg-start" style={{fontSize:"2rem"}}>{props.data.title}</div>
            </div>
        </div>
    );
}

function DownloadButton(props) {
    return (
        <div className="d-flex flex-column align-items-end w-100">
            <a className="position-absolute" href={props.link}>
                <span className="fa-stack fa-xl">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa-solid fa-file-arrow-down fa-stack-1x fa-inverse"></i>
                </span>
            </a>
        </div>

    );
}

export default About;
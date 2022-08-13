import React from 'react';
import Container from 'react-bootstrap/Container';

import Resume from "./Resume";
import BannerImage from '../user/banner.jpg';
import ProfileImage from '../user/profile.jpg';
import DataUtil from "../user/DataUtil";

const About = (props) => {
    return (
        <div>
            <Banner data={DataUtil.getHome()} image={BannerImage} />
            <Container style={{ marginTop: "-25vh" }}>
                <div id="content-panel" className="shadow p-3 p-lg-4 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
                    <DownloadButton link={DataUtil.getLinks().resume} />
                    <Header data={DataUtil.getUser()} image={ProfileImage} />
                    <hr />
                    <Resume data={DataUtil.getResume()} />
                    <hr className="d-none d-lg-block" />
                </div>
            </Container>
        </div>
    );
}

const Banner = (props) => {
    return (
        <Container id="banner" fluid style={{ backgroundImage: `url(${props.image})`, backgroundSize: "cover" }}>
            <div className="row align-items-center" style={{ height: "50vh", backgroundColor: "#00000000" }}>
                <div className="col-10 mx-auto text-center" style={{ color: "white", marginTop: "-25vh" }}>
                    <div id="banner-title" className="display-5">{props.data.headerTitle}</div>
                    <p id="banner-subtitle" className="lead">{props.data.headerSubtitle}</p>
                </div>
            </div>
        </Container>
    );
}

const Header = (props) => {
    return (
        <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center">
            <div id="image-profile" className="col-lg px-0 rounded-circle border border-4 border-white shadow-sm" style={{ width: "45%", minWidth: "120px", maxWidth: "180px" }}>
                <div className="rounded-circle" style={{ paddingTop: "100%", maxWidth: "100%", backgroundImage: `url(${props.image})`, backgroundSize: "contain" }}>
                </div>
            </div>
            <div className="col col-lg-auto ms-lg-4">
                <div id="user-name" className="display-5 text-lg-start" style={{ fontWeight: "400" }}>{`${props.data.lastName}, ${props.data.firstName}`}</div>
                <div id="user-title" className="display fs-2 fw-light text-lg-start">{props.data.title}</div>
            </div>
        </div>
    );
}

const DownloadButton = (props) => {
    if (props.link === null || props.link === "") {
        return null;
    }
    return (
        <div className="d-flex flex-column align-items-end w-100">
            <a id="button-download-file" className="position-absolute" href={props.link}>
                <span className="fa-stack fa-xl">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa-solid fa-file-arrow-down fa-stack-1x fa-inverse"></i>
                </span>
            </a>
        </div>
    );
}

export default About;
import React from 'react';
import Container from 'react-bootstrap/Container';

import DataUtil from "../user/DataUtil";

class Resume extends React.Component {
    render() {
        var user = DataUtil.getUser();
        var resume = DataUtil.getResume();
        return (
            <Container>
                <div className="shadow p-3 mt-3 mb-5 bg-body rounded" align='left' style={{backgroundColor:"white"}}>      
                    <Header data={user} link={DataUtil.getLinks().resume}/>
                    <hr />
                    <Opening data={resume.opening} />
                    <div className="row">
                        <div className="col-lg me-lg-5">
                            <h4>Experience</h4>
                            {resume.experience.map((d) => <Experience data={d} />)}
                            <hr className="d-block d-lg-none" />
                        </div>
                        <div className="col-lg ms-lg-5">
                            <h4>Education</h4>
                            {resume.education.map((d) => <Education data={d} />)}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md me-md-5">
                            <h4>Skills</h4>
                            {resume.skill.map((d) => <Skill data={d} />)}
                            <hr className="d-block d-md-none" />
                        </div>
                        <div className="col-md ms-md-5">
                            <h4>Languages</h4>
                            {resume.language.map((d) => <Skill data={d} />)}
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

function Header(props) {
    var downloadIcon = null;
    if (props.link === null || props.link === "") {
        downloadIcon = <div className="d-flex col-4" />
    }
    else {
        downloadIcon =                 
        <div className="d-flex col-4" style={{marginTop:"-10px"}}>
            <a className="ms-auto" href={props.link}>
                <span className="fa-stack fa-xl">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa-solid fa-file-arrow-down fa-stack-1x fa-inverse"></i>
                </span>
            </a>
        </div>
    }
    return (
        <div align='center'>
            <div className="display-5">{`${props.data.lastName}, ${props.data.firstName}`}</div>
            <div className="row justify-content-between">
                <div className="col-4" />
                <div className="col-4" style={{fontSize:"25px"}}>{`${props.data.title}`}</div>
                {downloadIcon}
            </div>
        </div>
    );
}

function Opening(props) {
    if (props.data === null || props.data === "") {
        return;
    }
    return (
        <div>
            {props.data}
            <hr />
        </div>
    );
}

function Experience(props) {
    var desc = null
    if (Array.isArray(props.data.description)) {
        desc = <ul>
            {props.data.description.map((d) => <li>{d}</li>)}
        </ul>
    }
    else {
        desc = <div>
            {props.data.description}
        </div>
    }
    return (
        <div>
            <h5>{props.data.company}</h5>
            <h6>{props.data.title}</h6>
            <div className="text-muted">{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
            {desc}
        </div>
    );
}

function Education(props) {
    var desc = null
    if (Array.isArray(props.data.description)) {
        desc = <ul>
            {props.data.description.map((d) => <li>{d}</li>)}
        </ul>
    }
    else {
        desc = <div>
            {props.data.description}
        </div>
    }
    return (
        <div>
            <h5>{props.data.institute}</h5>
            <h6>{props.data.title}</h6>
            <div className="text-muted">{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
            {desc}
        </div>
    );
}

function Skill(props) {
    var level = null;
    const maxLevel = 5;
    if (props.data.level === null || props.data.level === "") {
        level = null;
    }
    else {
        level = parseInt(props.data.level);
        var i = 0;
        var levelIcons = [];
        while (i < maxLevel) {
            if (i < level) {
                levelIcons.push(<i className="fa-solid fa-circle fa-xs" />);
            }
            else {
                levelIcons.push(<i className="fa-regular fa-circle fa-xs" />);
            }
            i++;
        }
        level = <div className="col-auto">
            {levelIcons}
        </div>
    }
    return (
        <div className="row justify-content-between">
            <div className="col-auto">{props.data.name}</div>
            {level}
        </div>
    );
}

export default Resume;
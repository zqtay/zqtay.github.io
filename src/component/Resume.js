import React from 'react';

class Resume extends React.Component {
    render() {
        var resume = this.props.data;
        return (
            <div className="row text-start gx-lg-5">
                <div className="col-lg-4" style={{textAlign:"justify"}}>
                    <div id="resume-about">
                        <h4>About</h4>
                        <Opening data={resume.opening} />
                    </div>
                    <div id="resume-skills">
                        <h4>Skills</h4>
                        {resume.skill.map((d) => <Skill data={d} />)}
                    </div>
                    <hr />
                    <div id="resume-languages">
                        <h4>Languages</h4>
                        {resume.language.map((d) => <Skill data={d} />)}
                    </div>
                    <hr className="d-block d-lg-none" />
                </div>
                <div className="col-lg-8">
                    <div id="resume-experience">
                        <h4>Experience</h4>
                        {resume.experience.map((d) => <Experience data={d} />)}
                    </div>
                    <hr />
                    <div id="resume-education">
                        <h4>Education</h4>
                        {resume.education.map((d) => <Education data={d} />)}
                    </div>
                    <hr className="d-block d-lg-none" />
                </div>
            </div>
        );
    }
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
            {props.data.description.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
    }
    else {
        desc = <div>
            {props.data.description}
        </div>
    }
    return (
        <div className="row mb-3">
            <div className="col-lg-2 d-none d-lg-block" style={{textAlign:"left"}}>{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
            <div className="col-lg-10" style={{textAlign:"justify"}}>
                <div className="h5 mb-0">{`${props.data.title}`}</div>
                <div className="fs-6">{`${props.data.company}, ${props.data.location}`}</div>
                <div className="d-lg-none fw-light">{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
                <div className="mb-1" />
                {desc}
            </div>
        </div>
    );
}

function Education(props) {
    var desc = null
    if (Array.isArray(props.data.description)) {
        desc = <ul>
            {props.data.description.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
    }
    else {
        desc = <div>
            {props.data.description}
        </div>
    }
    return (
        <div className="row mb-3">
            <div className="col-lg-2 d-none d-lg-block" style={{textAlign:"left"}}>{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
            <div className="col-lg-10" style={{textAlign:"justify"}}>
                <div className="h5 mb-0">{`${props.data.title}`}</div>
                <div className="fs-6">{`${props.data.institute}, ${props.data.location}`}</div>
                <div className="d-lg-none fw-light">{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
                <div className="mb-1" />
                {desc}
            </div>
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
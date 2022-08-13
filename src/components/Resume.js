import React from 'react';

const Resume = (props) => {
    var resume = props.data;
    return (
        <div className="row text-start gx-lg-5">
            <div className="col-lg-4" style={{ textAlign: "justify" }}>
                <div id="resume-about">
                    <h4>About</h4>
                    <Opening data={resume.opening} />
                </div>
                <div id="resume-skills">
                    <h4>Skills</h4>
                    {resume.skill.map((d, i) => <Skill data={d} key={i} />)}
                </div>
                <hr />
                <div id="resume-languages">
                    <h4>Languages</h4>
                    {resume.language.map((d, i) => <Skill data={d} key={i} />)}
                </div>
                <hr className="d-block d-lg-none" />
            </div>
            <div className="col-lg-8">
                <div id="resume-experience">
                    <h4>Experience</h4>
                    {resume.experience.map((d, i) => <Experience data={d} key={i} />)}
                </div>
                <hr />
                <div id="resume-education">
                    <h4>Education</h4>
                    {resume.education.map((d, i) => <Education data={d} key={i} />)}
                </div>
                <hr className="d-block d-lg-none" />
            </div>
        </div>
    );
}

const Opening = (props) => {
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

const Experience = (props) => {
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
        <div key={props.data.key} className="row mb-3">
            <div className="col-lg-2 d-none d-lg-block" style={{ textAlign: "left" }}>{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
            <div className="col-lg-10" style={{ textAlign: "justify" }}>
                <div className="h5 mb-0">{`${props.data.title}`}</div>
                <div className="fs-6">{`${props.data.company}, ${props.data.location}`}</div>
                <div className="d-lg-none fw-light">{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
                <div className="mb-1" />
                {desc}
            </div>
        </div>
    );
}

const Education = (props) => {
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
        <div key={props.data.key} className="row mb-3">
            <div className="col-lg-2 d-none d-lg-block" style={{ textAlign: "left" }}>{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
            <div className="col-lg-10" style={{ textAlign: "justify" }}>
                <div className="h5 mb-0">{`${props.data.title}`}</div>
                <div className="fs-6">{`${props.data.institute}, ${props.data.location}`}</div>
                <div className="d-lg-none fw-light">{`${props.data.dateStart} - ${props.data.dateEnd}`}</div>
                <div className="mb-1" />
                {desc}
            </div>
        </div>
    );
}

const Skill = (props) => {
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
                levelIcons.push(<i key={i} className="fa-solid fa-circle fa-xs" />);
            }
            else {
                levelIcons.push(<i key={i} className="fa-regular fa-circle fa-xs" />);
            }
            i++;
        }
        level = <div className="col-auto">
            {levelIcons}
        </div>
    }
    return (
        <div key={props.data.key} className="row justify-content-between">
            <div className="col-auto">{props.data.name}</div>
            {level}
        </div>
    );
}

export default Resume;
import styles from "./About.module.scss";

const Resume = ({ data }) => {
  const resume = data;
  return (
    <div className="row text-start gx-lg-5">
      <div className="text-center">
        <Opening data={resume.opening} />
      </div>
      <div className="col-lg-4 text-justify order-2 order-lg-1">
        <div id="skills">
          <h4>Skills</h4>
          {resume.skill.map((d, i) => <Skill data={d} key={i} />)}
        </div>
        <hr />
        <div id="languages">
          <h4>Languages</h4>
          {resume.language.map((d, i) => <Skill data={d} key={i} />)}
        </div>
        <hr className="d-block d-lg-none" />
      </div>
      <div className="col-lg-8 order-1 order-lg-2">
        <div id="experience">
          <h4>Experience</h4>
          {resume.experience.map((d, i) => <Experience data={d} key={i} />)}
        </div>
        <hr />
        <div id="education">
          <h4>Education</h4>
          {resume.education.map((d, i) => <Education data={d} key={i} />)}
        </div>
      </div>
    </div>
  );
};

const Opening = ({ data }) => {
  if (data === null || data === "") {
    return;
  }
  return (
    <>
      <div className={styles["opening"]}>
        {data}
      </div>
      <hr />
    </>
  );
};

const Experience = ({ data }) => {
  var desc = null;
  if (Array.isArray(data.description)) {
    desc = <ul>
      {data.description.map((d, i) => <li key={i}>{d}</li>)}
    </ul>;
  }
  else {
    desc = <div>
      {data.description}
    </div>;
  }
  return (
    <div key={data.key} className="row mb-3">
      <div className="col-lg-2 d-none d-lg-block text-left white-space-pre-line">
        {`${data.dateStart} -\n${data.dateEnd}`}
      </div>
      <div className="col-lg-10">
        <div className="h5 mb-1">{`${data.title}`}</div>
        <div className="mb-1 mb-lg-2 fs-6">{`${data.company}, ${data.location}`}</div>
        <div className="mb-2 d-lg-none fw-light">{`${data.dateStart} - ${data.dateEnd}`}</div>
        <div className="mb-1" />
        {desc}
      </div>
    </div>
  );
};

const Education = ({ data }) => {
  var desc = null;
  if (Array.isArray(data.description)) {
    desc = <ul>
      {data.description.map((d, i) => <li key={i}>{d}</li>)}
    </ul>;
  }
  else {
    desc = <div>
      {data.description}
    </div>;
  }
  return (
    <div key={data.key} className="row mb-3">
      <div className="col-lg-2 d-none d-lg-block text-left white-space-pre-line">
        {`${data.dateStart} -\n${data.dateEnd}`}
      </div>
      <div className="col-lg-10 text-justify">
        <div className="h5 mb-1">{`${data.title}`}</div>
        <div className="mb-1 mb-lg-2 fs-6">{`${data.institute}, ${data.location}`}</div>
        <div className="mb-2 d-lg-none fw-light">{`${data.dateStart} - ${data.dateEnd}`}</div>
        <div className="mb-1" />
        {desc}
      </div>
    </div>
  );
};

const Skill = ({ data }) => {
  var level = null;
  const maxLevel = 5;
  if (data.level === null || data.level === "") {
    level = null;
  }
  else {
    level = parseInt(data.level);
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
    </div>;
  }
  return (
    <div key={data.key} className="row justify-content-between">
      <div className="col-auto">{data.name}</div>
      {level}
    </div>
  );
};

export default Resume;
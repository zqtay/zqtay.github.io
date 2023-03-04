import IconButton from "../UI/IconButton/IconButton";
import SectionContainer from "../UI/SectionContainer/SectionContainer";
import Resume from "./Resume";

import styles from "./About.module.scss";

const About = (props) => {
  return (
    <SectionContainer id="about" className={styles["about-container"]}>
      <DownloadButton link={props.data.getLinks().resume} />
      <ProfileHeader data={props.data.getUser()} />
      <hr />
      <Resume data={props.data.getResume()} />
      <hr className="d-none d-lg-block" />
    </SectionContainer>
  );
};

const ProfileHeader = (props) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center">
      <div id="image-profile" className={`col-lg px-0 rounded-circle border border-4 border-white shadow-sm ${styles["user-image-container"]}`} >
        <div className={`rounded-circle ${styles["user-image"]}`}>
        </div>
      </div>
      <div className="col col-lg-auto ms-lg-4 text-center">
        <div id="user-name" className={`display-5 text-lg-start ${styles["user-name"]}`}>{`${props.data.lastName}, ${props.data.firstName}`}</div>
        <div id="user-title" className="display fs-2 fw-light text-lg-start">{props.data.title}</div>
      </div>
    </div>
  );
};

const DownloadButton = (props) => {
  if (props.link === null || props.link === "") {
    return null;
  }
  return (
    <div className="d-flex flex-column align-items-end w-100">
      <IconButton href={props.link} size="xl" icon="fa-solid fa-file-arrow-down" />
    </div>
  );
};

export default About;
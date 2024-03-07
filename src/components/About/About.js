import IconButton from "../UI/IconButton/IconButton";
import SectionContainer from "../UI/SectionContainer/SectionContainer";
import Resume from "./Resume";

import styles from "./About.module.scss";

const About = ({ data }) => {
  return (
    <SectionContainer id="about" className={styles["about-container"]}>
      <DownloadButton link={data.getLinks().resume} />
      <ProfileHeader data={data.getUser()} />
      <hr />
      <Resume data={data.getResume()} />
      <hr className="d-none d-lg-block" />
    </SectionContainer>
  );
};

const ProfileHeader = ({ data }) => {
  return (
    <div className="row row-cols-1 row-cols-lg-2 justify-content-center align-items-center">
      <div id="image-profile" className={`col-lg px-0 rounded-circle border border-4 border-white shadow-sm ${styles["user-image-container"]}`} >
        <div className={`rounded-circle ${styles["user-image"]}`}>
        </div>
      </div>
      <div className="col col-lg-auto ms-lg-4 text-center">
        <div id="user-name" className={`display-5 text-lg-start ${styles["user-name"]}`}>{`${data.lastName} ${data.firstName}`}</div>
        <div id="user-title" className="display fs-2 fw-light text-lg-start">{data.title}</div>
      </div>
    </div>
  );
};

const DownloadButton = ({ link }) => {
  if (link === null || link === "") {
    return null;
  }
  return (
    <div className="d-flex flex-column align-items-end w-100">
      <IconButton href={link} size="xl" icon="fa-solid fa-file-arrow-down" />
    </div>
  );
};

export default About;

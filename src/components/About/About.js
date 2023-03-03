import Container from 'react-bootstrap/Container';

import IconButton from "../UI/IconButton/IconButton";
import Resume from "./Resume";
import useUserData from "../../hooks/useUserData";

import styles from "./About.module.scss";

const About = (props) => {
  const data = useUserData();
  return (
    <>
      <Banner data={data.getHome()} />
      <Container style={{ marginTop: "-25vh" }}>
        <div id="content-panel" className={`shadow p-3 p-lg-4 mb-5 bg-body rounded ${styles["content-panel"]}`}>
          <DownloadButton link={data.getLinks().resume} />
          <ProfileHeader data={data.getUser()} />
          <hr />
          <Resume data={data.getResume()} />
          <hr className="d-none d-lg-block" />
        </div>
      </Container>
    </>
  );
};

const Banner = (props) => {
  return (
    <Container id="banner" fluid className={styles["banner-container"]}>
      <div className={`row align-items-center ${styles["banner"]}`}>
        <div className={`col-10 mx-auto text-center ${styles["banner-text-container"]}`} >
          <div id="banner-title" className="display-5">{props.data.headerTitle}</div>
          <p id="banner-subtitle" className="lead">{props.data.headerSubtitle}</p>
        </div>
      </div>
    </Container>
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
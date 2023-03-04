import Container from 'react-bootstrap/Container';

import styles from "./Hero.module.scss";

const Hero = (props) => {
  return (
    <Container id="hero" fluid className={styles["hero-container"]}>
      <div className={`row align-items-center ${styles["hero"]}`}>
        <div className={`col-10 mx-auto text-center ${styles["hero-text-container"]}`} >
          <div id="hero-title" className="display-5">{props.data.headerTitle}</div>
          <p id="hero-subtitle" className="lead">{props.data.headerSubtitle}</p>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
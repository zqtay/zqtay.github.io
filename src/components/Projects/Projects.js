import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from "../UI/Card/Card";

import useUserData from "../../hooks/useUserData";

import styles from "./Projects.module.scss";

const Projects = (props) => {
  const projects = useUserData().getProjects();
  return (
    <Container>
      <div id="content-panel" className={`shadow p-3 mt-3 mb-5 bg-body rounded ${styles["content-panel"]}`}>
        <div className="display-5" align="center">Projects</div>
        <hr />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          {projects.map((d, i) => <Card data={d} key={i} />)}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
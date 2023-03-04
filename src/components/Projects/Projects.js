import React from 'react';
import Card from "../UI/Card/Card";
import SectionContainer from "../UI/SectionContainer/SectionContainer";

const Projects = (props) => {
  const projects = props.data;
  return (
    <SectionContainer id="projects">
      <div className="display-5" align="center">Projects</div>
      <hr />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {projects.map((d, i) => <Card data={d} key={i} />)}
      </div>
    </SectionContainer>
  );
};

export default Projects;
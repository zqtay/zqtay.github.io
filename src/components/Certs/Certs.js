import React from 'react';
import SectionContainer from "../UI/SectionContainer/SectionContainer";

const Certs = (props) => {
  const certs = props.data;
  return (
    <SectionContainer id="certs">
      <div className="display-5" align="center">Certifications</div>
      <hr />
      {certs.map((d, i) => <Cert data={d} key={i} />)}
    </SectionContainer>
  );
};

const Cert = (props) => {
  var desc = null;
  if (Array.isArray(props.data.description)) {
    desc = <ul>
      {props.data.description.map((d, i) => <li key={i}>{d}</li>)}
    </ul>;
  }
  else {
    desc = <div>
      {props.data.description}
    </div>;
  }
  return (
    <div key={props.data.key} className="row mb-3">
      <div className="col-lg-12">
        <div className="h5 mb-0"><a href={props.data.link}>{`${props.data.title}`}</a></div>
        <div className="fs-6">{`${props.data.issuer}`}</div>
        <div className="fw-light">{`${props.data.dateAttained}`}</div>
        <div className="mb-1" />
        {desc}
      </div>
    </div>
  );
};

export default Certs;
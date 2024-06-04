import React from 'react';
import SectionContainer from "../UI/SectionContainer/SectionContainer";

const Certs = (props) => {
  const certs = props.data;
  return (
    <SectionContainer id="certs">
      <div className="display-5" align="center">Certifications</div>
      <hr />
      <div className='row row-cols-1 row-cols-lg-2'>
        {certs.map((d, i) => <Cert data={d} key={i} />)}
      </div>
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
      <div className="h5 mb-1"><a href={props.data.link}>{`${props.data.title}`}</a></div>
      <div className="fs-6">{`${props.data.issuer}`}</div>
      <div className="fw-light mb-1">{`${props.data.dateAttained}`}</div>
      {desc}
    </div>
  );
};

export default Certs;
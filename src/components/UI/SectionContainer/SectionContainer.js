import Container from 'react-bootstrap/Container';
import styles from './SectionContainer.module.scss';

const SectionContainer = (props) => {
  return (
    <Container id={props.id} className={props.className}>
      <div className={`p-3 mt-5 mb-5 bg-body rounded ${styles["section-container"]}`}>
        {props.children}
      </div>
    </Container>
  );
};

export default SectionContainer;
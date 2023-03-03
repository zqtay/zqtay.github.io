import styles from "./Card.module.scss";

const Card = (props) => {
  let image = null;
  if (!props.data.imageLink || props.data.imageLink === "/") {
    image = <PlaceholderImage width="100%" height="150px" text={props.data.title} />;
  }
  else {
    image = <img alt={props.data.title} src={props.data.imageLink} className={`card-img-top ${styles["card-image"]}`} />;
  }
  return (
    <div key={props.data.key} className="col mb-3">
      <a href={props.data.link} className={`card ${styles["card"]}`}>
        {image}
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className={`card-text ${styles["card-text"]}`}>{props.data.description}</p>
        </div>
      </a>
    </div>
  );
};

const PlaceholderImage = (props) => {
  return (
    <div width={props.width} height={props.height} className={`card-img-top ${styles["card-image-placeholder"]}`}>
      <span>{props.text}</span>
    </div>
  );
};

export default Card;



import styles from "./Card.module.scss";

const Card = ({ data }) => {
  let image = null;
  if (!data.imageLink || data.imageLink === "/") {
    image = <PlaceholderImage width="100%" height="150px" text={data.title} />;
  }
  else {
    image = <img alt={data.title} src={data.imageLink} className={`card-img-top ${styles["card-image"]}`} />;
  }
  return (
    <div key={data.key} className="col mb-3">
      <a href={data.link} className={`card ${styles["card"]}`}>
        {image}
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className={`card-text ${styles["card-text"]}`}>{data.description}</p>
        </div>
      </a>
    </div>
  );
};

const PlaceholderImage = ({ width, height, text }) => {
  return (
    <div width={width} height={height} className={`card-img-top ${styles["card-image-placeholder"]}`}>
      <span>{text}</span>
    </div>
  );
};

export default Card;



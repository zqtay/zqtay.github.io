const IconButton = (props) => {
  if (!props.size) props.size = "lg";
  return (
    <a href={props.href}>
      <span className={`fa-stack fa-${props.size}`}>
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className={`fa ${props.icon} fa-stack-1x fa-inverse`}></i>
      </span>
    </a>
  );
};

export default IconButton;
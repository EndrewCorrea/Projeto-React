export const ServiceDisplay = ({
  img,
  title,
  description,
  secondDescription,
  subTitle
}) => {
  return (
    <div className="serviços">
      <div className="service">
        <img src={img} />
        <div className="txt-serviço">
          <div className="title-box"> {title} </div>
          <div className="txt-box"> {description}</div>
        </div>
      </div>
      <div className="txt-box2"> {secondDescription}</div>
      <div className="subTitle"> {subTitle}</div>
    </div>
  );
};

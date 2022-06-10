export const ServiceDisplayResume = ({ img, title, description }) => {
  return (
    <div className="serviços">
      <div className="service-resume">
        <img src={img} />
        <div className="txt-serviço-resume">
          <div className="title-box-resume"> {title} </div>
          <div className="txt-box-resume"> {description}</div>
        </div>
      </div>
    </div>
  );
};

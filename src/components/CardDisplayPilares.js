export const CardDisplayPilares = ({ img, title, description }) => {
  return (
    <div className="pilares">
      <div className="icon">
        <div className="icon-border">
          <div id="maincircle">
            <img src={img} />
          </div>
        </div>
        <div className="title-box-pilares"> {title} </div>
        <div className="txt-box-pilares"> {description}</div>
      </div>
    </div>
  );
};

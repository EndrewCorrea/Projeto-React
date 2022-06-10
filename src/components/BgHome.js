export const BgHome = ({ img, title, subtilte }) => {
  return (
    <div className="img-fundo">
      <img src={img} />
      <h1 className="txt1">{title}</h1>
      <h1 className="txt2">{subtilte}</h1>
    </div>
  );
};

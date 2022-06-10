export const Rodape = ({ img, text }) => {
  return (
    <div className="rodape">
      <img src={img} />
      <div>{text}</div>
    </div>
  );
};

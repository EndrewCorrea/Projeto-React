export const File = ({ text }) => {
  return (
    <div>
      <div className="txt-file">{text}</div>
      <input type="file" />
    </div>
  );
};

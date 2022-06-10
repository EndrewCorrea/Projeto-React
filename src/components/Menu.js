export const Menu = ({ img, title }) => {
  return (
    <div className="wrap-menu">
      <form className="menu-form">
        <span className="menu-form-logo">
          <img src={img} />
        </span>

        <span className="menu-form-title">{title}</span>
        <div className="menu-container-button">
          <a className="menu-buttons" href="/Home">
            Inicio
          </a>
          <a className="menu-buttons" href="/ServicePage">
            Serviços{" "}
          </a>
          <a className="menu-buttons" href="/Curriculo">
            {" "}
            Trabalhe conosco
          </a>
          <div className="bg-empresa">
            <a className="menu-buttons" href="/Empresas">
              {" "}
              Abra sua empresa
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

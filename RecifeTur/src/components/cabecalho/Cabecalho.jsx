// CSS
import "./Estilo.css";

// Imagens
import Logo from "../../assets/img/recifeTur.png";
import User from "../../assets/img/User.png";

const Cabecalho = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo da RecifeTur" id="logo" />
        <nav>
          <a href="#" className="menu-navegacao">Sobre</a>
          <a href="#" className="menu-navegacao">Contato</a>
          <a href="#" className="menu-navegacao">Eventos</a>
          <div>
            <div className="div-login-cadastro">
              <img src={User} alt="Ícone do login/cadastro" id="icone-login-cadastro" />
            </div>
            <a href="#">Login ou Cadastro</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Cabecalho;

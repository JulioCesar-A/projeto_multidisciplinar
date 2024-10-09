// CSS
import "./Estilo.css";
import { Link } from "react-scroll";

// Imagens
import Logo from "../../assets/img/recifeTur.png";
import User from "../../assets/img/User.png";

const Cabecalho = () => {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo da RecifeTur" id="logo" />
        <nav>
          <Link to="div-secao-sobre" smooth={true} duration={500} className="menu-navegacao">
            Sobre
          </Link>
          <Link to="div-rodape" smooth={true} duration={600} className="menu-navegacao">
            Contato
          </Link>
          <Link to="div-rodape" smooth={true} duration={600} className="menu-navegacao">
            Eventos
          </Link>
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

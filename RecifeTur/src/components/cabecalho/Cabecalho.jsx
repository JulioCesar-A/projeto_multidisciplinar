// CSS
import "./Estilo.css";
import { Link } from "react-scroll";
import { Link as Linksrc } from "react-router-dom";

// Imagens
import Logo from "../../assets/img/recifeTur.png";
import LoginCadastro from "../login_cadastro/LoginCadastro";

const Cabecalho = () => {
  return (
    <>
      <header>
      <Linksrc to="/">
          <img src={Logo} alt="Logo da RecifeTur" id="logo" />
        </Linksrc>
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
          <div className="div-login-cadastro">
            <Link to="/login-ou-cadastro">
              <LoginCadastro />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Cabecalho;

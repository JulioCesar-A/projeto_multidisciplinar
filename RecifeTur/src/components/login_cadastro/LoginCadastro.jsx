import "./Estilo.css";
import User from "../../assets/img/User.png";
import { Link } from "react-router-dom";


const LoginCadastro = () => {
  return (
    <>
      <div className="div-login-cadastro">
        <img src={User} alt="Ícone do login/cadastro" id="icone-login-cadastro" />

        <Link to="/login-ou-cadastro">Login ou Cadastro</Link>
      </div>
    </>
  );
};

export default LoginCadastro;
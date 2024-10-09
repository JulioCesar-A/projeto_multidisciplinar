import "./Estilo.css";

function Formulario() {
  return (
    <>
    <div className="form-container">
      <form className="form-login">
        <h2>Entrar na conta</h2>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <div className="div-form-botao">
          <button type="submit">Entrar</button>
        </div>
      </form>

      <form className="form-cadastro">
        <div className="div-form">
          <h2>Cadastre-se aqui</h2>
          <input type="text" placeholder="Nome completo" />
          <input type="cpf" placeholder="CPF" />
          <input type="email" placeholder="E-mail" />
          <input type="number" placeholder="Telefone" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirma senha" />
        </div>

        <div className="div-aceita-termos">
          <input type="checkbox" name="" id="check" />
          <label htmlFor="check">
            Eu aceito os <strong>Termos e Condições</strong>
          </label>
        </div>

        <div className="div-form-botao">
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      </div>
    </>
  );
}

export default Formulario;

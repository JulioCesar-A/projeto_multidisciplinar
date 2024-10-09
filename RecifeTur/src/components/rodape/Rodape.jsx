import "./Estilo.css";
import Logo from "../../assets/img/recifeTur.png";

function Rodape() {
  return (
    <>
      <footer>
        <div className="div-rodape" id="div-rodape">
          <div className="div-rodape-contato">
            <p>CONTATO</p>

            <a href="">Fale Conosco</a>
            <a href="mailto:">Mandar um e-mail</a>
            <a href="">Enviar feedback</a>
          </div>

          <div className="div-rodape-evento">
            <p>EVENTOS</p>

            <a href="">Cronograma de eventos</a>
            <a href="">Prévias de Carnaval</a>
            <a href="">Anunciar um evento</a>
          </div>

          <div className="div-rodape-img">
            <img src={Logo} />
          </div>
        </div>

        <div className="div-copyright">
          <span>© RecifeTur 2024 Todos os direitos reservados</span>
        </div>
      </footer>
    </>
  );
}

export default Rodape;

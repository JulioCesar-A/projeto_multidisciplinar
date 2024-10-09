import "./Estilo.css";
import ImagemDaSecaoInicial from "../../assets/img/maracatu.png";

function SecaoInicial() {
  return (
    <div className="div-container">
      <div>
        <img src={ImagemDaSecaoInicial} alt="Imagem da Seção Inicial" />
      </div>

      <div className="div-textos">
        <h1>Confira o cronograma das prévias do Carnaval 2025!</h1>
        <h2>Acompanhe as primeiras prévias do Carnaval de Recife, que acontecerão a partir de novembro.</h2>
        <h3>Não fique de fora, participe!</h3>

        <div className="div-botao">
            <button>Ver o cronograma</button>
        </div>
      </div>
    </div>
  );
}

export default SecaoInicial;

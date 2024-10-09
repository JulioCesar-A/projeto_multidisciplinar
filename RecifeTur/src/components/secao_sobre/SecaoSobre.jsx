import "./Estilo.css";
import Logo from "../../assets/img/recifeTur.png";

function SecaoSobre() {
  return (
    <>
      <div className="div-secao-sobre" id="div-secao-sobre">
        <div className="div-imagem">
          <img src={Logo} alt="Logo do RecifeTur" />
        </div>

        <p>
          RecifeTur é um programa de incentivo à cultura do Recife, promovendo conhecimento através de gamificação. Assim, quem mora em Recife ou os
          turistas que visitarem a cidade poderão saber informações sobre os principais pontos da cidades, bares, restaurantes, áreas de lazer e ainda
          ganharão pontos que serão trocados por benefícios.
        </p>
      </div>
    </>
  );
}

export default SecaoSobre;

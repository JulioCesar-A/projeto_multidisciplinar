

// Componentes
import Cabecalho from "./components/cabecalho/Cabecalho.jsx";
import SecaoInicial from "./components/secao_inicial/SecaoInicial.jsx";
import SecaoSobre from "./components/secao_sobre/SecaoSobre.jsx";
import SecaoComoFunciona from "./components/secao_como_funciona/SecaoComoFunciona.jsx";
import SecaoCadastrarLocal from "./components/secao_cadastrar_local/SecaoCadastrarLocal.jsx";
import Rodape from "./components/rodape/Rodape.jsx";

import "./App.css";

function App() {
  return (
    <>
        <Cabecalho />
          <SecaoInicial></SecaoInicial>
          <SecaoSobre></SecaoSobre>
          <SecaoComoFunciona></SecaoComoFunciona>
          <SecaoCadastrarLocal></SecaoCadastrarLocal>
        <Rodape />
    </>
  );
}

export default App;

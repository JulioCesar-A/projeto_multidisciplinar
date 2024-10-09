import SecaoInicial from "../../components/secao_inicial/SecaoInicial.jsx";
import SecaoSobre from "../../components/secao_sobre/SecaoSobre.jsx";
import SecaoComoFunciona from "../../components/secao_como_funciona/SecaoComoFunciona.jsx";
import SecaoCadastrarLocal from "../../components/secao_cadastrar_local/SecaoCadastrarLocal.jsx";

const Home = () => {
  return (
  <>
    <SecaoInicial />
    <SecaoSobre />
    <SecaoComoFunciona />
    <SecaoCadastrarLocal />

  </>
  );
};

export default Home;

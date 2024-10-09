// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";

// CSS
import "./App.css";

// Componentes
import Cabecalho from "./components/cabecalho/Cabecalho.jsx";

import Rodape from "./components/rodape/Rodape.jsx";
import Formulario from "./pages/formulario/Formulario.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login-ou-cadastro" element={<Formulario />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;

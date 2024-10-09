import "./Estilo.css";

function SecaoComoFunciona () {
    return (
        <div className="div-como-funciona">
            <h2>Como Funciona?</h2>

            <div>
                <p className="texto">Usuários do RecifeTur baixam o app e criam um cadastro</p>
                <p className="seta">➡️</p>
                <p className="texto">Ao permitir a localização e visitar um local, receberão um questionário sobre o local</p>
                <p className="seta">➡️</p>
                <p className="texto">Respondendo certo, ganharão pontos que poderão trocar por descontos, etc.</p>
            </div>
        </div>
    )
}

export default SecaoComoFunciona;
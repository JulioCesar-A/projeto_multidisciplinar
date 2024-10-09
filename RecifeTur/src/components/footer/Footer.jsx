import "./Footer.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="content__footer">
                    <div className="content__footer__subdiv content__footer__contact">
                        
                        <p className="footer__title footer__contact__title">CONTATO</p>

                        <a href="">Fale Conosco</a>
                        <a href="mailto:">Mandar um e-mail</a>
                        <a href="">Enviar feedback</a>

                    </div>

                    <div className="content__footer__subdiv content__footer__events">

                        <p className="footer__title footer__events__title">EVENTOS</p>

                        <a href="">Cronograma de eventos</a>
                        <a href="">Prévias de Carnaval</a>
                        <a href="">Anunciar um evento</a>

                    </div>

                    {/* Logo do RecifeTur aqui */}

                </div>

                <div className="content__footer__copyright">

                    <span className="copyright__text">© RecifeTur 2024 Todos os direitos reservados</span>

                </div>
            </footer>
        </>
    )
}

export default Footer
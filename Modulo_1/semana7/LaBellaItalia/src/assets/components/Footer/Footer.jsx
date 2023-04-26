export function Footer(){
    return(
        <footer>
            <div id="barra">  </div>
            <section className="container-section">
                <h1>Contatos</h1>
                    <div>
                        <div id="container-infos">
                            <img src="./public/footer/o-email.png" alt="Email" />
                            <p>labellaitalia@gmail.com</p>
                        </div>
                    </div>

                    <div id="container-infos">
                        <div>
                            <img src="./public/footer/facebook.png" alt="Facebook" />
                        </div>
                        <p>LabellaItalia</p>
                    </div>

                    <div id="container-infos">
                        <div>
                            <img src="./public/footer/instagram (1).png" alt="Instagram" />
                        </div>
                        <p>la_bella_italia</p>
                    </div>
            </section>

            <section className="container-section">
                <h1>Endereço</h1>
                <p>Rua Ademir Villa Lobos, n° 145 - Palhoça </p>
            </section>

            <section className="container-section">
                <h1>Horário de Funcionamento</h1>
                <p>Segunda a sexta-feira - 12h às 16h | 19h às 23h</p>
                <p>Sábado - Domingo - 12 às 22h</p>
            </section>
        </footer>
    )
}
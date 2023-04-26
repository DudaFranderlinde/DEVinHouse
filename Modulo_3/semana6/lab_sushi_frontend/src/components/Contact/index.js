import './contact.css'

export function Contact() {
    return(
        <section className="sectionContact">
            <h1>Fale conosco</h1>
            <h2>Informações de contato</h2>
            <div className="divInfo">
                <div className="containerInfo">
                    <div><img  src='../../assets/imgs/email.png' alt='email'/></div>
                    <div>
                        <h4>E-mail</h4>
                        <p>faleconosco@clubebem.com</p>
                    </div>
                </div>
                <div className="containerInfo">
                    <div><img src="../../assets/imgs/phone.png" alt='phone' /></div>
                    <div>
                        <h4>Telefone</h4>
                        <p>(45) 3333-4444</p>
                    </div>
                </div>
                <div className="containerInfo">
                    <div>
                        <img src="../../src/assets/imgs/zap" alt='whatsApp'/>
                    </div>
                    <div>
                        <h4>WhatsApp</h4>
                        <p>(48) 9564-6325</p>
                    </div>
                </div>
                <div className="containerInfo">
                    <div><img src="../../src/assets/imgs/zap.png" alt='atendimento'/></div>
                    <div>
                        <h4>Horário de Atendimento</h4>
                        <p>Seg. a Sex. - 8:00 ás 18:00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
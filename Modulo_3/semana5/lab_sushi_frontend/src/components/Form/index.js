import  './form.css'

export function Form() {
    return(
        <form className="form">
            <div className='divMargin'>
                <h3>Envie sua mensagem para nós</h3>
                <div>
                    <label>Name</label>
                    <input className='inputForm' />
                </div>
                <div>
                    <label>E-mail</label>
                    <input className='inputForm' />
                </div>
                <div>
                    <label>Telefone (opcional)</label>
                    <input className='inputForm' />
                </div>
                <div>
                    <label>Sua mensagem</label>
                    <textarea className='inputForm'  />
                </div>
                <button>Enviar Mensagem</button>
            </div>
        </form>
    )
}
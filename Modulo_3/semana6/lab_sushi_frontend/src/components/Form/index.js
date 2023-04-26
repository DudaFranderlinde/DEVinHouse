import  './form.css'
import api from "../../services/api";
import { useForm } from "react-hook-form";


export function Form() {
    const {register, handleSubmit} = useForm()
    const onSubmit = ({ nome, email, telefone, mensagem }) => {
        api.post('/contactUs', {
            name: nome,
            email: email,
            phone: telefone,
            message: mensagem,
        }).then((response) => {
            if(response.status = 201){
                alert('Mensagem enviada com sucesso!')
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className='divMargin'>
                <h3>Envie sua mensagem para nós</h3>
                <div>
                    <label>Name</label>
                    <input className='inputForm' {...register('nome')} required />
                </div>
                <div>
                    <label>E-mail</label>
                    <input className='inputForm'  {...register('email')} required />
                </div>
                <div>
                    <label>Telefone (opcional)</label>
                    <input className='inputForm' {...register('telefone')} required />
                </div>
                <div>
                    <label>Sua mensagem</label>
                    <textarea className='inputForm'  {...register('mensagem')} required />
                </div>
                <button type='submit'>Enviar Mensagem</button>
            </div>
        </form>
    )
}
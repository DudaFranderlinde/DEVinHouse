import style from './TipCard.module.css'
export const TipCard = ({titulo, descricao, categoria, linguagem, video})=>{
    return(
        <section className={style.sectionCard}>
            
            <h1>{titulo}</h1>
            <ul>
                <li>Linguagem: {linguagem} </li>
                <li>Categoria: {categoria} </li>
                <li><p>{descricao}</p></li>
            </ul>
            <div className={style.divImg}>
                <button className={style.buttonCard}>
                    <a href={video}>
                    <img src="src/assets/img/video.png" alt="Vídeo" />
                    </a>
                </button>
                <button className={style.buttonCard}>
                    <img src="src/assets/img/delete.png" alt="Deletar" />
                </button>
                <button className={style.buttonCard}>
                    <img src="src/assets/img/edit.png" alt="Editar" />
                </button>
            </div>
        
        </section>
    )
}
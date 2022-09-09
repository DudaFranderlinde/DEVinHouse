
export const TipCard = (titulo, descricao, categoria, linguagem, video)=>{
    return(
        <>
            
            <h1></h1>
            <ul>
                <li>Linguagem: {linguagem} </li>
                <li>Categoria: {categoria} </li>
                <li><p>{descricao}</p></li>
            </ul>
            <div>
                <button>
                    <img src="" alt="Vídeo" />
                </button>
                <button>
                    <img src="" alt="Deletar" />
                </button>
                <button>
                    <img src="" alt="Editar" />
                </button>
            </div>
        
        </>
    )
}
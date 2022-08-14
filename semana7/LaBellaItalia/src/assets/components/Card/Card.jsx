import PropTypes from 'prop-types';



export function Card(){
    const produto = {
        img: "./public/cardapio/torta.jpg",
        titulo: "Torta de Brigadeiro",
        descricao: "Bolo de chocolate recheado de brigadeiro com calda de brigadeiro quente",
        preco: " 39,00",
        preparo: "30 minutos"
    }
    return(
        <section className="container-card">
            <div className="container-img-card">
                <img src={produto.img} alt="FOto" />
            </div>
            <div>
                <h2>{produto.titulo}</h2>
                <p><strong>Descrição: </strong>  {produto.descricao}</p>
                <p><strong>Preço: </strong> R$:{produto.preco}</p>
                <p><strong>Tempo de preparo: </strong>{produto.preparo}</p>
            </div>
            
        </section>
    );

   
}
Card.propTypes ={
    produto: PropTypes.shape({
        img: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        preco: PropTypes.string.isRequired,
        preparo: PropTypes.string.isRequired,
    })
}

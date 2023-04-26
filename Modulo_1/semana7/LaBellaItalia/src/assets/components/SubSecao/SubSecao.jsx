import { PropTypes } from "prop-types";
import { ListaCard } from "../ListaCard/ListaCard";

export function SubSecao({produtos, nameSub}){
    const filtro = produtos.filter((produto)=> (produto.subcategoria === nameSub))
    {console.log(filtro)}
    return (
        <div>
            <div>
                <h3>{nameSub}</h3>
                <hr />
            </div>

            <ListaCard produtos={filtro}/>            
        </div>
    )
}

SubSecao.propTypes = {
    produtos: PropTypes.array.isRequired,
    nameSub: PropTypes.string,
}
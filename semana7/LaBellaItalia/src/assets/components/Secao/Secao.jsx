import { ListaCard } from "../ListaCard/ListaCard.jsx"
import { PropTypes} from 'prop-types';

export function Secao({nameSection, produto}){

    return(
        <div>
             <div className="secao">
                <h2>{nameSection}</h2>
                <hr />
            </div>
            <div className="container-secao">
                <ListaCard produtos={produto}/>            
            </div>
        </div>
        
        
    )
}

Secao.propTypes = {
    nameSection: PropTypes.string.isRequired,
    produto: PropTypes.array.isRequired,
}
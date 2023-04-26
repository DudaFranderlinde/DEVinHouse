import { ListaCard } from "../ListaCard/ListaCard.jsx"
import { PropTypes} from 'prop-types';
import { SubSecao } from "../SubSecao/SubSecao.jsx";

export function Secao({nameSection, produto, nameSub}){
    return(
        <div>
             <div className="secao">
                <h2>{nameSection}</h2>
                <hr />
            </div>
            <div className="container-secao">
                {nameSub?.length > 0 ? (nameSub.map((sub, index) => <SubSecao key={index} produtos={produto} nameSub={sub} />)) : (<ListaCard produtos={produto} />)}
     
            </div>
        </div>
        
        
    )
}

Secao.propTypes = {
    nameSection: PropTypes.string.isRequired,
    produto: PropTypes.array.isRequired,
}
import { Card } from "../Card/Card";
import { PropTypes} from 'prop-types';

export function ListaCard({produtos}){
    return (
    <ul>
        {produtos.map((element)=> (
            <li key={element.id}>
                <Card produto={element}/>
                {console.log(element.titulo)}
            </li>
        ))}
        
    </ul>
    )
}

ListaCard.propTypes = {
    produtos: PropTypes.array.isRequired,
}
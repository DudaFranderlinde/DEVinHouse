import PropTypes from 'prop-types'

export const FiltroSecao = ({ secoes, onSelecionarSecao}) => {

    return (
        <div>
            <ul>
                <li>
                    <button onClick={()=>onSelecionarSecao()}>{secoes}</button>
                </li>
            </ul>
        </div>
    )
};

FiltroSecao.propTypes = {
    secoes: PropTypes.array,
    onSelecionarSecao: PropTypes.func,
};
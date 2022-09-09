import PropTypes from 'prop-types';

export const CardList = ({ children })=>{
    return (
        <div className="estilos-da-lista">
            {children}
        </div>
    )
}

CardList.propTypes = {
    children: PropTypes.elementType,
}
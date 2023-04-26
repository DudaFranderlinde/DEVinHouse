import PropTypes from 'prop-types'
import style from './SummaryCard.module.css'
export const SummaryCard = ({title, count})=>{
    const array = [{titulo: "Total", val: 1},{titulo: "Back", val: 3},{titulo: "Front", val: 3},{titulo: "Full", val: 7}, {titulo: "Skill", val: 1}]
    return(
                <div className={style.cardsuperior}>
                    <h3>{title}</h3>
                    <p>{count}</p>
                </div>
       
    )
}

SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}
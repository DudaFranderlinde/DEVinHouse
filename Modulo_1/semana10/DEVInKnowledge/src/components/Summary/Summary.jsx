import { SummaryCard } from '../SummaryCard/SummaryCard'
import PropTypes from 'prop-types'
import style from './Summary.module.css'
export const Summary = ()=> {
    return (
        <header className={style.header}>
           
                <SummaryCard title={"Total"} count={7} />
                <SummaryCard title={"FrontEnd"} count={7} />
                <SummaryCard title={"BackEnd"} count={7} />
                <SummaryCard title={"FullStack"} count={7} />
                <SummaryCard title={"SoftSkill"} count={7} />

        </header>
    )
}


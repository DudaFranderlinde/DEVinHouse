import { Filter } from '../Filter/Filter';
import { Summary } from '../Summary/Summary'
import style from './MainContent.module.css'
export const MainContent = () => {
    const arrayL= [{titulo: "Total", val: 1},{titulo: "Back", val: 3},{titulo: "Front", val: 3},{titulo: "Full", val: 7}, {titulo: "Skill", val: 1}];

    return (
        <div className={style.main} >
            <main className={style.main} >
                <Summary />

               <Filter/>
                <div id="agrupaCard">
                    
                </div>
                        
            </main>
        </div>
    )
}
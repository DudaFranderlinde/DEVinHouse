import { Summary } from '../Summary/Summary'
import style from './MainContent.module.css'
export const MainContent = () => {
    const arrayL= [{titulo: "Total", val: 1},{titulo: "Back", val: 3},{titulo: "Front", val: 3},{titulo: "Full", val: 7}, {titulo: "Skill", val: 1}];

    return (
        <div className={style.main} >
            <main className={style.main} >
                <Summary />

                <div id="conatinerbarrapesquisa" className={style.conatinerbarrapesquisa}>
                    <div id="div-busca">
                        <img src="src/assets/img/lupa.png" id="btnBusca" className={style.btnBusca}/>
                    </div>
                    <input type="text" id="textBusca" placeholder="Busque por um título"/>
                    <div id="divbusca">
                        <img src="src/assets/img/limpa.png" id="btnLimpaBarra" className={style.btnLimpaBarra}/>
                    </div>
                </div>
                <div id="agrupaCard">
                    
                </div>
                        
            </main>
        </div>
    )
}
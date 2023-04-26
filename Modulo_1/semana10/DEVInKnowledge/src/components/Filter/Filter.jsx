import style from './Filter.module.css'

export const Filter = ()=> {
    return(
        <div id="conatinerbarrapesquisa" className={style.conatinerbarrapesquisa}>
            <div id="div-busca">
                <img src="src/assets/img/lupa.png" id="btnBusca" className={style.btnBusca}/>
            </div>
            <input type="text" id="textBusca" placeholder="Busque por um título"/>
            <div id="divbusca">
                <img src="src/assets/img/limpa.png" id="btnLimpaBarra" className={style.btnLimpaBarra}/>
            </div>
        </div>
    )
}
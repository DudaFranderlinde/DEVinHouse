import style from './MainContent.module.css'
export const MainContent = () => {
    return (
        <div className={style.main} >
            <main className={style.main} >
                <header>
                    <div className={style.cardsuperior}>
                        <h3>Total</h3>
                        <p id="total"></p>
                    </div>
            
                    <div className={style.cardsuperior}>
                        <h3>FrontEnd</h3>
                        <p id="front"></p>
                    </div>
                    
                    <div className={style.cardsuperior}>
                        <h3>BackEnd</h3>
                        <p id="back"></p>
                    </div>
            
                    <div className={style.cardsuperior}>
                        <h3>FullStack</h3>
                        <p id="full"></p>
                    </div>
            
                    <div className={style.cardsuperior}>
                        <h3>SoftSkill</h3>
                        <p id="soft"></p>
                    </div>
            
                </header>

                <div id="conatiner-barra-pesquisa" className={style.conatinerbarrapesquisa}>
                    <div id="div-busca">
                        <img src="src/assets/img/lupa.png" id="btnBusca" className={style.btnBusca}/>
                    </div>
                    <input type="text" id="textBusca" placeholder="Busque por um título"/>
                    <div id="div-busca">
                        <img src="src/assets/img/limpa.png" id="btnLimpaBarra" className={style.btnLimpaBarra}/>
                    </div>
                </div>
                <div id="agrupaCard">
                    
                </div>
                        
            </main>
        </div>
    )
}
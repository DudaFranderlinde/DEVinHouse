import style from './Sidebar.module.css'
export const Sidebar = ()=> {
    return (
        <aside>
            <div id="contanier-logo" className={style.contanierlogo}>
                <div id="img" className={style.img}> 
                    <img src="src/assets/img/Logo.png" alt="Logo"/>
                </div>

                <div id="container-titulo" className={style.containertitulo}>
                    <div id="nome" className={style.nome}>
                        <h1 id="dev" className={style.dev}>DEV</h1>
                        <h1 id="h1" className={style.h1}>inKnowledge</h1>
                    </div>
                    <div>
                        <h4 id="frase" className={style.frase}>Learn, Code and Save</h4>
                    </div>
                </div>
            </div>

            <form id="form">
                <div id="form-container" className={style.formcontainer}>
                    <div>
                        <input type="text"  id="identificador" hidden/>
                    </div>
                    
                    <div>
                        <label htmlFor="titulo">Título</label>
                        <br/>
                        <input placeholder="Digite um título" type="text" minLength={8} maxLength="64" id="titulo"/>    
                    </div>

                    <div>
                        <label htmlFor="skill">Linguagem/Skill</label>
                        <br/>
                        <input placeholder="Digite o nome de uma linguagem ou skill" type="text" minLength="4" maxLength="16"  id="skill"/>
                    </div> 
                    
                    <div>
                        <label htmlFor="categoria">Categoria</label>
                        <br/>
                        <select  id="categoria">
                            <option value="">Selecione uma opção</option>
                            <option value="1">FrontEnd</option>
                            <option value="2">BanckEnd</option>
                            <option value="3">FullStack</option>
                            <option value="4">SoftSkill</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <br/>
                        <textarea placeholder="Descrição" id="descricao" minLength="32" maxLength="512" cols="30" rows="10"></textarea>
                    </div>

                    <div>
                        <label htmlFor="youtube">Vídeo do Youtube:</label>
                        <br/>
                        <input placeholder="Link do vídeo" type="url" id="youtube"/>
                    </div>
            
                    <div id="div-button" className={style.divbutton}>
                        <button id="limpa">LIMPAR</button>
                        <button id="salva" type="submit">SALVAR</button>
                    </div>

                </div>
            </form>
        </aside>
    )
}
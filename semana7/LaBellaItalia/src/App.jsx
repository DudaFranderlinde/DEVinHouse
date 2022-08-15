import './App.css'
import { Footer } from './assets/components/Footer/Footer.jsx'
import {Nav} from './assets/components/Nav/Nav.jsx'
import { Secao } from './assets/components/Secao/Secao.jsx'
import menu from './assets/components/menu.json'

function App() {
  const subSecoesEntradas = new Set(menu.entradas.map((p) => p.subcategoria));
  const subSecoesSaladas = new Set(menu.saladas.map((p) => p.subcategoria));
  const subSecoesPratos = new Set(menu.pratos.map((p) => p.subcategoria));
  const subSecoesDoces = new Set(menu.sobremesas.map((p) => p.subcategoria));
  const subSecoesBebidas = new Set(menu.bebidas.map((p) => p.subcategoria));
  
  return (
    <div id='container-body'>
          <Nav/>
          <main>
            <Secao nameSection="Entrada" produto={menu.entradas} nameSub={Array.from(subSecoesEntradas)}/>
            <br />
            <Secao nameSection="Saladas" produto={menu.saladas} nameSub={Array.from(subSecoesSaladas)}/>
            <br />
            <Secao nameSection="Pratos principais" produto={menu.pratos} nameSub={Array.from(subSecoesPratos)} />
            <br />
            <Secao nameSection="Sobremesas" produto={menu.sobremesas} nameSub={Array.from(subSecoesDoces)}/>
            <br />
            <Secao nameSection="Bebidas" produto={menu.bebidas} nameSub={Array.from(subSecoesBebidas)}/>

          </main>
          
          <Footer/>
    </div>
    

  )
}

export default App

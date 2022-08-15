import './App.css'
import { Footer } from './assets/components/Footer/Footer.jsx'
import {Nav} from './assets/components/Nav/Nav.jsx'
import { Secao } from './assets/components/Secao/Secao.jsx'
import menu from './assets/components/menu.json'
function App() {
  return (
    <div id='container-body'>
          <Nav/>
          <main>
            <Secao nameSection="Entrada" produto={menu.entradas}/>
            <br />
            <Secao nameSection="Saladas" produto={menu.saladas}/>
            <br />
            <Secao nameSection="Pratos principais" produto={menu.pratos}/>
            <br />
            <Secao nameSection="Sobremesas" produto={menu.sobremesas}/>
            <br />
            <Secao nameSection="Bebidas" produto={menu.bebidas}/>

          </main>
          
          <Footer/>
    </div>
    

  )
}

export default App

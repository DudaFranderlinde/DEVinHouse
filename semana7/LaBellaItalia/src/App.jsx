import './App.css'
import { Card } from './assets/components/Card/Card.jsx'
import { Footer } from './assets/components/Footer/Footer.jsx'
import {Nav} from './assets/components/Nav/Nav.jsx'
function App() {
  return (
    <div id='container-body'>
          <Nav/>
          <main>
            <Card/>
          </main>
          
          <Footer/>
    </div>
    

  )
}

export default App

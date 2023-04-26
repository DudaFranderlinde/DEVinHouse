import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Home } from './pages/Home/Home.jsx'
import { Sidebar } from './components/Sidebar/Sidebar'
import { MainContent } from './components/MainContent/MainCotent.jsx'

function App() {

  return (
    <div className="App">
      <Home>
      </Home>
    </div>
  )
}

export default App

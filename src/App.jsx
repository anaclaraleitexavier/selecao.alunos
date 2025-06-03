import { useState } from 'react'
import './App.css'
import Cadastro from './componentes/cadastro'
import Login from './componentes/login'
import Home from './componentes/home'
import Cadnotas from './componentes/cadnotas'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cadastro/>
    <Login/>
    <Home/>
    <Cadnotas/>

    </>
 
  )
}

export default App
 
import { Routes, Route } from 'react-router-dom'
import Cadastro from './componentes/cadastro'
import Login from './componentes/login'
import Home from './componentes/home'
import Cadnotas from './componentes/cadnotas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadnotas" element={<Cadnotas />} />
    </Routes>
  )
}

export default App

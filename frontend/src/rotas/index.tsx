import { Route, Routes } from "react-router-dom"
import AutenticateArea from "../paginas/AutenticateArea"
import Home from "../paginas/Home"
import Orderer from "../paginas/Orderer"
import PaginaBase from "../paginas/PaginaBase"


const Rotas = () => {
  return (<Routes>
    <Route path='/' element={<PaginaBase />}>
      <Route path='/' element={<Home />} />
    </Route>
    <Route path='minha-conta' element={<AutenticateArea />}>
      <Route path='pedidos' element={<Orderer />} />
    </Route>
  </Routes>)
}

export default Rotas
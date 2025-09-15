import './App.css'
import LogoEcommerce from './componentes/CartWidget/CartWidget'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return ( 
    <div className='ContenedorPrincipal'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

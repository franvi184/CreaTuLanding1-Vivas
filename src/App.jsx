import './App.css'
import LogoEcommerce from './componentes/CartWidget/CartWidget'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/NavBar/NavBar'

function App() {

  return (
    <div className='ContenedorPrincipal'>
      <NavBar/>
      <ItemListContainer texto="Aca esta nuestro primer props utilizado"/>
    </div>
  )
}

export default App

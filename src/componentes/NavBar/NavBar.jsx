import React from 'react'
import LogoEcommerce from '../CartWidget/CartWidget'
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
    <aside className='AsideCont'>
        <LogoEcommerce/>
        <nav>
            <ul>
                <li><a href="">Todos los productos</a></li>
                <li><a href="">Articulos perros</a></li>
                <li><a href="">Articulos gatos</a></li>
                <li><a href="">Pipetas y comprimidos</a></li>
            </ul>
        </nav>
        <footer>
            <p>Patitas felices. Todos los derechos reservados</p>
        </footer>
    </aside>
    </>
  )
}

export default NavBar
import React from 'react'
import LogoEcommerce from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <aside className='AsideCont'>
        <LogoEcommerce/>
        <nav>
            <ul>
                <li>
                  <Link to="/"> Todos los productos </Link>
                </li>
                <li>
                  <Link to="/categoria/perros"> Alimento perros</Link>
                </li>
                <li>
                  <Link to="/categoria/gatos"> Alimento gatos</Link>
                </li>
                <li>
                  <Link to="/categoria/compriPipetas"> Comprimidos y pipetas</Link>
                </li>
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
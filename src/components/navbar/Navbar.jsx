import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {

  const { pathname } = useLocation()

  return (
    <nav className={style.navContainer}>
        <Link className={pathname === '/' ? style.underline : style.link} to="/">Accueil</Link>
        <Link className={pathname === '/about' ? style.underline : style.link} to="/about">A propos</Link>
    </nav>
  )
}

export default Navbar
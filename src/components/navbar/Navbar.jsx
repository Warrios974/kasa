import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {

  const { pathname } = useLocation()

  if(pathname === '/') return (
    <nav className={style.navContainer}>
        <Link className={style.underline} to="/">Accueil</Link>
        <Link className={style.link} to="/about">A propos</Link>
    </nav>
  )
  if(pathname === '/about') return (
    <nav className={style.navContainer}>
        <Link className={style.link} to="/">Accueil</Link>
        <Link className={style.underline} to="/about">A propos</Link>
    </nav>
  )
  return (
    <nav className={style.navContainer}>
        <Link className={style.link} to="/">Accueil</Link>
        <Link className={style.link} to="/about">A propos</Link>
    </nav>
  )
}

export default Navbar
import React from 'react'
import Navbar from '../navbar/Navbar'
import { ReactComponent as LogoColor } from "../../assets/logo/logo-color.svg";
import style from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={style.header}>
        <Link to="/">
          <LogoColor className={style.logo} />
        </Link>
        <Navbar />
    </header>
  )
}

export default Header
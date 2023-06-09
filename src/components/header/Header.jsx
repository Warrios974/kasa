import React from 'react'
import Navbar from '../navbar/Navbar'
import { ReactComponent as LogoColor } from "../../assets/logo/logo-color.svg";
import style from './Header.module.css'

function Header() {
  return (
    <header className={style.header}>
        <LogoColor className={style.logo} />
        <Navbar />
    </header>
  )
}

export default Header
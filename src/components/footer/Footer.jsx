import React from 'react'
import { ReactComponent as LogoWhite } from "../../assets/logo/logo-white.svg";
import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
        <LogoWhite className={style.logo} />
        <p className={style.text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
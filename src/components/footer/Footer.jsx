import React from 'react'
import { ReactComponent as LogoWhite } from "../../assets/logo/logo-white.svg";
import style from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={style.footer}>
      <Link to='/'>
        <LogoWhite className={style.logo} />
      </Link>
        <p className={style.text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
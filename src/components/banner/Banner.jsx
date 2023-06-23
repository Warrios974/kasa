import React from 'react'
import style from './Banner.module.css'
import { useLocation } from 'react-router-dom'

function Banner({ propsBanner }) {

  const { pathname } = useLocation()

    const { title, background } = propsBanner

  return (
    <section className={pathname === '/about' ? style.InPageAbout : style.section}>
        <div className={style.imgFilter}></div>
        <img className={style.imgCover} src={background} alt=''/>
        {
            title !== '' &&
            <h1 className={style.title}>{title}</h1>
        }
    </section>
  )
}

export default Banner
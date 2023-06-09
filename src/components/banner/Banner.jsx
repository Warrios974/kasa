import React from 'react'
import style from './Banner.module.css'

function Banner({ propsBanner }) {

    const { title, background } = propsBanner

  return (
    <section className={style.section}>
        <div className={style.imgFilter}></div>
        <img className={style.imgCover} src={background} alt=''/>
        {
            title !== '' &&
            <h1 className={style.title}>Chez vous, partout et ailleurs</h1>
        }
    </section>
  )
}

export default Banner
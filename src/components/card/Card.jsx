import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

function Card(props) {

  const { id, title, cover} = props.card

  return (
    <Link className={style.linkCard} to={`/logement/${id}`} >
      <div className={style.imgFilter}></div>
      <img className={style.imgCover} src={cover} alt={title}/>
      <h3 className={style.title}>{title}</h3>
    </Link>
  )
}

export default Card
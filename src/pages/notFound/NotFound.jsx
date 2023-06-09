import React from 'react'
import { Link } from 'react-router-dom'
import style from './NotFound.module.css'

function NotFound() {
  return (
    <>
      <h1 className={style.titleNotFound}>
        404
      </h1>
      <span className={style.spanInstruction}>
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className={style.linkHome} to={`/`}>
        Retourner sur la page d’accueil
      </Link>
    </>
  )
}

export default NotFound
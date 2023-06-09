import React from 'react'
import style from './Tag.module.css'

function Tag({ tag }) {
  return (
    <span className={style.tag}>{tag}</span>
  )
}

export default Tag
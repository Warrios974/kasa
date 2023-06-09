import React from 'react'
import style from './Tag.module.css'

function Tag({ tags }) {
  return (
    <div className={style.tagContainer}>
        {
            tags.map((tag, index) => (
              <span 
                key={`${index}-tag`} 
                className={style.tag}
                >
                {tag}
              </span>
            ))
        }
    </div>
    
  )
}

export default Tag